"use client";

import HomeHeaders from "../fragments/home/HomeHeaders";
import HomeHeroSection from "../fragments/home/HomeHeroSection";
import HomeContent from "../fragments/home/HomeContent";
export default function HomeSection() {
 


  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 w-full">
      {/* <HomeHeaders /> */}
      <HomeHeroSection />
      <h2 className="bg-gray-700 w-full text-3xl font-bold text-center text-white py-4">
        manga manhwa manhua terbaru
      </h2>
      <HomeContent></HomeContent>
    </div>
  );
}
