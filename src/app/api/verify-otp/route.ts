import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
     try {
          const { otp, email } = await req.json();

          if (!otp || !email) {
               return NextResponse.json({ error: "OTP and email are required" }, { status: 400 });
          }

          const user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
               return NextResponse.json({ error: "User not found" }, { status: 404 });
          }

          const verificationToken = await prisma.verificationToken.findFirst({
               where: { userId: user.id, token: otp },
          });

          if (!verificationToken) {
               return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
          }

          if (new Date() > verificationToken.expiresAt) {
               await prisma.verificationToken.delete({ where: { id: verificationToken.id } });
               return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
          }

          await prisma.user.update({
               where: { id: user.id },
               data: { verified: true },
          });

          await prisma.verificationToken.delete({ where: { id: verificationToken.id } });

          return NextResponse.json({ message: "Email verified successfully. You can now log in." }, { status: 200 });
     } catch (err) {
          console.error("Verification error:", err);
          return NextResponse.json({ error: "Internal server error" }, { status: 500 });
     }
}