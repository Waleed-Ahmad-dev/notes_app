import { motion, AnimatePresence } from 'framer-motion';

export default function CreateNoteForm({
     visible,
     newNote,
     setNewNote,
     setCreateNoteVisible,
     addNote
}: {
     visible: boolean;
     newNote: { title: string; content: string; category: string };
     setNewNote: (note: { title: string; content: string; category: string }) => void;
     setCreateNoteVisible: (visible: boolean) => void;
     addNote: () => void;
}) {
     return (
          <AnimatePresence>
               {visible && (
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
     );
}