/* eslint-disable @typescript-eslint/no-unused-vars */
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Category } from '@/utils/types';
import { Note } from '@prisma/client';

export default function NotesSection({
     categories,
     notes,
     activeTab,
     setActiveTab,
     createNoteVisible,
     setCreateNoteVisible,
     newNote,
     setNewNote,
     addNote,
     deleteNote,
     toggleStar,
     expandedNote,
     setExpandedNote,
     filteredNotes
}: {
     categories: Category[];
     notes: Note[];
     activeTab: string;
     setActiveTab: (id: string) => void;
     createNoteVisible: boolean;
     setCreateNoteVisible: (visible: boolean) => void;
     newNote: { title: string; content: string; category: string };
     setNewNote: (note: { title: string; content: string; category: string }) => void;
     addNote: () => void;
     deleteNote: (id: string) => void;
     toggleStar: (id: string) => void;
     expandedNote: string | null;
     setExpandedNote: (id: string | null) => void;
     filteredNotes: Note[];
}) {
     return (
          <section className="py-16">
               <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                         <div className="md:w-1/4">
                              <Sidebar
                                   categories={categories}
                                   activeTab={activeTab}
                                   setActiveTab={setActiveTab}
                                   setCreateNoteVisible={setCreateNoteVisible}
                              />
                         </div>

                         <div className="md:w-3/4">
                              <MainContent
                                   categories={categories}
                                   activeTab={activeTab}
                                   createNoteVisible={createNoteVisible}
                                   setCreateNoteVisible={setCreateNoteVisible}
                                   newNote={newNote}
                                   setNewNote={setNewNote}
                                   addNote={addNote}
                                   filteredNotes={filteredNotes}
                                   expandedNote={expandedNote}
                                   setExpandedNote={setExpandedNote}
                                   deleteNote={deleteNote}
                                   toggleStar={toggleStar}
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
}