import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const MobileNav = () => {
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
          <div className="flex items-center justify-between w-full mb-2 p-5">
            {" "}
            <Input
              type="text"
              placeholder="Cari manga..."
              className="w-full lg:w-72 text-white placeholder:text-gray-400 bg-gray-700 border-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center ">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="space-x-2 flex flex-col justify-center items-center w-full">
                <NavigationMenuItem className="bg-white rounded-md shadow-md flex justify-center items-center w-full">
                  <NavigationMenuTrigger>
                    <Link href="/">Home</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink className="hover:bg-purple-100 px-4 py-2">
                      Popular
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:bg-purple-100 px-4 py-2">
                      Terbaru
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="bg-white rounded-md shadow-md flex justify-center items-center w-full">
                  <NavigationMenuLink asChild>
                    <Link href="/blog" className="px-4 py-2 block">
                      Genres
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="bg-white rounded-md shadow-md flex justify-center items-center w-full">
                  <NavigationMenuTrigger>
                    <Link href="/about">Status Manga</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink className="px-4 py-2">
                      Completed
                    </NavigationMenuLink>
                    <NavigationMenuLink className="px-4 py-2">
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
