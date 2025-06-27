// components/pages/MangaGridPage.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface MangaItem {
  title: string;
  chapter: string;
  type: string;
  jenis: string;
  img: string;
  url: string;
}

interface PopularPagesProps {
  title?: string;
  description?: string;
  data?: MangaItem[];
}

export default function PopularPages({
  title,
  description,
  data = [],
}: PopularPagesProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {title && <h1 className="text-2xl font-bold">{title}</h1>}
      {description && <p className="text-sm text-gray-500">{description}</p>}

      {data.length === 0 ? (
        <p className="text-sm text-gray-400 text-center">
          Belum ada data ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((manga, i) => {
            const slug = manga.url.split("/").filter(Boolean).pop();
            return (
              <Link href={`/detail/${slug}`} key={i}>
                <Card className="hover:shadow-md transition cursor-pointer h-full">
                  <img
                    src={manga.img}
                    alt={manga.title}
                    className="w-full h-60 object-cover object-top rounded-t"
                  />
                  <CardHeader>
                    <CardTitle className="text-base">{manga.title}</CardTitle>
                    <CardDescription className="text-xs mt-2">
                      Chapter: {manga.chapter} • {manga.type} • {manga.jenis}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
