import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
     const token = req.nextUrl.searchParams.get('token');

     if (!token) {
          return NextResponse.json({ error: "Token is required" }, { status: 400 });
     }

     try {
          const verificationToken = await prisma.verificationToken.findUnique({
               where: { token },
               include: { user: true },
          });

          if (!verificationToken) {
               return NextResponse.json({ error: "Invalid token" }, { status: 400 });
          }

          if (new Date() > verificationToken.expiresAt) {
               await prisma.verificationToken.delete({ where: { id: verificationToken.id } });
               return NextResponse.json({ error: "Token has expired" }, { status: 400 });
          }

          await prisma.user.update({
               where: { id: verificationToken.userId },
               data: { verified: true },
          });

          await prisma.verificationToken.delete({ where: { id: verificationToken.id } });

          return NextResponse.json({ message: "Email verified successfully. You can now log in." }, { status: 200 });
     } catch (err) {
          console.error("Verification error:", err);
          return NextResponse.json({ error: "Internal server error" }, { status: 500 });
     }
}