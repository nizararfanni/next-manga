"use client";

import HomeContent from "@/components/fragments/home/HomeContent";
import DetailPage from "@/components/layouts/DetailPages";
import { UseGetDetailManga } from "@/services/UseGetAllManga";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams<{ id: string }>();

  const { data: detailManga, isLoading, error } = UseGetDetailManga(id);
  // console.log("Detail Page ID:", id, detailManga);
  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gray-800 py-16">
      <h2 className="text-3xl font-bold text-white">Detail Page {id}</h2>
      <DetailPage id={id} />
    </div>
  );
};

export default page;
