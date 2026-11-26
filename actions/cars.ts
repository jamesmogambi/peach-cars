"use server";

import { sanityClient } from "@/lib/sanity";

export const getAllCars = async (options: {
  brand?: string;
  filter?: string;
  limit?: number;
} = {}) => {
  try {
    const { brand, filter = "all", limit = 50 } = options;
    
    // Convert URL brand format (e.g., "mercedes-benz") to Sanity format (e.g., "Mercedes Benz")
    const sanityBrand = brand 
      ? brand.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : undefined;
    
    let query = `*[_type == "car"`;
    
    if (sanityBrand) {
      query += ` && lower(brand->name) == $brand`;
    }
    
    if (filter === "in-stock") {
      query += ` && inStock == true`;
    } else if (filter === "shipping") {
      query += ` && shippingStatus == "shipped"`;
    } else if (filter === "new-arrivals") {
      query += ` && isNewArrival == true`;
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
      sanityClient.fetch(query, { brand: sanityBrand?.toLowerCase() }),
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