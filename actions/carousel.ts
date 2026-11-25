"use server";

import { payload } from "@/lib/payload";

const FALLBACK_CAROUSELS = [
  {
    id: "fallback-1",
    image: { url: "/images/slider1.png" },
    title: "Quality Pre-Owned Vehicles",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: "fallback-2",
    image: { url: "/images/our-services.jpg" },
    title: "Expert Vehicle Servicing",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: "fallback-3",
    image: { url: "/images/who-we-are.jpg" },
    title: "Trusted Dealer in Kenya",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: "fallback-4",
    image: { url: "/images/contact-us.jpg" },
    title: "Visit Our Showroom in Eldoret",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

export async function fetchCarousels() {
  try {
    const carousels = await payload.find({
      collection: "carousel",
    });

    const docs = carousels?.docs;
    if (docs && docs.length > 0) {
      console.log("queried results: ", carousels);
      return docs;
    }

    console.log("No carousel data from CMS, using fallback images");
    return FALLBACK_CAROUSELS;
  } catch (error) {
    console.error("Error fetching carousels:", error);
    return FALLBACK_CAROUSELS;
  }
}
