"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sheet } from "lucide-react";
import { SheetContent, SheetTrigger } from "./ui/sheet";


export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-secondary">
            Home
          </a>
          <a href="#about" className="hover:text-secondary">
            About
          </a>
          <a href="#services" className="hover:text-secondary">
            Services
          </a>
          <a href="#contact" className="hover:text-secondary">
            Contact
          </a>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-primary text-white">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="hover:text-secondary">
                Home
              </a>
              <a href="#about" className="hover:text-secondary">
                About
              </a>
              <a href="#services" className="hover:text-secondary">
                Services
              </a>
              <a href="#contact" className="hover:text-secondary">
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
