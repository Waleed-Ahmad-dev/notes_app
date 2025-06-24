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
                         className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 mb-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                         <h3 className="font-bold text-xl mb-4 dark:text-white text-gray-800 flex items-center transition-colors duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                   <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                              </svg>
                                   Create New Note
                         </h3>
                         <div className="space-y-5">
                              <input
                                   type="text"
                                   placeholder="Title"
                                   className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-500 placeholder-gray-400 dark:placeholder-gray-500"
                                   value={newNote.title}
                                   onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                              />
                              <textarea
                                   placeholder="Content"
                                   rows={4}
                                   className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-500 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                                   value={newNote.content}
                                   onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                              />
                              <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                                   <select
                                        className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiA5Q0FCMEEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center] pl-3 pr-10"
                                        value={newNote.category}
                                        onChange={(e) => setNewNote({...newNote, category: e.target.value})}
                                   >
                                        <option value="personal">Personal</option>
                                        <option value="work">Work</option>
                                        <option value="ideas">Ideas</option>
                                        <option value="travel">Travel</option>
                                   </select>
                                   <div className="flex space-x-3">
                                        <motion.button
                                             className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-lg font-medium w-full sm:w-auto flex-1 transition-colors duration-200"
                                             whileHover={{
                                                  backgroundColor: '#e5e7eb',
                                                  scale: 1.02
                                             }}
                                             whileTap={{
                                                  scale: 0.98,
                                                  backgroundColor: '#d1d5db'
                                             }}
                                             onClick={() => setCreateNoteVisible(false)}
                                        >
                                             Cancel
                                        </motion.button>
                                        <motion.button
                                             className="bg-indigo-600 dark:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium w-full sm:w-auto flex-1 transition-colors duration-200"
                                             whileHover={{
                                                  backgroundColor: '#4f46e5',
                                                  scale: 1.02
                                             }}
                                             whileTap={{
                                                  scale: 0.98,
                                                  backgroundColor: '#3730a3'
                                             }}
                                             onClick={addNote}
                                        >
                                             Create
                                        </motion.button>
                                   </div>
                              </div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
}