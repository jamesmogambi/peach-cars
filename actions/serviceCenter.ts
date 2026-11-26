"use server";

import { sanityClient } from "@/lib/sanity";

const FALLBACK_SERVICE_CENTER = {
  about:
    "Peach Cars Service Center is your trusted partner for all vehicle maintenance and repair needs in Eldoret, Kenya. Our state-of-the-art facility is equipped with the latest diagnostic tools and staffed by certified technicians who specialize in a wide range of vehicle makes and models. Whether you need routine servicing, major repairs, or specialized diagnostics, we are committed to delivering quality workmanship and transparent pricing. We use genuine parts and follow manufacturer specifications to ensure your vehicle performs at its best.",
  coverImage: { asset: { url: "/images/our-services.jpg" } },
  whyChooseUs: [
    {
      _id: "1",
      title: "Certified Technicians",
      description:
        "Our team of certified technicians has years of experience working with all major vehicle brands. They undergo regular training to stay updated with the latest automotive technology.",
      icon: { asset: { url: "/images/our-services.jpg" } },
    },
    {
      _id: "2",
      title: "Genuine Parts",
      description:
        "We use only genuine OEM parts for all repairs and maintenance, ensuring your vehicle maintains its performance, safety, and warranty compliance.",
      icon: { asset: { url: "/images/our-services.jpg" } },
    },
    {
      _id: "3",
      title: "Modern Equipment",
      description:
        "Our workshop is equipped with the latest diagnostic tools and equipment, allowing us to accurately identify and fix issues quickly and efficiently.",
      icon: { asset: { url: "/images/our-services.jpg" } },
    },
    {
      _id: "4",
      title: "Transparent Pricing",
      description:
        "We believe in honest, upfront pricing with no hidden costs. You will receive a detailed estimate before any work begins, so you know exactly what to expect.",
      icon: { asset: { url: "/images/our-services.jpg" } },
    },
  ],
  footer:
    "Visit Peach Cars Service Center today for all your vehicle maintenance needs. Book an appointment online or call us directly.",
};

export async function getServiceCenter() {
  try {
    const query = `*[_type == "service"][0] {
      _id,
      title,
      about,
      coverImage { asset->{_id, url} },
      whyChooseUs[] {
        _id,
        title,
        description,
        icon { asset->{_id, url} }
      },
      footer
    }`;

    const service = await Promise.race([
      sanityClient.fetch(query),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 15000)),
    ]);

    console.log("Fetched service center from Sanity:", service ? "found" : "not found");
    return service || FALLBACK_SERVICE_CENTER;
  } catch (error) {
    console.error("Error fetching service center from Sanity:", error);
    return FALLBACK_SERVICE_CENTER;
  }
}