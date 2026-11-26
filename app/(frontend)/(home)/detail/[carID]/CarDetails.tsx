import ButtonLink from "@/components/ButtonLink";
import MyButton from "@/components/MyButton";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import CarSpecifications from "./CarSpecifications";
import PictureInGallery from "./PictureInGallery";

interface Prop {
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
    images: { asset: { _id: string; url: string } } | { asset: { _id: string; url: string } }[];
    brand: { _id: string; name: string; slug: { current: string }; logo?: { asset: { _id: string; url: string } } };
    bodyStyle: { _id: string; name: string; slug: { current: string } };
  };
}

const CarDetails = ({ car }: Prop) => {
  const { images, title, slug, brand, bodyStyle } = car;
  const imageUrl = Array.isArray(images) ? images?.[0]?.asset?.url : images?.asset?.url;

  return (
    <div className="lg:max-w-6xl p-4 mx-auto w-full">
      {/* // section 1 */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="basis-full lg:basis-1/4">
          <div className="space-y-7">
            <div className="flex text-[19px]   mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Product Id</p>
              <strong className="">{slug.current}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Availability</p>
              <strong className="">
                {car.inStock ? "In Stock" : "Out of Stock"}
              </strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Make</p>
              <strong className="">{brand?.name}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Year</p>
              <strong className="">{car.year}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between ">
              <p className=" text-[#7d7d7d]">Transmission</p>
              <strong className="">{car.transmission}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Fuel</p>
              <strong className="">{car.fuel}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Mileage</p>
              <strong className="">{car.mileage.toLocaleString()} km</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Body Style</p>
              <strong className="">{bodyStyle?.name}</strong>
            </div>

            <h2 className="text-primary mb-[15px] text-[35px]">
              {formatPrice(car.price.toString())}
            </h2>
          </div>
        </div>
        <div className="basis-full lg:flex-1  ">
          <div className="lg:h-full h-[300px]  relative w-full">
            {/* Background Layer */}
            <div className="absolute inset-0">
              {imageUrl ? (
                <Image
                  className="object-cover w-full h-full"
                  alt={title}
                  src={imageUrl}
                  priority
                  quality={99}
                  width={800}
                  height={600}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            {/* Overlay Layer */}
          </div>
        </div>
      </div>

      {/* // price section */}
      <div className="w-full mt-8">
        <div className="flex gap-2">
          <MyButton text="get a quote" className="hover:bg-black" />
          <ButtonLink
            href={`/detail/${slug.current}`}
            className="bg-black hover:bg-black "
            text="reserve this car"
          />
        </div>
      </div>

      <CarSpecifications car={car} />
      <PictureInGallery car={car} className="my-12" />
    </div>
  );
};

export default CarDetails;
