"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {

    // Using useRouter to handle navigation
  const router = useRouter();
  const handleOnKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      e.preventDefault();
      router.push(`/search/${searchQuery}`);
    }
  };

  return (
    <div>
      <Input
        onKeyDown={handleOnKeyEnter}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Cari mangas..."
        className="w-full lg:w-72 text-white placeholder:text-gray-400 bg-gray-700 border-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default Search;
