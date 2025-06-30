import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const secret = process.env.REFRESH_TOKEN_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Missing secret" }, { status: 500 });
  }

  try {
    const payload = jwt.verify(token, secret);
    return NextResponse.json({ valid: true, payload });
  } catch (err) {
    return NextResponse.json(
      { valid: false, message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
