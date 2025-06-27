"use client";

import PopularPages from "@/components/layouts/PopularPages";
import { Skeleton } from "@/components/ui/skeleton";
import { UseGetAllManga } from "@/services/UseGetAllManga";
import React from "react";

const page = () => {
  const { data: popularManga, isLoading } = UseGetAllManga();

  if (isLoading) {
    return (
      <div className="w-full bg-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-3 flex flex-col gap-4"
            >
              <div className="w-full aspect-[3/3] rounded-md overflow-hidden">
                <div className="w-full h-full rounded-md">
                  <div className="w-full h-full bg-gray-300 animate-pulse rounded-md" />
                </div>
              </div>
              <div className="px-2 pb-4 space-y-2">
                <div className="h-5 w-3/4 bg-gray-300 rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-gray-300 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-gray-300 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <PopularPages 
        title="Popular Manga"
        description="Discover the most popular manga right now."
        data={popularManga}
      />
    </div>
  );
};

export default page;
