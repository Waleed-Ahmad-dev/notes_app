"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardSidebar() {
     const router = useRouter();
     const [title, setTitle] = useState("");
     const [content, setContent] = useState("");

     const createNote = async () => {
          const res = await fetch("/api/notes/post", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ title, content }),
          });
          if (res.ok) {
               const data = await res.json();
               router.push(`/dashboard/${data.id}`);
          } else {
               console.error("Failed to create note:", res.status);
          }
     };

     return (
          <div className="space-y-4">
               <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 border rounded"
               />
               <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className="w-full p-2 border rounded"
                    rows={4}
               />
               <Button className="w-full" onClick={createNote}>
                    + Create Note
               </Button>
          </div>
     );
}