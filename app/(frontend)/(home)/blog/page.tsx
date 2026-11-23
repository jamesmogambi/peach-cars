import LayoutHeader from "@/components/LayoutHeader";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog ",
  description:
    "Latest news, tips, and insights from Saisa Motors — your trusted dealer in new and clean second-hand motor vehicles in Kenya.",
};

const posts = [
  {
    id: "1",
    title: "How to Buy a Second-Hand Car in Kenya: A Complete Guide",
    excerpt:
      "Buying a second-hand car can be overwhelming. From inspection to paperwork, here is everything you need to know to make a confident purchase.",
    image: "/images/who-we-are.jpg",
    date: "November 10, 2026",
    slug: "how-to-buy-a-second-hand-car-in-kenya",
  },
  {
    id: "2",
    title: "Car Financing in Kenya: Bank Loans vs. Asset Finance",
    excerpt:
      "Compare the most popular car financing options available in Kenya and find out which one works best for your budget and lifestyle.",
    image: "/images/bank-financing-icon.png",
    date: "October 28, 2026",
    slug: "car-financing-in-kenya",
  },
  {
    id: "3",
    title: "Why Regular Vehicle Maintenance Saves You Money",
    excerpt:
      "Skipping service intervals may seem harmless, but neglecting routine maintenance can lead to costly repairs down the road. Learn why prevention is cheaper than cure.",
    image: "/images/our-services.jpg",
    date: "October 15, 2026",
    slug: "why-regular-vehicle-maintenance-saves-you-money",
  },
  {
    id: "4",
    title: "Trade-In vs. Selling Your Car Privately in Kenya",
    excerpt:
      "Weigh the pros and cons of trading in your old car to a dealer versus selling it privately. Get more value with less hassle.",
    image: "/images/trade-carr.jpg",
    date: "September 30, 2026",
    slug: "trade-in-vs-selling-privately",
  },
  {
    id: "5",
    title: "5 Signs It Is Time to Upgrade Your Car",
    excerpt:
      "Rising repair costs, poor fuel economy, or growing family needs — here are the telltale signs that your next upgrade is due.",
    image: "/images/slider1.png",
    date: "September 12, 2026",
    slug: "5-signs-its-time-to-upgrade-your-car",
  },
  {
    id: "6",
    title: "Preparing for Your First Road Trip: A Checklist",
    excerpt:
      "Planning a long drive this season? Our road-trip checklist covers vehicle checks, documents, and emergency essentials you should never leave home without.",
    image: "/images/schedule-img.jpg",
    date: "August 25, 2026",
    slug: "preparing-for-your-first-road-trip",
  },
];

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4 lg:px-0">
        <LayoutHeader slug="blog" />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10">
        <p className="text-center text-[20px] text-[#6c757d] mb-10">
          News, tips, and insights from the Saisa Motors team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="p-[16px] flex flex-col flex-1">
                <p className="text-[12px] text-[#6c757d] uppercase">
                  {post.date}
                </p>
                <h3 className="font-semibold text-[20px] mt-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-[14px] text-[#6c757d] flex-1">
                  {post.excerpt}
                </p>
                <span className="text-primary text-[14px] font-semibold mt-3 uppercase">
                  read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;