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
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                         {categories.find(c => c.id === activeTab)?.name || 'All Notes'}
                    </h2>
                    <div className="relative w-full md:w-auto">
                         <input
                              type="text"
                              placeholder="Search notes..."
                              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500
                                   border border-transparent hover:border-gray-300 dark:hover:border-gray-500
                                   transition-all duration-200 ease-in-out
                                   hover:shadow-sm dark:hover:shadow-gray-700/50
                                   peer"
                         />
                         <Search
                              size={18}
                              className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500
                                   peer-focus:text-indigo-500 dark:peer-focus:text-indigo-400
                                   peer-hover:text-gray-500 dark:peer-hover:text-gray-400
                                   transition-colors duration-200"
                         />
                    </div>
               </div>

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