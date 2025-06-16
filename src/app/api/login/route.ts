import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { generateToken } from "@/utils/jwt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
     try {
          const { identifier, password } = await req.json();

          if (!identifier || !password) {
               return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
          }

          let user;
          if (identifier.includes('@')) {
               user = await prisma.user.findUnique({ where: { email: identifier } });
          } else {
               user = await prisma.user.findUnique({ where: { username: identifier } });
          }

          if (!user) {
               return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
          }

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
               return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
          }

          if (!user.verified) {
               return NextResponse.json({ error: "Please verify your email before logging in" }, { status: 403 });
          }

          const token = generateToken({ userId: user.id });
          const response = NextResponse.json({ message: "Login successful" });
          response.cookies.set("token", token, {
               httpOnly: true,
               path: "/",
               secure: process.env.NODE_ENV === "production",
               sameSite: "lax",
               maxAge: 60 * 60 * 24 * 7, // 7 days
          });

          return response;
     } catch (error) {
          console.error(error);
          return NextResponse.json({ error: "Internal server error" }, { status: 500 });
     }
}