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
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center items-center ">
        {brands.length > 0 ? (
          brands.map((brand: any) => {
            const logoUrl = brand.logo?.asset?.url;
            return (
              <Link key={brand._id} href={`/brand/${brand.slug?.current || brand.name}`}>
                <div
                  key={brand._id}
                  className=" rounded-lg mx-[12px] my-[15px] p-4  hover:shadow-lg transition"
                >
                  {logoUrl && (
                    <Image
                      alt={brand.name}
                      src={logoUrl}
                      height={109}
                      width={82}
                      quality={98}
                      priority
                    />
                  )}
                  {!logoUrl && (
                    <div className="w-[82px] h-[109px] flex items-center justify-center bg-gray-100 rounded text-gray-500 text-xs">
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
