"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { UseGetMangaByGenres, UseSearchManga } from "@/services/UseGetAllManga";
import Search from "../fragments/home/Search";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
const DekstopNav = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debounceQuery, setDebounceQuery] = useState<string>("");
  const router = useRouter();

  //panggil api jika sudah 3 detik
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        setDebounceQuery(searchQuery);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const { data: searchManga, isLoading, error } = UseSearchManga(debounceQuery);
  const { data: Genres, isLoading: LoadingGenre } = UseGetMangaByGenres();

  // console.log("Search Manga:", searchManga);
  return (
    <div className=" md:flex-row flex-col items-center gap-2 w-full lg:w-auto hidden md:flex">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Button className="bg-purple-600 hover:bg-purple-700">Cari</Button>{" "}
      <div className="flex flex-col lg:flex-row">
        {/* Navigation */}
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="space-x-2 z-10">
            <NavigationMenuItem className="bg-white rounded-md shadow-md z-20">
              <NavigationMenuTrigger>
                <Link href="/">Home</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  href="/popular"
                  className="hover:bg-purple-100 px-4 py-2"
                >
                  Popular
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/"
                  className="hover:bg-purple-100 px-4 py-2"
                >
                  Terbaru
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <Popover>
              <PopoverTrigger className="px-4 py-2 block bg-white text-black rounded-md">
                Genres
              </PopoverTrigger>
              <PopoverContent className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 overflow-y-auto h-[350px]">
                {Genres?.map((genre: string) => (
                  <Button
                    key={genre}
                    variant="ghost"
                    className="justify-start"
                    onClick={() =>
                      router.push(
                        `/genre/${genre.toLowerCase().replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    {genre}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>

            <NavigationMenuItem className="bg-white rounded-md shadow-md z-20">
              <NavigationMenuTrigger>
                <Link href="/about">Status Manga</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/completed" className="px-4 py-2">
                  Completed
                </NavigationMenuLink>
                <NavigationMenuLink href="/ongoing" className="px-4 py-2">
                  Ongoing
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-white rounded-md shadow-md">
              <NavigationMenuLink asChild>
                <Link href="/About" className="px-4 py-2 block">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default DekstopNav;
