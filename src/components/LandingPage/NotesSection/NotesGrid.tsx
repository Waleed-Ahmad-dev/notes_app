import { Note } from '@prisma/client';
import NoteCard from './NoteCard';
import { motion } from 'framer-motion';

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
          <motion.div 
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ staggerChildren: 0.1 }}
          >
               {notes.map((note, index) => (
                    <motion.div
                         key={note.id}
                         className="transition-all duration-300 ease-in-out"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: index * 0.05, duration: 0.3 }}
                         whileHover={{ 
                              scale: 1.02,
                              zIndex: 10
                         }}
                    >
                         <NoteCard
                              note={{ ...note, category: "default" }}
                              isExpanded={expandedNote === note.id}
                              onExpand={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                              onDelete={() => deleteNote(note.id)}
                              onToggleStar={() => toggleStar(note.id)}
                         />
                    </motion.div>
               ))}
          </motion.div>
     );
}