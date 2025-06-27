"use client";

import PopularPages from "@/components/layouts/PopularPages";
import { Button } from "@/components/ui/button";
import { UseGetMangaByStatusCompleted } from "@/services/UseGetAllManga";
import React, { useState } from "react";

const page = () => {
  const [activePages, setActivePages] = useState(1);
  const { data: mangaCompleted, isLoading } =
    UseGetMangaByStatusCompleted(activePages);
  

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
  
  const handleNextPage = () => {
    setActivePages((next) => (next === mangaCompleted?.total_page ? 1 : next + 1));
  };
  const handlePrevPage = () => {
    setActivePages((prev) => (prev === mangaCompleted?.current_page ? mangaCompleted?.total_page : prev - 1));
  };
  return (
    <div className="py-16 bg-gray-800">
      {" "}
      <PopularPages
        title="completed Manga"
        description="Discover the most popular manga right now."
        data={mangaCompleted?.data}
      />
      <div className="flex justify-center items-center text-center gap-4">
        <Button
          variant={"outline"}
          onClick={handlePrevPage}
          disabled={isLoading}
        >
          prev
        </Button>
        <Button
          variant={"outline"}
          onClick={handleNextPage}
          disabled={isLoading}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default page;
