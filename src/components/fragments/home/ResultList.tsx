import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface ResultListProps {
  data?: {
    title: string;
    chapter: string;
    type: string;
    jenis: string;
    img: string;
    url: string;
  }[] ;
  isLoading?: boolean;
}

export default function ResultList({ data, isLoading }: ResultListProps) {
  if (isLoading) {
    return (
      <p className="text-center text-gray-500">Loading hasil pencarian...</p>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-sm text-gray-400">
        Tidak ditemukan hasil apapun
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
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
                <CardTitle className="text-lg">{manga.title}</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Chapter: {manga.chapter} • {manga.type} • {manga.jenis}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
