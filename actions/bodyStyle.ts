"use server";

import { sanityClient } from "@/lib/sanity";

// Local fallback images for common body styles
const BODY_STYLE_IMAGES: Record<string, string> = {
  sedan: "/images/sedan.svg",
  suv: "/images/suv.svg",
  hatchback: "/images/hatchback.svg",
  pickup: "/images/pickup.svg",
  coupe: "/images/coupe.svg",
  wagon: "/images/wagon.svg",
  convertible: "/images/convertible.svg",
  van: "/images/van.svg",
};

const FALLBACK_BODY_STYLES = [
  { _id: "1", name: "Sedan", slug: { current: "sedan" }, image: { asset: { url: BODY_STYLE_IMAGES.sedan } } },
  { _id: "2", name: "SUV", slug: { current: "suv" }, image: { asset: { url: BODY_STYLE_IMAGES.suv } } },
  { _id: "3", name: "Hatchback", slug: { current: "hatchback" }, image: { asset: { url: BODY_STYLE_IMAGES.hatchback } } },
  { _id: "4", name: "Pickup", slug: { current: "pickup" }, image: { asset: { url: BODY_STYLE_IMAGES.pickup } } },
  { _id: "5", name: "Coupe", slug: { current: "coupe" }, image: { asset: { url: BODY_STYLE_IMAGES.coupe } } },
  { _id: "6", name: "Wagon", slug: { current: "wagon" }, image: { asset: { url: BODY_STYLE_IMAGES.wagon } } },
  { _id: "7", name: "Convertible", slug: { current: "convertible" }, image: { asset: { url: BODY_STYLE_IMAGES.convertible } } },
  { _id: "8", name: "Van", slug: { current: "van" }, image: { asset: { url: BODY_STYLE_IMAGES.van } } },
];

export const getAllBodyStyles = async () => {
  try {
    const query = `*[_type == "bodyStyle"] | order(name asc) {
      _id,
      name,
      slug,
      image { asset->{_id, url} }
    }`;
    
    const bodyStyles = await Promise.race([
      sanityClient.fetch(query),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 8000))
    ]);
    
    console.log("Fetched body styles from Sanity:", bodyStyles?.length);
    
    // If Sanity returns data but without images, add local fallbacks
    if (bodyStyles && bodyStyles.length > 0) {
      return bodyStyles.map((style: any) => {
        if (!style.image?.asset?.url) {
          const slug = style.slug?.current?.toLowerCase() || style.name.toLowerCase();
          return {
            ...style,
            image: { asset: { url: BODY_STYLE_IMAGES[slug] || null } }
          };
        }
        return style;
      });
    }
    
    return bodyStyles || FALLBACK_BODY_STYLES;
  } catch (error) {
    console.error("Error fetching body styles from Sanity:", error);
    return FALLBACK_BODY_STYLES;
  }
};