// app/dashboard/[id]/page.tsx
import NoteEditor from "@/components/NoteEditor";
import { notFound } from "next/navigation";

interface Note {
  id: string;
  title: string;
  content: string;
}

async function getNoteById(id: string): Promise<Note | null> {
  const res = await fetch(`/api/notes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNoteById(params.id);

  if (!note) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <NoteEditor note={note} />
    </div>
  );
}
