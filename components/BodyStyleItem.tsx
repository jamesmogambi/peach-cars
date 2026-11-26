import { cn } from "@/lib/utils";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

interface Prop {
  className?: string;
  item: {
    _id: string;
    name: string;
    slug?: { current: string };
    image?: { asset?: { url: string } };
  };
  isSelected?: boolean;
  onClick?: () => void;
}
const BodyStyleItem = ({ className = "", item, isSelected = false, onClick }: Prop) => {
  const { _id, name, image } = item;
  const imageUrl = image?.asset?.url;

  return (
    <div
      className={cn(
        "flex flex-col w-full gap-4 py-6 md:pb-12 items-center cursor-pointer transition-all duration-200",
        isSelected ? "scale-105" : "",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center space-x-2">
        <Checkbox
          className={cn(
            "bg-white h-5 w-5 data-[state=checked]:bg-primary transition-colors",
            isSelected && "data-[state=checked]:bg-primary"
          )}
          id={_id}
          checked={isSelected}
        />
        <label
          htmlFor={_id}
          className="uppercase overflow-clip text-nowrap tracking-wide text-[12px] font-semibold"
        >
          {name}
        </label>
      </div>

      {imageUrl ? (
        <Image
          alt={name}
          priority
          quality={99}
          src={imageUrl}
          height={50}
          width={150}
          className="object-contain"
        />
      ) : (
        <div className="w-[160px] h-[62px] flex items-center justify-center bg-gray-200 rounded text-gray-500 text-xs">
          {name}
        </div>
      )}
    </div>
  );
};

export default BodyStyleItem;
