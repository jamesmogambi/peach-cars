import { cn } from "@/lib/utils";
import React from "react";
import CarItem from "@/app/(frontend)/(home)/brand/CarItem";

interface Prop {
  className?: string;
  car: any;
}
const RenderCars = ({ className, car }: Prop) => {
  return (
    <div className={cn("pb-9 w-full", className)}>
      <CarItem key={car._id} car={car} />
    </div>
  );
};

export default RenderCars;
