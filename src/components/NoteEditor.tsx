"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDebounce } from "@/lib/useDebounce"; // custom hook

interface Note {
     id: string;
     title: string;
     content: string;
}

export default function NoteEditor({ note }: { note: Note }) {
     const [title, setTitle] = useState(note.title);
     const [content, setContent] = useState(note.content);
     const debouncedTitle = useDebounce(title, 500);
     const debouncedContent = useDebounce(content, 500);

  useEffect(() => {
    const updateNote = async () => {
      try {
        const res = await fetch(`/api/notes/${note.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: debouncedTitle, content: debouncedContent }),
        });

        if (!res.ok) {
          throw new Error("Failed to save");
        }
      } catch (err) {
          throw new Error(`Error updating note: ${err}`);
      }
    };

    if (
      debouncedTitle !== note.title ||
      debouncedContent !== note.content
    ) {
      updateNote();
    }
  }, [debouncedTitle, debouncedContent, note.id, note.title, note.content]);

  return (
    <div className="space-y-4">
      <Input
        className="text-2xl font-semibold bg-transparent border-none outline-none text-white"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        className="w-full min-h-[300px] resize-none bg-transparent border border-gray-700 text-white"
        placeholder="Start writing your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
