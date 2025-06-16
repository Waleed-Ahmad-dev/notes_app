import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
     try {
          const { username, password } = await req.json();

          // Validate input
          if (!username || !password) {
               return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
          }

          // Check if user already exists
          const existingUser = await prisma.user.findUnique({ where: { username } });
          if (existingUser) {
               return NextResponse.json({ error: "Username already taken" }, { status: 409 });
          }

          // Hash password
          const hashedPassword = await bcrypt.hash(password, 10);

          // Create user
          const newUser = await prisma.user.create({
               data: {
                    username,
                    password: hashedPassword,
               },
          });

          return NextResponse.json(
               { message: "User registered successfully", user: { id: newUser.id, username: newUser.username } },
               { status: 201 }
          );
     } catch (err) {
          console.error("Registration error:", err);
          return NextResponse.json({ error: "Internal server error" }, { status: 500 });
     }
}