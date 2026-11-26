import { splitArray } from "@/lib/utils";
import React from "react";
import CarPreviewCarousel from "./CarPreviewCarousel";
import MyButton from "@/components/MyButton";
import ButtonLink from "@/components/ButtonLink";

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

const CarSpecifications = ({ car }: Prop) => {
  // Build specifications from available car data
  const specs = [
    { specification: `Year: ${car.year}` },
    { specification: `Mileage: ${car.mileage.toLocaleString()} km` },
    { specification: `Fuel: ${car.fuel}` },
    { specification: `Transmission: ${car.transmission}` },
    { specification: `Body Style: ${car.bodyStyle?.name}` },
    { specification: `Make: ${car.brand?.name}` },
    { specification: `Condition: ${car.inStock ? "In Stock" : "Out of Stock"}` },
  ];

  const { firstHalf, secondHalf } = splitArray(specs);
  return (
    <div className="w-full mt-16 lg:max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-full lg:flex-1  rounded-t-xl overflow-hidden  ">
          <CarPreviewCarousel car={car} className="" />
        </div>
        <div className="basis-full lg:basis-1/3">
          <div>
            <h2 className="text-[35.2px] mb-3 ">Specifications</h2>
            <div className="grid grid-cols-2 gap-5 px-4 w-full">
              {firstHalf.length > 0 && (
                <ul className="list-disc space-y-3">
                  {firstHalf.map((i: any, j: any) => (
                    <li key={j} className="">
                      {i.specification}
                    </li>
                  ))}
                </ul>
              )}

              {secondHalf.length > 0 && (
                <ul className="list-disc space-y-3">
                  {secondHalf.map((i: any, j: any) => (
                    <li key={j} className="">
                      {i.specification}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="w-full mt-7">
              <div className="flex gap-2">
                <MyButton text="get a quote" className="hover:bg-black" />
                <ButtonLink
                  href={`/detail/${car.slug.current}`}
                  className="bg-black hover:bg-black "
                  text="reserve this car"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSpecifications;
