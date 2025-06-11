import { getAuthUserId } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

interface Note {
     id: string;
     title: string;
}

const prisma = new PrismaClient();

async function getNotes(): Promise<Note[]> {
     const userId = await getAuthUserId();
     if (!userId) {
          // Handle unauthorized case by returning an empty array
          return [];
     }

     const notes = await prisma.note.findMany({
          where: { userId },
          orderBy: { updatedAt: "desc" },
          select: { id: true, title: true }, // Optimize by selecting only needed fields
     });

     return notes;
}

export default async function DashboardPage() {
     const notes = await getNotes();

     return (
          <div className="space-y-6">
               <h1 className="text-3xl font-bold">Your Notes</h1>
               {notes.length === 0 ? (
                    <p className="text-gray-400">
                              You don’t have any notes yet. Create one from the sidebar.
                    </p>
                    ) : (
                    <ul className="space-y-2">
                         {notes.map((note) => (
                              <li key={note.id}>
                                   <Link
                                        href={`/dashboard/${note.id}`}
                                        className="block px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                                   >
                                        {note.title || "Untitled Note"}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
}