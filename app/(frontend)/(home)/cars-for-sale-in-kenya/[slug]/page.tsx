import React from "react";
import Link from "next/link";
import RenderCars from "@/components/FeaturedCars/RenderCars";
import { Metadata, ResolvingMetadata } from "next";
import { getAllCars } from "@/actions/cars";
import { formatText } from "@/lib/utils";

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const txt = (await params).slug;
  const heading = formatText(txt);
  return {
    title: `${txt} for sale in Kenya `,
  };
}

const page = async ({ params, searchParams }: Props) => {
  const slug = (await params).slug;
  const paramsObj = await searchParams;
  const filter = paramsObj.filter as string || "all";
  
  // Convert URL slug (e.g., "mercedes-benz") to Sanity brand name (e.g., "Mercedes Benz")
  const brand = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  // Get cars with server-side filtering
  const cars = await getAllCars({ brand, filter, limit: 50 });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex justify-center items-center flex-col mb-6 gap-3">
          <div className="flex items-center gap-3">
            <Link className="text-primary" href={"/"}>
              Home
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-[#6c757d]">
              {slug} For Sale in Kenya
            </Link>
          </div>
          <h2 className="uppercase font-semibold text-[35.2px]">
            {slug} For Sale in Kenya
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { value: "all", label: "All" },
              { value: "in-stock", label: "In Stock" },
              { value: "shipping", label: "Shipping" },
              { value: "new-arrivals", label: "New Arrivals" },
            ].map((f) => (
              <Link
                key={f.value}
                href={`/cars-for-sale-in-kenya/${slug}?filter=${f.value}`}
                className={`px-4 py-2 rounded-full text-sm uppercase transition-colors ${
                  filter === f.value
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* // render cars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.length > 0 ? (
            cars.map((car: any) => (
              <RenderCars key={car._id} car={car} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-[20px] text-neutral-600">No cars found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;