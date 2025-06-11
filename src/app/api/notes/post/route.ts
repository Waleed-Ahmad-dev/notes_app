import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getAuthUserId } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
     const userId = await getAuthUserId();
     if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

     const { title, content } = await req.json();

     const newNote = await prisma.note.create({
          data: {
               title,
               content,
               userId,
          },
     });

     return NextResponse.json(newNote, { status: 201 });
}