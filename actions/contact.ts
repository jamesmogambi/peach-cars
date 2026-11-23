"use server";

import { payload } from "@/lib/payload";

const defaultContact = {
  title: "Get In Touch With Us",
  location: "Eldoret, Kenya",
  phone: "0746962447",
  email: "info@saisamotors.co.ke",
  coverImage: { url: "/images/contact-us.jpg" },
};

export async function getContact() {
  try {
    const res = await payload.find({
      collection: "contact", // Collection name
    });

    return res.docs[0] ?? defaultContact; // Return the first document if found, otherwise default details
  } catch (error) {
    console.error("Error fetchicng Contact  details:", error);
    return defaultContact;
  }
}