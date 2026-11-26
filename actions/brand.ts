"use server";

import { sanityClient } from "@/lib/sanity";

const FALLBACK_BRANDS = [
  { _id: "1", name: "Toyota", slug: { current: "toyota" }, logo: null, models: [] },
  { _id: "2", name: "Honda", slug: { current: "honda" }, logo: null, models: [] },
  { _id: "3", name: "Nissan", slug: { current: "nissan" }, logo: null, models: [] },
  { _id: "4", name: "Mazda", slug: { current: "mazda" }, logo: null, models: [] },
  { _id: "5", name: "Subaru", slug: { current: "subaru" }, logo: null, models: [] },
  { _id: "6", name: "Mitsubishi", slug: { current: "mitsubishi" }, logo: null, models: [] },
  { _id: "7", name: "Suzuki", slug: { current: "suzuki" }, logo: null, models: [] },
  { _id: "8", name: "Isuzu", slug: { current: "isuzu" }, logo: null, models: [] },
];

const getBrands = async () => {
  try {
    const query = `*[_type == "brand"] | order(name asc) {
      _id,
      name,
      slug,
      logo { asset->{_id, url} },
      models
    }`;
    
    // Simple fetch with longer timeout
    const brands = await Promise.race([
      sanityClient.fetch(query),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 8000))
    ]);
    
    console.log("Fetched brands from Sanity:", brands?.length);
    return brands || FALLBACK_BRANDS;
  } catch (error) {
    console.error("Error fetching brands from Sanity:", error);
    return FALLBACK_BRANDS;
  }
};

export default getBrands;
