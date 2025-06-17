/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Star, Edit, Tag, ChevronUp, ChevronDown } from 'react-feather';

type Category = {
     id: string;
     name: string;
     icon: React.ReactNode;
     count: number;
};

type Note = {
     id: string;
     title: string;
     content: string;
     category: string;
     date: string;
     starred: boolean;
};

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
                              <motion.div 
                                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 sticky top-24"
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                              >
                                   <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Categories</h2>
                                        <button 
                                             onClick={() => setCreateNoteVisible(true)}
                                             className="bg-indigo-600 dark:bg-indigo-700 text-white p-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                                        >
                                             <Plus size={18} />
                                        </button>
                                   </div>

                                   <div className="space-y-2">
                                        {categories.map(category => (
                                             <button
                                                  key={category.id}
                                                  className={
                                                       `flex justify-between items-center w-full p-3 rounded-lg transition-colors
                                                       ${
                                                            activeTab === category.id 
                                                            ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300' 
                                                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                                       }`
                                             }
                                                  onClick={() => setActiveTab(category.id)}
                                             >
                                                  <div className="flex items-center space-x-3">
                                                       <span className={`${activeTab === category.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}>
                                                            {category.icon}
                                                       </span>
                                                       <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                                                  </div>
                                                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                                                       {category.count}
                                                  </span>
                                             </button>
                                        ))}
                                   </div>

                                   <div className="mt-8">
                                        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                             {['Important', 'To-Do', 'Ideas', 'Meeting', 'Personal'].map(tag => (
                                                  <span 
                                                       key={tag}
                                                       className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                                                  >
                                                       {tag}
                                                  </span>
                                             ))}
                                        </div>
                                   </div>
                              </motion.div>
                         </div>

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

                              <AnimatePresence>
                                   {createNoteVisible && (
                                        <motion.div 
                                             className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 mb-6"
                                             initial={{ opacity: 0, height: 0 }}
                                             animate={{ opacity: 1, height: 'auto' }}
                                             exit={{ opacity: 0, height: 0 }}
                                        >
                                             <h3 className="font-bold text-lg mb-4 dark:text-white">Create New Note</h3>
                                             <div className="space-y-4">
                                                  <input
                                                       type="text"
                                                       placeholder="Title"
                                                       className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                       value={newNote.title}
                                                       onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                                                  />
                                                  <textarea
                                                       placeholder="Content"
                                                       rows={4}
                                                       className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                       value={newNote.content}
                                                       onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                                                  />
                                                  <div className="flex justify-between">
                                                       <select
                                                            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500"
                                                            value={newNote.category}
                                                            onChange={(e) => setNewNote({...newNote, category: e.target.value})}
                                                       >
                                                            <option value="personal">Personal</option>
                                                            <option value="work">Work</option>
                                                            <option value="ideas">Ideas</option>
                                                            <option value="travel">Travel</option>
                                                       </select>
                                                       <div className="space-x-3">
                                                            <button 
                                                                 className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                                                                 onClick={() => setCreateNoteVisible(false)}
                                                            >
                                                                 Cancel
                                                            </button>
                                                            <button 
                                                                 className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600"
                                                                 onClick={addNote}
                                                            >
                                                                 Create
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   )}
                              </AnimatePresence>

                              {filteredNotes.length === 0 ? (
                                   <motion.div 
                                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-12 text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                   >
                                        <div className="bg-indigo-100 dark:bg-indigo-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                             <Edit size={24} className="text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No notes found</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">Create your first note to get started</p>
                                        <button 
                                             className="bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600"
                                             onClick={() => setCreateNoteVisible(true)}
                                        >
                                             Create Note
                                        </button>
                                   </motion.div>
                              ) : (
                                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredNotes.map(note => (
                                             <motion.div
                                                  key={note.id}
                                                  className={
                                                       `bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden
                                                       ${
                                                            expandedNote === note.id ? 'md:col-span-2 lg:col-span-3' : ''
                                                       }`
                                                  }
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.3 }}
                                                  whileHover={{ y: -5 }}
                                             >
                                                  <div className="p-5">
                                                       <div className="flex justify-between items-start">
                                                            <h3 className="font-bold text-lg text-gray-800 dark:text-white">{note.title}</h3>
                                                            <button 
                                                                 onClick={() => toggleStar(note.id)}
                                                                 className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400"
                                                            >
                                                                 <Star 
                                                                      size={18} 
                                                                      className={note.starred ? "text-yellow-400 fill-yellow-400" : ""} 
                                                                 />
                                                            </button>
                                                       </div>

                                                       <div className="flex items-center mt-2 mb-4">
                                                            <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs px-2 py-1 rounded mr-2 capitalize">
                                                                 {note.category}
                                                            </span>
                                                            <span className="text-xs text-gray-500 dark:text-gray-400">{note.date}</span>
                                                       </div>

                                                       <p className={`text-gray-600 dark:text-gray-400 ${expandedNote === note.id ? '' : 'line-clamp-3'}`}>
                                                            {note.content}
                                                       </p>
                                                  </div>
                    
                                                  <div className="border-t border-gray-100 dark:border-gray-700 px-5 py-3 flex justify-between">
                                                       <div className="flex space-x-2">
                                                            <button 
                                                                 className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                                                 onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                                                            >
                                                                 {expandedNote === note.id ? (
                                                                      <ChevronUp size={18} />
                                                                 ) : (
                                                                      <ChevronDown size={18} />
                                                                 )}
                                                            </button>
                                                            <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                                                 <Tag size={18} />
                                                            </button>
                                                       </div>
                                                       <button 
                                                            className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                                                            onClick={() => deleteNote(note.id)}
                                                       >
                                                            Delete
                                                       </button>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </section>
     );
}