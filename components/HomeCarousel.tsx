"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Prop {
  id: string;
  image: any;
  title: string;
  updatedAt: string;
  createdAt: string;
}

const HomeCarousel = ({ carousels }: { carousels: Prop[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000 }),
  ]);

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const handlePrevious = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };
  return (
    <div className="relative h-[50vh] lg:h-[75vh] mb-8">
      {/* First Layer with Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full flex-1">
            {carousels?.map((item: any) => (
              <div
                key={item.id}
                className="flex-none relative w-full min-w-0 h-full"
              >
                <Image
                  alt=""
                  src={item.image?.url}
                  fill
                  priority
                  quality={100}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl px-8 py-6 max-w-4xl w-full text-center">
                    <p className="lg:text-[56px] text-[36px] leading-tight text-primary font-paytone font-semibold tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                      {item?.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Layer on top with child elements */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent">
        <div className="border-white px-4 hidden w-full lg:flex justify-between">
          <ChevronLeft
            onClick={handlePrevious}
            className="text-white cursor-pointer size-24"
          />

          <ChevronRight
            onClick={handleNext}
            className="text-white cursor-pointer size-24"
          />
        </div>

        {/* // other component */}
        {/* <div className="text-lg  text-transparent">Search</div> */}
      </div>
    </div>
  );
};

export default HomeCarousel;
