"use server";

import { sanityClient } from "@/lib/sanity";

export const getAllCars = async (options: {
  brand?: string;
  bodyStyle?: string;
  filter?: string;
  limit?: number;
  search?: string;
} = {}) => {
  try {
    const { brand, bodyStyle, filter = "all", limit = 50, search } = options;
    
    // Convert URL brand format (e.g., "mercedes-benz") to Sanity format (e.g., "Mercedes Benz")
    const sanityBrand = brand 
      ? brand.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : undefined;
    
    let query = `*[_type == "car"`;
    
    if (sanityBrand) {
      query += ` && lower(brand->name) == $brand`;
    }
    
    if (bodyStyle) {
      query += ` && lower(bodyStyle->slug.current) == $bodyStyle`;
    }
    
    if (filter === "in-stock") {
      query += ` && inStock == true`;
    } else if (filter === "shipping") {
      query += ` && shippingStatus == "shipped"`;
    } else if (filter === "new-arrivals") {
      query += ` && isNewArrival == true`;
    }
    
    if (search) {
      query += ` && (title match $search || brand->name match $search || description match $search)`;
    }
    
    query += `] | order(_createdAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      price,
      year,
      mileage,
      fuel,
      transmission,
      description,
      inStock,
      images[]{ asset->{_id, url} },
      brand->{_id, name, slug, logo{asset->{_id, url}}},
      bodyStyle->{_id, name, slug},
      isNewArrival,
      shippingStatus
    }`;
    
    const cars = await Promise.race([
      sanityClient.fetch(query, { 
        brand: sanityBrand?.toLowerCase(), 
        bodyStyle: bodyStyle?.toLowerCase(),
        search: search ? `*${search}*` : undefined 
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 15000))
    ]);
    
    return cars || [];
  } catch (error) {
    console.error("Error fetching cars from Sanity:", error);
    return [];
  }
};

export const getCarsByBrand = async (brand: string, limit: number = 50) => {
  return getAllCars({ brand, limit });
};