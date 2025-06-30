import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST() {
  //ambil cookies
  const getCookies = await cookies();
  const refreshToken = getCookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { message: "No refresh token provided" },
      { status: 401 }
    );
  }
  try {
    //ambil resreshtoken dr env
    const secret = process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET;
    if (!secret) {
      return NextResponse.json(
        { message: "Refresh token secret not configured" },
        { status: 500 }
      );
    }
    const payload = jwt.verify(refreshToken, secret) as {
      id: number;
      email: string;
    };

    //cek apakah ada token di db
    const isThereToken = await prisma.refreshToken.findUnique({
      where: {
        token: refreshToken,
      },
    });
    //jika token tidak ada di db
    if (!isThereToken)
      return NextResponse.json(
        { message: "tooken tidak ada" },
        { status: 403 }
      );

    const accesTokenSecret = process.env.NEXT_PUBLIC_ACCES_TOKEN_SECRET;
    if (!accesTokenSecret)
      return NextResponse.json({ message: "invalid token" }, { status: 403 });

    //buat accestoken baru
    const accesToken = jwt.sign(
      {
        id: payload.id,
        email: payload.email,
      },
      accesTokenSecret,
      {
        expiresIn: "15m",
      }
    );

    //kasih response accestoken baru
   return NextResponse.json({message:"ini token baru nya", accesToken });
  } catch (error) {
    NextResponse.json(
      { message: "invalid token or server error" },
      { status: 500 }
    );
  }
}
