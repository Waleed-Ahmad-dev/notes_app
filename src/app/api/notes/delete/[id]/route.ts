import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getAuthUserId } from "@/lib/auth";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
     const userId = await getAuthUserId();
     if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

     const deleted = await prisma.note.deleteMany({
          where: { id: params.id, userId },
     });

     if (deleted.count === 0) {
          return NextResponse.json({ error: "Note not found or not yours" }, { status: 404 });
     }

     return NextResponse.json({ message: "Note deleted" });
}