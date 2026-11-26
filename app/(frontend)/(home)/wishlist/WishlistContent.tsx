"use client";

import { useWishlist } from "@/lib/wishlist";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Heart, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

const WishlistContent = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-16">
        <Heart className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
        <p className="text-[20px] text-neutral-600 mb-6">Your wishlist is empty</p>
        <Link
          href="/cars"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Browse Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlist.map((car) => (
        <div
          key={car._id}
          className={cn(
            "rounded-xl overflow-hidden shadow-lg hover:shadow-xl w-full bg-white",
          )}
        >
          {/* image section */}
          <div className="relative w-full h-48">
            <div className="absolute inset-0">
              {(Array.isArray(car.images) ? car.images[0]?.asset?.url : car.images?.asset?.url) ? (
                <Image
                  className="object-cover w-full h-full"
                  alt={car.title}
                  src={Array.isArray(car.images) ? car.images[0]?.asset?.url : car.images?.asset?.url}
                  quality={99}
                  width={400}
                  height={300}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>

            {/* Overlay Layer */}
            <div className="flex justify-between mt-6 pr-3 px-3">
              <div className=" ">
                <h5 className="bg-primary w-[100px] p-0.5 text-center text-[10px] px-2 text-white uppercase font-semibold">
                  {car.isNewArrival ? "new arrival" : "available"}
                </h5>
                <h5 className="bg-white w-[110px] p-0.5 text-center font-semibold text-[12px]   text-black">
                  {car.year}
                </h5>
              </div>
              <button
                onClick={() => removeFromWishlist(car._id)}
                className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                aria-label="Remove from wishlist"
              >
                <Heart className="w-5 h-5 text-red-500 fill-red-500" stroke="red" strokeWidth={0} />
              </button>
            </div>
          </div>

          {/* // bottom section */}
          <div className="mt-6 p-[16px] text-[#7D7D7D]">
            <div className="space-y-2 ">
              <p className="text-[14px] uppercase ">
                make <span className="font-semibold text-black">{car.brand?.name}</span>
              </p>

              <Link href={`/detail/${car.slug.current}`}>
                <h5 className="font-semibold  text-[20px]  text-black hover:text-primary transition-colors">
                  {car.title}
                </h5>
              </Link>
              <p className="text-[14px] uppercase ">
                year <span className="font-semibold text-black">{car.year}</span>
              </p>
              <h6 className="text-primary text-[20px] font-semibold">
                {formatPrice(car.price.toString())}
              </h6>
            </div>
            <hr className="my-3 border-neutral-200" />
            <div className="space-y-2">
              <p className="text-[14px] ">
                Availability{" "}
                <span className="font-semibold text-black">
                  {car.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p className="text-[14px] ">
                Transmission{" "}
                <span className="font-semibold text-black">{car.transmission}</span>
              </p>
              <p className="text-[14px] ">
                Fuel <span className="font-semibold text-black">{car.fuel}</span>
              </p>
              <p className="text-[14px] ">
                Mileage{" "}
                <span className="font-semibold text-black">
                  {car.mileage.toLocaleString()} km
                </span>
              </p>
            </div>

            <div className="space-y-2 my-3">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={`/detail/${car.slug.current}`}
                  className="py-2 px-4 text-[12px] text-center border border-neutral-300 rounded hover:bg-neutral-100 transition-colors"
                >
                  more details
                </Link>
                <button className="py-2 px-4 text-[12px] text-center bg-black text-white rounded hover:bg-neutral-800 transition-colors">
                  get a quote
                </button>
              </div>
              <Link
                href={`/reserve/${car.slug.current}`}
                className="py-2 w-full bg-black text-white hover:bg-primary text-center block rounded transition-colors"
              >
                reserve this car
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistContent;