import { getFeaturedCars } from "@/actions/featuredCars";
import React from "react";
import RenderCars from "./RenderCars";

const FeaturedCars = async () => {
  const cars = await getFeaturedCars();

  console.log("featured cars", cars);
  return (
    <div className="w-full ">
      <div className="w-full  px-4 py-10 min-h-screen lg:max-w-6xl mx-auto ">
        <div className="space-y-4 px-4 flex flex-col items-center">
          <h1 className="text-[35.2px] text-center uppercase leading-tight font-semibold">
            featured cars
          </h1>
          <h3 className=" text-[23px]  text-center font-normal">
            We have cars in stock and others are imports from Japan, UK and
            Thailand
          </h3>
        </div>

        {/* // loop cars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {cars.map((item: any) => (
            <RenderCars key={item._id} car={item} />
          ))}
        </div>

        {/* <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center items-center "></div> */}
      </div>
    </div>
  );
};

export default FeaturedCars;
