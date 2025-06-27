"use client";
import MangaReaderPage from "@/components/layouts/MangaReadersPage";
import { useParams } from "next/navigation";

const page = () => {
  const { url } = useParams<{ url: string }>();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 py-11 ">
      <MangaReaderPage url={url}></MangaReaderPage>
    </div>
  );
};

export default page;
