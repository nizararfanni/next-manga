import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const axiosBaseUrl = axios.create({
  baseURL: "https://laravel-api-manga-scraper.vercel.app/api/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  // withCredentials: true,
  responseType: "json",
});
