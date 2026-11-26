import getBrands from "@/actions/brand";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandsSection = async () => {
  const brands = await getBrands();

  console.log("brands: ", brands);
  return (
    <div className="w-full px-4 py-8 min-h-screen lg:max-w-6xl mx-auto ">
      <div className="space-y-4 px-4 flex flex-col items-center">
        <h1 className="text-[35.2px] text-center uppercase leading-tight font-semibold">
          LEADing cars dealer in eldoret, kenya
        </h1>
        <h2 className="uppercase text-[32px] text-center font-normal">
          shop cars by brand
        </h2>
        <h3 className="text-[20px] text-center">
          Shop Cars for Sale in Kenya by Brands
        </h3>
      </div>

      {/* // loop brands */}
      <div className="flex flex-wrap justify-center  gap-8">
        {brands.length > 0 ? (
          brands.map((brand: any) => {
            const logoUrl = brand.logo?.asset?.url;
            return (
              <Link
                key={brand._id}
                href={`/brand/${brand.slug?.current || brand.name}`}
              >
                <div className="rounded-lg p-6 hover:shadow-lg transition aspect-square flex items-center justify-center bg-white w-[150px]">
                  {logoUrl ? (
                    <Image
                      alt={brand.name}
                      src={logoUrl}
                      width={140}
                      height={140}
                      quality={98}
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded text-gray-500 text-xs">
                      {brand.name}
                    </div>
                  )}
                </div>
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center">No brands found.</p>
        )}
      </div>
    </div>
  );
};

export default BrandsSection;
