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
                    <div
                         key={note.id}
                         className={`
                              transition-all duration-300 ease-in-out
                              hover:scale-[1.02] hover:z-10
                              active:scale-[0.99] active:transition-none
                              ${expandedNote === note.id ? 'z-20' : ''}
                         `}
                    >
                         <NoteCard
                              note={{ ...note, category: "default" }}
                              isExpanded={expandedNote === note.id}
                              onExpand={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                              onDelete={() => deleteNote(note.id)}
                              onToggleStar={() => toggleStar(note.id)}
                         />
                    </div>
               ))}
          </div>
     );
}