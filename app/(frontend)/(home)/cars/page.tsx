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
  const search = params.search as string || "";
  
  // Get all cars with optional brand filter and search
  const cars = await getAllCars({ brand, filter, limit: 50, search });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <LayoutHeader slug="cars" />
        
        <div className="mb-8">
          <h1 className="uppercase font-semibold text-[35.2px] mb-6">
            {search ? `Search Results for "${search}"` : "All Cars for Sale in Kenya"}
          </h1>
          
          {search && (
            <p className="text-neutral-600 mb-6">
              Found {cars.length} car{cars.length !== 1 ? "s" : ""} matching your search.
              <Link href="/cars" className="text-primary underline ml-2">
                Clear search
              </Link>
            </p>
          )}

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
                href={`/cars?filter=${f.value}${brand ? `&brand=${brand}` : ""}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
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
              href={`/cars${filter !== "all" ? `?filter=${filter}` : ""}${search ? `${filter !== "all" ? "&" : "?"}search=${encodeURIComponent(search)}` : ""}`}
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
                href={`/cars?brand=${b.toLowerCase().replace(" ", "-")}&filter=${filter}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
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
              <p className="text-[20px] text-neutral-600">
                {search 
                  ? `No cars found matching "${search}".`
                  : "No cars found matching your criteria."
                }
              </p>
              <Link 
                href={search ? "/cars" : "/cars"} 
                className="text-primary underline mt-4 inline-block"
              >
                {search ? "Clear search" : "Clear filters"}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;