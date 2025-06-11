import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { generateToken } from "@/utils/jwt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
     try {
          const { username, password } = await req.json();

          if (!username || !password) {
               return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
          }

          const user = await prisma.user.findUnique({ where: { username } });

          if (!user) {
               return NextResponse.json({ error: "User not found" }, { status: 404 });
          }

          const isValid = await bcrypt.compare(password, user.password);

          if (!isValid) {
               return NextResponse.json({ error: "Invalid password" }, { status: 401 });
          }

          // Generate JWT
          const token = generateToken({ userId: user.id });

          // Set it in HTTP-only cookie
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