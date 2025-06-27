"use client";

import Pagnation from "@/components/elements/Pagnation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UseGetNewsManga } from "@/services/UseGetAllManga";
import Link from "next/link";
import { useState } from "react";

const HomeContent = () => {
  const [page, setPage] = useState(1);
  const { data: newsManga, isLoading, error } = UseGetNewsManga({ page });

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
    <div className="flex flex-col items-center justify-center bg-gray-700 w-full">
      {/* Grid Card */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-700 overflow-hidden">
        {newsManga?.data?.map((manga, index) => {
          const detailLink = manga?.url.split("/").filter(Boolean).pop();
          return (
            <Card
              key={index}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Gambar */}
              <Link
                href={`/detail/${detailLink}`}
                className="w-full max-h-[300px] aspect-[3/3] p-3 rounded-md overflow-hidden"
              >
                <img
                  src={manga.img}
                  alt={manga.title}
                  className="w-full h-full object-cover object-top rounded-md"
                />
              </Link>

              {/* Info */}
              <CardHeader className="p-4 flex flex-col items-start justify-between">
                <CardTitle className="font-bold text-2xl">
                  {manga.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 mt-1 flex items-center justify-between gap-3">
                  <div>
                    <p>chapter: {manga.chapter}</p>
                    <p>last update: {manga.update}</p>
                  </div>
                  <div>
                    <p>type: {manga.type}</p>
                    <p>jenis: {manga.jenis}</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 bg-gray-700  ">
        <Pagnation page={page} setPage={setPage} newsManga={newsManga} />
      </div>
    </div>
  );
};
export default HomeContent;
