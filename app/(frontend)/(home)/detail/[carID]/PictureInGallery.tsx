import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PictureInGallery = ({
  car,
  className,
}: {
  car: {
    _id: string;
    title: string;
    images: { asset: { _id: string; url: string } } | { asset: { _id: string; url: string } }[];
  };
  className?: string;
}) => {
  const { images, title } = car;
  const imageArray = Array.isArray(images) ? images : images ? [images] : [];

  return (
    <div className={cn("w-full p-4 lg:p-0 lg:max-w-6xl mx-auto", className)}>
      <h2 className="font-semibold text-[35.2px] mb-6 uppercase">
        picture in gallery
      </h2>
      {imageArray.length > 0 ? (
        <div className="grid grid-cols-1  md:grid-cols-3  gap-7 ">
          {imageArray.map((img, idx) => (
            <div key={idx} className="relative w-full h-[223px]">
              {img.asset?.url && (
                <Image
                  alt={title}
                  src={img.asset.url}
                  fill
                  className="object-cover"
                  quality={99}
                  priority
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-[223px] flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">No images available</span>
        </div>
      )}
    </div>
  );
};

export default PictureInGallery;
