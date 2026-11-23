"use server";

import { payload } from "@/lib/payload";

const defaultAboutUs = {
  "about-us":
    "Saisa Motors Limited is a premier dealer in new and clean second-hand motor vehicles in Kenya. With years of experience in the automotive industry, we have built a reputation for offering quality vehicles, honest advice, and flexible financing options. Our team is committed to helping you find the right car for your needs and budget, ensuring a smooth and enjoyable buying experience from start to finish.",
  "core-values": [
    { id: "1", name: "Integrity", icon: { url: "/images/heart-shape.png" } },
    { id: "2", name: "Quality Vehicles", icon: { url: "/images/trade-In-car.png" } },
    { id: "3", name: "Fair Pricing", icon: { url: "/images/cash-payment-icon.png" } },
    { id: "4", name: "Flexible Financing", icon: { url: "/images/bank-financing-icon.png" } },
  ],
  "our-mission":
    "To provide our customers with quality vehicles and exceptional service at fair prices, making car ownership accessible, affordable, and hassle-free.",
  vision:
    "To be East Africa's most trusted automotive dealership, driving our customers' dreams forward one car at a time.",
  "our-services": [
    { id: "1", service: "New and used car sales" },
    { id: "2", service: "Car financing and bank partnerships" },
    { id: "3", service: "Trade-in valuation and exchange" },
    { id: "4", service: "Vehicle inspection and certification" },
    { id: "5", service: "After-sales support and maintenance" },
  ],
  "tailored-services": [
    { id: "1", service: "Corporate fleet management" },
    { id: "2", service: "Employee car ownership schemes" },
    { id: "3", service: "Customized financing solutions" },
    { id: "4", service: "Priority servicing and maintenance" },
    { id: "5", service: "Dedicated corporate account management" },
  ],
};

export async function getAboutUs() {
  try {
    const res = await payload.find({
      collection: "about-us", // Collection name
      //   limit: 1, // Assuming there's only one document
    });

    console.log("res", res);
    return res.docs[0] ?? defaultAboutUs; // Return the first document if found, otherwise default content
  } catch (error) {
    console.error("Error fetching About Us data:", error);
    return defaultAboutUs;
  }
}