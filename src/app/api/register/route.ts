import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

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

          // Generate 6-digit OTP
          const otp = Math.floor(100000 + Math.random() * 900000).toString();
          const expiresAt = new Date();
          expiresAt.setMinutes(expiresAt.getMinutes() + 10); // OTP valid for 10 minutes

          await prisma.verificationToken.create({
               data: {
                    token: otp,
                    userId: newUser.id,
                    expiresAt,
               },
          });

          // Send verification email
          const transporter = nodemailer.createTransport({
               service: "gmail",
               auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
               },
          });

          await transporter.sendMail({
               from: `"Notes App" <${process.env.EMAIL_USER}>`,
               to: email,
               subject: "Verify Your Email - Notes App",
               html: `
                    <!DOCTYPE html>
                    <html lang="en">
                         <head>
                              <meta charset="UTF-8">
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <style>
                                   body {
                                        margin: 0;
                                        padding: 0;
                                        font-family: Arial, sans-serif;
                                        background-color: #1a1a1a;
                                        color: #ffffff;
                                   }
                                   .container {
                                        max-width: 600px;
                                        margin: 20px auto;
                                        background: linear-gradient(135deg, #1e3a8a, #6b21a8);
                                        border-radius: 8px;
                                        padding: 20px;
                                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                                   }
                                   .header {
                                        text-align: center;
                                        padding: 20px 0;
                                   }
                                   .header h1 {
                                        margin: 0;
                                        font-size: 24px;
                                        color: #ffffff;
                                   }
                                   .content {
                                        padding: 20px;
                                        text-align: center;
                                   }
                                   .otp {
                                        font-size: 32px;
                                        font-weight: bold;
                                        color: #ffffff;
                                        background: rgba(255, 255, 255, 0.1);
                                        padding: 10px 20px;
                                        border-radius: 8px;
                                        display: inline-block;
                                        margin: 20px 0;
                                   }
                                   .footer {
                                        text-align: center;
                                        padding: 10px 0;
                                        font-size: 12px;
                                        color: #cccccc;
                                   }
                                   a {
                                        color: #60a5fa;
                                        text-decoration: none;
                                   }
                                   a:hover {
                                        text-decoration: underline;
                                   }
                              </style>
                         </head>
                         <body>
                              <div className="container">
                                   <div className="header">
                                        <h1>Welcome to Notes App!</h1>
                                   </div>
                                   <div className="content">
                                        <p>Please use the following OTP to verify your email address:</p>
                                        <div className="otp">${otp}</div>
                                             <p>This OTP is valid for 10 minutes. Do not share it with anyone.</p>
                                   </div>
                                   <div className="footer">
                                        <p>Having trouble? <a href="mailto:${process.env.EMAIL_USER}">Contact us</a></p>
                                        <p>&copy; 2025 Notes App. All rights reserved.</p>
                                   </div>
                              </div>
                         </body>
                    </html>
                    `,
          });

          return NextResponse.json(
               { message: "User registered successfully. Please check your email for your OTP." },
               { status: 201 }
          );
     } catch (err) {
          console.error("Registration error:", err);
          return NextResponse.json({ error: "Internal server error" }, { status: 500 });
     }
}