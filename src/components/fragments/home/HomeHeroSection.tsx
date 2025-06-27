import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { UseGetAllManga } from "@/services/UseGetAllManga";
import { Skeleton } from "@/components/ui/skeleton";

const HomeHeroSection = () => {
  const { data: mangaPopular, isLoading } = UseGetAllManga();

  if (isLoading) {
    return (
      <div className="w-full py-8 grid grid-cols-1 gap-4 bg-gray-700">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-4 p-2 bg-gray-700 rounded-lg shadow-lg">
            {/* Gambar skeleton */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-400">
              <Skeleton className="w-full h-full" />
            </div>

            {/* Info skeleton */}
            <div className="flex flex-col bg-gray-200 p-6 rounded-xl shadow-md text-center justify-center">
              <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-6 w-1/2 mx-auto mb-2" />
              <Skeleton className="h-5 w-2/3 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full py-8 grid grid-cols-1  gap-4 bg-gray-700">
      {/* Carousel */}
      <div className="w-full ">
        <Carousel className="w-full ">
          <CarouselContent>
            {mangaPopular?.map((manga, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 gap-4 p-2 bg-gray-200 rounded-lg shadow-lg">
                  <Card className="bg-gray-200 rounded-lg w-full">
                    <CardContent className="aspect-video">
                      <img
                        src={manga.img}
                        alt={manga.title}
                        className="w-full h-full object-cover object-top rounded-lg"
                      />
                    </CardContent>
                  </Card>
                  <div className="flex flex-col bg-gray-200 backdrop-blur-sm p-6 rounded-xl  shadow-md text-center py-20">
                    <h2 className="text-[42px] font-extrabold text-gray-900 leading-tight">
                      {manga.title}
                    </h2>
                    <p className="text-base text-[30px] text-gray-700 mt-2">
                      {manga.jenis} • {manga.type}
                    </p>
                    <p className="text-sm text-[20px] text-gray-500 mt-1">
                      Update: {manga.update} • Chapter {manga.chapter}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeHeroSection;
