"use client";

import React, { useState } from "react";
import BodyStyleItem from "./BodyStyleItem";
import MyButton from "./MyButton";
import { useRouter } from "next/navigation";

interface Props {
  initialStyles: any[];
}

const SearchBodyStyleClient = ({ initialStyles }: Props) => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const router = useRouter();

  const handleToggleStyle = (styleId: string) => {
    setSelectedStyles((prev) =>
      prev.includes(styleId) ? prev.filter((id) => id !== styleId) : [...prev, styleId]
    );
  };

  const handleSearch = () => {
    if (selectedStyles.length === 0) return;
    
    const styleSlugs = selectedStyles
      .map((id) => {
        const style = initialStyles.find((s) => s._id === id);
        return style?.slug?.current;
      })
      .filter(Boolean)
      .join(",");

    if (styleSlugs) {
      router.push(`/cars-for-sale-in-kenya/by-body-style?bodyStyle=${styleSlugs}`);
    }
  };

  return (
    <div className="w-full bg-[#4B4B4B]">
      <div className="w-full text-white px-4 py-10 min-h-screen lg:max-w-6xl mx-auto">
        <div className="space-y-4 px-4 flex flex-col items-center">
          <h1 className="text-[35.2px] text-center uppercase leading-tight font-semibold">
            shop cars by body style
          </h1>
          <h2 className="uppercase text-[32px] text-center font-normal">
            Get your dream car from Peach Cars in Eldoret
          </h2>
          <h3 className="text-[20px] text-center">
            Shop Cars for Sale in Kenya by Body Style
          </h3>
        </div>

        {/* Body style options */}
        <div className="flex flex-wrap mt-8 justify-center items-center gap-4">
          {initialStyles.map((item: any) => (
            <BodyStyleItem
              item={item}
              key={item._id}
              className="w-full sm:w-1/2 lg:w-1/5 p-4 text-center cursor-pointer"
              isSelected={selectedStyles.includes(item._id)}
              onClick={() => handleToggleStyle(item._id)}
            />
          ))}
        </div>

        {selectedStyles.length > 0 && (
          <div className="mt-6 text-center text-white text-sm">
            {selectedStyles.length} body style{selectedStyles.length > 1 ? "s" : ""} selected
          </div>
        )}

        <div className="flex justify-center mt-8">
          <MyButton
            className="hover:bg-black text-lg px-8 py-6 font-bold"
            text={selectedStyles.length > 0 ? `search cars (${selectedStyles.length})` : "search cars"}
            disabled={selectedStyles.length === 0}
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBodyStyleClient;