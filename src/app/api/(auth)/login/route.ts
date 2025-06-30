import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    //ambil data dari body
    const { email, password } = await req.json();

    //cek apakah user ada di database
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }
    //cek apakah password login sama dengan ada yg ada di database
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return NextResponse.json(
        { message: "email atau password salah" },
        { status: 400 }
      );
    }

    //buat token acces
    const accesTokenSecret = process.env.ACCES_TOKEN_SECRET;
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
    console.log(accesTokenSecret, refreshTokenSecret, "form api login");
    if (!accesTokenSecret || !refreshTokenSecret) {
      return NextResponse.json(
        { message: "Server misconfiguration: missing JWT accesTokenSecret" },
        { status: 500 }
      );
    }
    const accesToken = jwt.sign(
      { id: user.id, email: user.email },
      accesTokenSecret,
      {
        expiresIn: "15s",
      }
    );
    //baut reereshtoken users
    const refreshToken = jwt.sign(
      { id: user.id, email: user.email },
      refreshTokenSecret,
      {
        expiresIn: "1d",
      }
    );

    //simpan refresh token di db
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    const response = NextResponse.json({
      message: "berhasil login",
      data: user,
      accesToken,
    });
    //set cookie
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error login", error);
    return NextResponse.json(
      { message: "internak server error" },
      { status: 500 }
    );
  }
}
