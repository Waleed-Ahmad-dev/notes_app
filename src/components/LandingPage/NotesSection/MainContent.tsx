import { motion } from 'framer-motion';
import { Search } from 'react-feather';
import CreateNoteForm from './CreateNoteForm';
import NotesGrid from './NotesGrid';
import EmptyState from './EmptyState';
import { Category } from '@/utils/types';
import { Note } from '@prisma/client';

export default function MainContent({
     categories,
     activeTab,
     createNoteVisible,
     setCreateNoteVisible,
     newNote,
     setNewNote,
     addNote,
     filteredNotes,
     expandedNote,
     setExpandedNote,
     deleteNote,
     toggleStar
}: {
     categories: Category[];
     activeTab: string;
     createNoteVisible: boolean;
     setCreateNoteVisible: (visible: boolean) => void;
     newNote: { title: string; content: string; category: string };
     setNewNote: (note: { title: string; content: string; category: string }) => void;
     addNote: () => void;
     filteredNotes: Note[];
     expandedNote: string | null;
     setExpandedNote: (id: string | null) => void;
     deleteNote: (id: string) => void;
     toggleStar: (id: string) => void;
}) {
     return (
          <div className="md:w-3/4">
               <motion.div 
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
               >
                    <motion.h2 
                         className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
                         animate={{ 
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                         }}
                         transition={{ 
                              duration: 4,
                              repeat: Infinity 
                         }}
                    >
                         {categories.find(c => c.id === activeTab)?.name || 'All Notes'}
                    </motion.h2>

                    <div className="relative w-full md:w-auto">
                         <input
                              type="text"
                              placeholder="Search notes..."
                              className="w-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 dark:focus:ring-indigo-500/50 border border-gray-200/50 dark:border-gray-700/30 transition-all duration-300 hover:shadow-lg backdrop-blur-lg"
                         />
                         <Search
                              size={20}
                              className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500"
                         />
                    </div>
               </motion.div>

               <CreateNoteForm
                    visible={createNoteVisible}
                    newNote={newNote}
                    setNewNote={setNewNote}
                    setCreateNoteVisible={setCreateNoteVisible}
                    addNote={addNote}
               />

               {filteredNotes.length === 0 ? (
                    <EmptyState onCreateNote={() => setCreateNoteVisible(true)} />
                    ) : (
                    <NotesGrid
                         notes={filteredNotes}
                         expandedNote={expandedNote}
                         setExpandedNote={setExpandedNote}
                         deleteNote={deleteNote}
                         toggleStar={toggleStar}
                    />
               )}
          </div>
     );
}