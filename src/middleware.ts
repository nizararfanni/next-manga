import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const protectedPaths = [
    "/baca",
    "/manga",
    "/popular",
    "/dashboard",
    "/detail",
  ];
  const pathname = req.nextUrl.pathname;

  if (!protectedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Gak verify token di sini, biar edge-safe
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/baca/:path*",
    "/manga/:path*",
    "/popular/:path*",
    "/dashboard/:path*",
    "/detail/:path*",
  ],
};
