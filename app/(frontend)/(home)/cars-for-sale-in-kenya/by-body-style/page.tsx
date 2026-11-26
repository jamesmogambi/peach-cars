import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import Link from "next/link";
import RenderCars from "@/components/FeaturedCars/RenderCars";
import { getAllCars } from "@/actions/cars";
import { formatText } from "@/lib/utils";

type Props = {
  params: Promise<{}>;
  searchParams: Promise<{ bodyStyle?: string; filter?: string }>;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { bodyStyle, filter = "all" } = await searchParams;
  const styles = bodyStyle?.split(",").map(formatText).join(", ") || "All";
  return {
    title: `${styles} Cars for Sale in Kenya | Peach Cars`,
    description: `Browse ${styles} cars for sale in Kenya at Peach Cars.`,
  };
}

const page = async ({ searchParams }: Props) => {
  const { bodyStyle, filter = "all" } = await searchParams;
  const bodyStyleSlugs = bodyStyle?.split(",") || [];
  
  // Fetch cars for each body style
  const carsPromises = bodyStyleSlugs.map((slug: string) => 
    getAllCars({ bodyStyle: slug, filter, limit: 20 })
  );
  const carsArrays = await Promise.all(carsPromises);
  const cars = carsArrays.flat();
  
  // Remove duplicates based on _id
  const uniqueCars = cars.filter((car, index, self) => 
    index === self.findIndex((c) => c._id === car._id)
  );

  const displayName = bodyStyleSlugs.length > 0 
    ? bodyStyleSlugs.map(formatText).join(", ")
    : "All Body Styles";

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex justify-center items-center flex-col mb-6 gap-3">
          <div className="flex items-center gap-3">
            <Link className="text-primary" href={"/"}>
              Home
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-primary">
              Cars for Sale
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-[#6c757d]">
              {displayName}
            </Link>
          </div>
          <h2 className="uppercase font-semibold text-[35.2px]">
            {displayName} for Sale in Kenya
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {[
            { value: "all", label: "All" },
            { value: "in-stock", label: "In Stock" },
            { value: "shipping", label: "Shipping" },
            { value: "new-arrivals", label: "New Arrivals" },
          ].map((f) => (
            <Link
              key={f.value}
              href={`/cars-for-sale-in-kenya/by-body-style?bodyStyle=${bodyStyle}&filter=${f.value}`}
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

        {/* Render cars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uniqueCars.length > 0 ? (
            uniqueCars.map((car: any) => (
              <RenderCars key={car._id} car={car} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-[20px] text-neutral-600">
                No {displayName.toLowerCase()} cars found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;