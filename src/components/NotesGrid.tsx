import { Note } from '@prisma/client';
import NoteCard from './NoteCard';

export default function NotesGrid({
     notes,
     expandedNote,
     setExpandedNote,
     deleteNote,
     toggleStar
}: {
     notes: Note[];
     expandedNote: string | null;
     setExpandedNote: (id: string | null) => void;
     deleteNote: (id: string) => void;
     toggleStar: (id: string) => void;
}) {
     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {notes.map(note => (
                    <NoteCard
                         key={note.id}
                         note={{ ...note, category: "default" }}
                         isExpanded={expandedNote === note.id}
                         onExpand={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                         onDelete={() => deleteNote(note.id)}
                         onToggleStar={() => toggleStar(note.id)}
                    />
               ))}
          </div>
     );
}