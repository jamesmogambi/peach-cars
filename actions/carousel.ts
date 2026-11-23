"use server";

import { payload } from "@/lib/payload";
export async function fetchCarousels() {
  try {
    const carousels = await payload.find({
      collection: "carousel",
    });

    console.log("queried results: ", carousels);
    return carousels?.docs;
  } catch (error) {
    console.error("Error fetching carousels:", error);
    return [];
  }
}
