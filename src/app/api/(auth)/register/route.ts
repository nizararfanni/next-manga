import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  //ambil request body
  const { email, password } = await req.json();

  //cek apaakah users sudah ada di database
  const userExist = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (userExist) {
    return NextResponse.json(
      { message: "User already exist" },
      { status: 400 }
    );
  }

  //hashing password nya
  const hashPassword = await bcrypt.hash(password, 10);

  //simpan ddata register ke db
  const user = await prisma.users.create({
    data: {
      email,
      password: hashPassword,
    },
  });
  //kasih response ke user
  return NextResponse.json({
    message: "berhasil membuat akun",
    data: user,
  });
}
