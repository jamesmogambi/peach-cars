"use server";

import { sanityClient } from "@/lib/sanity";

const getBrands = async () => {
  try {
    const query = `*[_type == "brand"] | order(name asc) {
      _id,
      name,
      slug,
      logo { asset->{_id, url} },
      models
    }`;
    const brands = await sanityClient.fetch(query);
    console.log("Fetched brands from Sanity:", brands?.length);
    return brands || [];
  } catch (error) {
    console.error("Error fetching brands from Sanity:", error);
    // Return fallback brands if Sanity fails
    return [
      { _id: "1", name: "Toyota", slug: { current: "toyota" }, logo: null, models: [] },
      { _id: "2", name: "Honda", slug: { current: "honda" }, logo: null, models: [] },
      { _id: "3", name: "Nissan", slug: { current: "nissan" }, logo: null, models: [] },
      { _id: "4", name: "Mazda", slug: { current: "mazda" }, logo: null, models: [] },
      { _id: "5", name: "Subaru", slug: { current: "subaru" }, logo: null, models: [] },
      { _id: "6", name: "Mitsubishi", slug: { current: "mitsubishi" }, logo: null, models: [] },
      { _id: "7", name: "Suzuki", slug: { current: "suzuki" }, logo: null, models: [] },
      { _id: "8", name: "Isuzu", slug: { current: "isuzu" }, logo: null, models: [] },
    ];
  }
};

export default getBrands;
