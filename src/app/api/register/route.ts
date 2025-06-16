import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
     try {
          const { username, email, password } = await req.json();

          // Validate input
          if (!username || !email || !password) {
               return NextResponse.json({ error: "Username, email, and password are required" }, { status: 400 });
          }

          // Check if username or email already exists
          const existingUserByUsername = await prisma.user.findUnique({ where: { username } });
          const existingUserByEmail = await prisma.user.findUnique({ where: { email } });

          if (existingUserByUsername) {
               return NextResponse.json({ error: "Username already taken" }, { status: 409 });
          }
          if (existingUserByEmail) {
               return NextResponse.json({ error: "Email already registered" }, { status: 409 });
          }

          // Hash password
          const hashedPassword = await bcrypt.hash(password, 10);

          // Create user
          const newUser = await prisma.user.create({
               data: {
                    username,
                    email,
                    password: hashedPassword,
                    verified: false,
               },
          });

          // Generate verification token
          const token = crypto.randomBytes(32).toString('hex');
          const expiresAt = new Date();
          expiresAt.setHours(expiresAt.getHours() + 24); // 24 hours from now

          await prisma.verificationToken.create({
               data: {
                    token,
                    userId: newUser.id,
                    expiresAt,
               },
          });

          // Send verification email
          const transporter = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
               },
          });

          const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify?token=${token}`;

          await transporter.sendMail({
               from: process.env.EMAIL_USER,
               to: email,
               subject: 'Verify Your Email - Notes App',
               text: `Welcome to the Notes App! Please click the following link to verify your email: ${verificationUrl}`,
          });

          return NextResponse.json(
               { message: "User registered successfully. Please check your email to verify your account." },
               { status: 201 }
          );
     } catch (err) {
          console.error("Registration error:", err);
          return NextResponse.json({ error: "Internal server error" }, { status: 500 });
     }
}