import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const axiosBaseUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_MANGA,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  // withCredentials: true,
  responseType: "json",
});
