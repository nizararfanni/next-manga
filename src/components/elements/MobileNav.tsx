"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Search from "../fragments/home/Search";
import { UseGetMangaByGenres, UseSearchManga } from "@/services/UseGetAllManga";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MobileNav = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debounceQuery, setDebounceQuery] = useState<string>("");

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
  return (
    <div className="md:hidden ">
      <Sheet>
        <SheetTrigger asChild className="text-white p-2 text-center ">
          <Button
            className="flex place-items-center text-center justify-center"
            variant={"ghost"}
          >
            x
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="bg-gray-800/80 backdrop-blur-md  text-black p-4 text-center z-[100] overflow-auto"
        >
          <SheetTitle className="text-xl text-purple-600 text-center font-bold ">
            NZRMangas
          </SheetTitle>
          <SheetDescription className="text-sm text-white p-3 ">
            Navigasi menu cepat untuk menjelajahi manga favoritmu
          </SheetDescription>
          <div className="flex items-center justify-center w-full mb-2 p-5">
            <Search
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            ></Search>
          </div>
          <div className="flex flex-col w-full justify-center items-center ">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="space-x-2 flex flex-col justify-center items-center w-full">
                <NavigationMenuItem className="bg-white rounded-md shadow-md flex justify-center items-center w-full">
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
                  <PopoverTrigger className="px-4 py-2 block bg-white text-black rounded-md w-full">
                    Genres
                  </PopoverTrigger>
                  <PopoverContent side="bottom" avoidCollisions={false} className="grid  z-100 grid-cols-4  md:grid-cols-3 place-items-center gap-4 overflow-y-auto h-[350px]">
                    {Genres?.map((genre: string) => (
                      <Button
                        key={genre}
                        variant="ghost"
                        className="justify-start text-xs"
                      >
                        {genre}
                      </Button>
                    ))}
                  </PopoverContent>
                </Popover>

                <NavigationMenuItem className="bg-white rounded-md shadow-md flex justify-center items-center w-full">
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

                <NavigationMenuItem className="bg-white rounded-md shadow-md flex justify-center items-center w-full">
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="block">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
