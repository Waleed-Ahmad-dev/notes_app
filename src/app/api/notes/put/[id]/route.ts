import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getAuthUserId } from "@/lib/auth";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
     const userId = await getAuthUserId();
     if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

     const { title, content } = await req.json();

     const updated = await prisma.note.updateMany({
          where: { id: params.id, userId },
          data: { title, content },
     });

     if (updated.count === 0) {
          return NextResponse.json({ error: "Note not found or not yours" }, { status: 404 });
     }

     return NextResponse.json({ message: "Note updated" });
}