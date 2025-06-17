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
               <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                         {categories.find(c => c.id === activeTab)?.name || 'All Notes'}
                    </h2>
                    <div className="relative">
                         <input 
                              type="text" 
                              placeholder="Search notes..." 
                              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500"
                         />
                         <Search size={18} className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500" />
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