import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";
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
    return NextResponse.json({ message: "berhasil login", data: user });
  } catch (error) {
    console.error("Error login", error);
  }
}
