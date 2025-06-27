"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { UseGetDetailManga, UseGetReadManga } from "@/services/UseGetAllManga";
import { DialogDescription } from "@radix-ui/react-dialog";
import Link from "next/link";

export default function MangaReaderPage({ url }: { url: string }) {
  const { data: ReadManga, isLoading, error } = UseGetReadManga(url);
  // hapus "Chapter xxx hapus kata "Komik""
  const mangaSlug =
    ReadManga?.title
      ?.replace(/^Komik\s/i, "") //
      .replace(/\sChapter\s\d+.*/i, "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-") || "";

  const { data: DetailManga, isLoading: isLoadingDetail } =
    UseGetDetailManga(mangaSlug);

  if (isLoading || error || isLoadingDetail) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800 py-16">
        <h2 className="text-3xl font-bold text-white">Loading...</h2>
      </div>
    );
  }
  //ambi slug terakhir dari URL next_chapter
  const getTrueNextUrl = ReadManga?.next_chapter
    .split("/")
    .filter((stringKosong) => stringKosong !== "")
    .pop();
  const getTrueBackUrl = ReadManga?.back_chapter
    .split("/")
    .filter((stringKosong) => stringKosong !== "")
    .pop();
  //   console.log("ReadManga Data:", DetailManga);

  return (
    <div className="flex flex-col h-screen">
      {/* 🔹 Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white shadow">
        <h1 className="text-lg font-bold m-5">{ReadManga?.title}</h1>
        <div className="flex gap-2">
          {/* Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild className="bg-gray-800">
              <Button variant="outline" size="sm" className=" ">
                Chapter List
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-white p-4">
              <SheetTitle className="font-semibold text-lg mb-4">
                Chapters
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-600 mb-4">
                Daftar chapter untuk manga {ReadManga?.title}
              </SheetDescription>
              <ul className="space-y-2">
                {DetailManga?.chapter.map((chapter, i) => {
                  //ambil slug dari URL slug / terakhir btw ini api gila dia nagish params ga sesuai duh
                  const slug = chapter?.url?.split("/").filter(Boolean).pop();
                  //   console.log("Chapter Slug:", slug);
                  return (
                    <li
                      key={i}
                      className="hover:underline text-sm cursor-pointer"
                    >
                      <Link href={`/baca/${slug}/`}>
                        {" "}
                        {chapter.chapter} - Read
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>

          {/* Dialog Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="bg-gray-800">
                Info
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Manga Info</DialogTitle>
                <DialogDescription className="text-sm text-gray-600">
                  {DetailManga?.sinopsis || "No description available."}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 🔹 Scrollable Image Area */}
      <ScrollArea className="flex-1 overflow-y-auto bg-black p-4">
        <div className="flex flex-col gap-4 items-center">
          {ReadManga?.img.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Page ${ReadManga?.title} - ${index + 1}`}
              className="max-w-full rounded-md shadow-md"
            />
          ))}
        </div>
      </ScrollArea>
      <div className="flex justify-center items-center p-4 bg-gray-900 gap-4">
        <Button variant={"outline"} disabled={!ReadManga?.back_chapter}>
          <Link href={`/baca/${getTrueBackUrl}`}>Prev Page</Link>
        </Button>
        <Button variant={"outline"} disabled={!ReadManga?.next_chapter}>
          <Link href={`/baca/${getTrueNextUrl}`}>Next Page</Link>
        </Button>
      </div>
    </div>
  );
}
