import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import LayoutHeader from "@/components/LayoutHeader";
import RenderCars from "@/components/FeaturedCars/RenderCars";
import { getAllCars } from "@/actions/cars";

export const dynamic = 'force-dynamic';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const metadata: Metadata = {
  title: "All Cars for Sale in Kenya | Peach Cars",
  description: "Browse all cars for sale in Kenya. Filter by brand, status, and more at Peach Cars.",
};

const page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const filter = params.filter as string || "all";
  const brand = params.brand as string || "";
  
  // Get all cars with optional brand filter
  const cars = await getAllCars({ brand, filter, limit: 50 });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <LayoutHeader slug="cars" />
        
        <div className="mb-8">
          <h1 className="uppercase font-semibold text-[35.2px] mb-6">
            All Cars for Sale in Kenya
          </h1>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { value: "all", label: "All Cars" },
              { value: "in-stock", label: "In Stock" },
              { value: "shipping", label: "Shipping" },
              { value: "new-arrivals", label: "New Arrivals" },
            ].map((f) => (
              <Link
                key={f.value}
                href={`/cars?filter=${f.value}`}
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

          {/* Brand Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-4 py-2 text-sm text-neutral-600">Brand:</span>
            <Link
              href="/cars"
              className={`px-4 py-2 rounded-full text-sm uppercase transition-colors ${
                !brand ? "bg-primary text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              All Brands
            </Link>
            {[
              "Toyota", "Honda", "Nissan", "Mazda", "Subaru", 
              "Mitsubishi", "Suzuki", "Isuzu", "Mercedes Benz", 
              "BMW", "Audi", "Volkswagen", "Hyundai", "Kia"
            ].map((b) => (
              <Link
                key={b}
                href={`/cars?brand=${b.toLowerCase().replace(" ", "-")}&filter=${filter}`}
                className={`px-4 py-2 rounded-full text-sm uppercase transition-colors ${
                  brand === b.toLowerCase().replace(" ", "-") ? "bg-primary text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {b}
              </Link>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.length > 0 ? (
            cars.map((car: any) => (
              <RenderCars key={car._id} car={car} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-[20px] text-neutral-600">No cars found matching your criteria.</p>
              <Link href="/cars" className="text-primary underline mt-4 inline-block">
                Clear filters
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;