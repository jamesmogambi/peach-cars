import React from "react";
import "../styles.css";
import HomeCarousel from "@/components/HomeCarousel";
import BrandsSection from "@/components/BrandsSection";
import { fetchCarousels } from "@/actions/carousel";
import SearchBodyStyle from "@/components/SearchBodyStyle";
import FeaturedCars from "@/components/FeaturedCars";

export default async function HomePage() {
  const carousels = await fetchCarousels();
  return (
    <div className="min-h-screen">
      <main>
        <HomeCarousel carousels={carousels} />
        {/* Brands */}
        <BrandsSection />
        {/* SHOP CARS BY BODYSTYLE */}
        <SearchBodyStyle />
        {/* FEATURED CARS */}
        <FeaturedCars />
      </main>
    </div>
  );
}
