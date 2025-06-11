import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getAuthUserId } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
     const userId = await getAuthUserId();
     if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

     const notes = await prisma.note.findMany({
          where: { userId },
          orderBy: { updatedAt: "desc" },
     });

     return NextResponse.json(notes);
}