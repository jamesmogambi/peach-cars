"use server";

import { sanityClient } from "@/lib/sanity";

export const getFeaturedCars = async (limit: number = 8) => {
  try {
    const query = `*[_type == "car" && featured == true] | order(_createdAt desc)[0...${limit}] {
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
    
    // Longer timeout
    const cars = await Promise.race([
      sanityClient.fetch(query),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 15000))
    ]);
    
    console.log("Fetched featured cars from Sanity:", cars?.length);
    return cars || [];
  } catch (error) {
    console.error("Error fetching featured cars from Sanity:", error);
    return [];
  }
};