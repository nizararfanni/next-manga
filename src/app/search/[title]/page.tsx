"use client";

import ResultList from "@/components/fragments/home/ResultList";
import { UseSearchManga } from "@/services/UseGetAllManga";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { title } = useParams<{ title: string }>();
  const { data: searchManga, isLoading } = UseSearchManga(title as string);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="flex justify-center items-center bg-gray-800 min-h-screen p-16">
      <ResultList data={searchManga} isLoading={isLoading} /> 
    </div>
  );
};

export default page;
