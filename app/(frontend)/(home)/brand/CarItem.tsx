"use client";

import ButtonLink from "@/components/ButtonLink";
import MyButton from "@/components/MyButton";
import { Separator } from "@/components/ui/separator";
import { cn, formatPrice } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/lib/wishlist";

interface Prop {
  className?: string;
  car: {
    _id: string;
    title: string;
    slug: { current: string };
    price: number;
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
    description: string;
    inStock: boolean;
    images:
      | { asset: { _id: string; url: string } }
      | { asset: { _id: string; url: string } }[];
    brand: {
      _id: string;
      name: string;
      slug: { current: string };
      logo?: { asset: { _id: string; url: string } };
    };
    bodyStyle: { _id: string; name: string; slug: { current: string } };
  };
}
const CarItem = ({ className, car }: Prop) => {
  const router = useRouter();
  const {
    _id,
    title,
    slug,
    price,
    year,
    mileage,
    fuel,
    transmission,
    inStock,
    images,
    brand,
  } = car;

  const carPrice = formatPrice(price.toString());
  const imageUrl = Array.isArray(images)
    ? images?.[0]?.asset?.url
    : images?.asset?.url;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);

  React.useEffect(() => {
    setIsWishlisted(isInWishlist(_id));
  }, [_id, isInWishlist]);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(car);
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg hover:shadow-xl w-full",
        className,
      )}
    >
      {/* image section */}
      <div className="relative w-full h-48">
        <div className="absolute inset-0">
          {imageUrl ? (
            <Image
              className="object-cover w-full h-full"
              alt={title}
              src={imageUrl}
              priority
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
        <Link href={`/detail/${slug.current}`} className="absolute inset-0 ">
          <div className="flex justify-between mt-6 pr-3">
            <div className=" ">
              <h5 className="bg-primary w-[100px] p-0.5 text-center text-[10px] px-2 text-white uppercase font-semibold">
                new arrival
              </h5>
              <h5 className="bg-white w-[110px] p-0.5 text-center font-semibold text-[12px]   text-black">
                {year}
              </h5>
            </div>
            <Heart
              onClick={handleWishlistToggle}
              className="w-6 h-6 transition-colors cursor-pointer"
              fill={isWishlisted ? "red" : "white"}
              stroke="red"
              strokeWidth={isWishlisted ? 0 : 1.5}
            />
          </div>
        </Link>
      </div>

      {/* // bottom section */}
      <div className="mt-6 p-[16px] text-[#7D7D7D]">
        <div className="space-y-2 ">
          <p className="text-[14px] uppercase ">
            make <span className="font-semibold text-black">{brand?.name}</span>
          </p>

          <h5 className="font-semibold  text-[20px]  text-black">{title}</h5>
          <p className="text-[14px] uppercase ">
            year <span className="font-semibold text-black">{year}</span>
          </p>
          <h6 className="text-primary text-[20px] font-semibold">{carPrice}</h6>
        </div>
        <Separator className="my-3 h-[0.5px]" />
        <div className="space-y-2">
          <p className="text-[14px] ">
            Availability{" "}
            <span className="font-semibold text-black">
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="text-[14px] ">
            Transmission{" "}
            <span className="font-semibold text-black">{transmission}</span>
          </p>
          <p className="text-[14px] ">
            Fuel <span className="font-semibold text-black">{fuel}</span>
          </p>
          <p className="text-[14px] ">
            Mileage{" "}
            <span className="font-semibold text-black">
              {mileage.toLocaleString()} km
            </span>
          </p>
        </div>

        <div className="space-y-2 my-3">
          <div className="grid grid-cols-2 gap-3">
            <ButtonLink
              text="more details"
              className="py-0 px-4 text-[10px] hover:bg-black"
              href={`/detail/${slug.current}`}
            ></ButtonLink>
            <MyButton
              className="hover:bg-black py-0"
              text="get a quote"
              onClick={() => router.push("/contact-us")}
            />
          </div>
          <ButtonLink
            className="py-0 w-full bg-black hover:bg-primary"
            href={`/reserve/${slug.current}`}
            text="reserve this car"
          />
        </div>
      </div>
    </div>
  );
};

export default CarItem;
