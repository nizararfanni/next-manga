"use client";

import { axiosBaseUrl } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Popular {
  chapter: string;
  img: string;
  jenis: string;
  ratting: string | null;
  title: string;
  type: string;
  update: string;
  url: string;
}

export const UseGetAllManga = () => {
  return useQuery<Popular[]>({
    queryKey: ["populars"],
    queryFn: async () => {
      const response = await axiosBaseUrl.get("popular");
      return response.data.data;
    },
  });
};

interface GetNewsManga {
  current_page: number;
  last_page: number;
  data: Popular[];
}

export const UseGetNewsManga = ({ page }: { page: number }) => {
  return useQuery<GetNewsManga>({
    queryKey: ["terbaru", page],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`terbaru/${page}`);
      // console.log("API response:", response.data.data);
      return response.data.data;
    },
  });
};

interface DetailManga {
  chapter: {
    chapter: string[];
    url: string;
    update: string;
    slug: string;
  }[];
  img: string;
  jenis: string;
  ratting: string | null;
  title: string;
  jenis_komik: string;
  status: string;
  url: string;
  tema: string;
  short_sinopsis: string;
  sinopsis: string;
  genre: string[];
}

export const UseGetDetailManga = (url: string) => {
  return useQuery<DetailManga>({
    queryKey: ["detail", url],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`detail/${url}`);
      // console.log("Detail Manga response:", response.data.data);
      return response.data.data;
    },
  });
};

interface ReadMangas {
  title: string;
  img: string[];
  back_chapter: string;
  next_chapter: string;
}

export const UseGetReadManga = (url: string) => {
  return useQuery<ReadMangas>({
    queryKey: ["baca", url],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`baca/${url}`);
      return response.data.data;
    },
  });
};

export const UseSearchManga = (query: string) => {
  return useQuery<Popular[]>({
    queryKey: ["search", query],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`search/${query}`);
      return response.data.data;
    },
    enabled: !!query,
  });
};

interface MangaByStatus {
  current_page: number;
  total_page: number;
  data: Popular[];
}

export const UseGetMangaByStatusCompleted = (page: number = 1) => {
  return useQuery<MangaByStatus>({
    queryKey: ["status", "completed", page],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`status/completed/${page}`);
      return response.data.data;
    },
  });
};

export const UseGetMangaByStatusOngoing = (page: number = 1) => {
  return useQuery<MangaByStatus>({
    queryKey: ["status", "ongoing", page],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`status/ongoing/${page}`);
      return response.data.data;
    },
  });
};


export const UseGetMangaByGenres = () => {
  return useQuery<string[]>({
    queryKey: ["genre"],
    queryFn: async () => {
      const response = await axiosBaseUrl.get(`genre`);
      return response.data.data;
    },
  });
};
