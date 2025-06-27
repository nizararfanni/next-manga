"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UseGetDetailManga } from "@/services/UseGetAllManga";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface DetailPageProps {
  id: string;
}

export default function DetailPage({ id }: DetailPageProps) {
  const { data: detailManga, isLoading, error } = UseGetDetailManga(id);

  if (isLoading || error) {
    return (
      <Card className="max-w-5xl mx-auto bg-white shadow-lg rounded-md min-w-[430px] md:min-w-5xl">
        <CardHeader>
          <Skeleton className="h-8 w-1/2" />
          <div className="flex gap-2 mt-3 flex-wrap">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Image */}
          <div className="rounded overflow-hidden aspect-[3/4] bg-gray-200">
            <Skeleton className="w-full h-full" />
          </div>

          {/* Tabs */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-28" />
            </div>

            {/* Tab Content */}
            <div className="space-y-2 mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-5xl mx-auto bg-white shadow-lg rounded-md min-w-[430px] md:min-w-5xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-gray-800">
          {detailManga?.title}
        </CardTitle>
        <CardDescription className="flex gap-2 mt-2 flex-wrap">
          <Badge variant="secondary">{detailManga?.status}</Badge>
          <Badge variant="outline">{detailManga?.jenis_komik}</Badge>
          <Badge variant="outline">{detailManga?.tema}</Badge>
          <Badge variant="destructive">{detailManga?.ratting}</Badge>
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-4 ">
        <div className="rounded overflow-hidden aspect-[3/4] bg-gray-200">
          <img
            src={detailManga?.img}
            alt={detailManga?.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div>
          <Tabs defaultValue="info" className="w-full ">
            <TabsList className="flex w-full justify-start gap-2">
              <TabsTrigger value="info">Info</TabsTrigger>
              <TabsTrigger value="chapters">Chapters</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-4">
              <p className="text-gray-700 text-sm">{detailManga?.sinopsis}</p>
            </TabsContent>

            <TabsContent value="chapters" className="mt-4">
              <div className="min-w-[250px] ">
                {detailManga?.chapter?.map((chapter, index) => {
                    const slug = chapter?.url?.split("/").filter(Boolean).pop();
                    return (
                      <Link
                        href={`/baca/${slug}/`}
                        key={index}
                        className="border-b border-gray-200 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <p className="text-blue-600 hover:underline">
                          {chapter.chapter}
                        </p>
                        <span className="text-gray-500 text-sm ml-2">
                          {chapter.update}
                        </span>
                      </Link>
                    );
                })}
              </div>
            </TabsContent>

            <TabsContent value="comments" className="mt-4">
              <p>Belum ada komentar.</p>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}
