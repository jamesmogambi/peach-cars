"use server";

import { sanityClient } from "@/lib/sanity";

export const getCarBySlug = async (slug: string) => {
  try {
    const query = `*[_type == "car" && slug.current == $slug][0] {
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
      bodyStyle->{_id, name, slug}
    }`;
    
    const car = await Promise.race([
      sanityClient.fetch(query, { slug }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 15000))
    ]);
    
    console.log("Fetched car from Sanity:", car?.title);
    return car || null;
  } catch (error) {
    console.error("Error fetching car from Sanity:", error);
    return null;
  }
};

export const getSimilarCars = async (brandName: string, fuel: string, currentId: string, limit: number = 6) => {
  try {
    const query = `*[_type == "car" && brand->name == $brandName && fuel == $fuel && _id != $currentId] | order(_createdAt desc)[0...${limit}] {
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
      images[0]{ asset->{_id, url} },
      brand->{_id, name, slug, logo{asset->{_id, url}}},
      bodyStyle->{_id, name, slug}
    }`;
    
    const cars = await Promise.race([
      sanityClient.fetch(query, { brandName, fuel, currentId }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 15000))
    ]);
    
    console.log("Fetched similar cars from Sanity:", cars?.length);
    return cars || [];
  } catch (error) {
    console.error("Error fetching similar cars from Sanity:", error);
    return [];
  }
};