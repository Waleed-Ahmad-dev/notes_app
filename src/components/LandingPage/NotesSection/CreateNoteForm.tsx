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
                         className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/80 dark:to-gray-900/90 rounded-2xl shadow-2xl dark:shadow-gray-950 p-6 mb-6 border border-gray-200/50 dark:border-gray-700/30 backdrop-blur-xl"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ 
                              opacity: 1, 
                              height: 'auto',
                              boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
                         }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 to-transparent rounded-2xl" />

                         <motion.h3 
                              className="font-bold text-xl mb-5 dark:text-white text-gray-800 flex items-center"
                              initial={{ x: -20 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.1 }}
                         >
                              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg mr-3">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                   </svg>
                              </div>
                              Create New Note
                         </motion.h3>

                         <div className="space-y-5 relative z-10">
                              <motion.div
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.2 }}
                              >
                                   <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-full p-3.5 border border-gray-200/60 dark:border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300/50 dark:focus:ring-indigo-500/50 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500 placeholder-gray-400 dark:placeholder-gray-500 backdrop-blur-sm"
                                        value={newNote.title}
                                        onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                                   />
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.25 }}
                              >
                                   <textarea
                                        placeholder="Content"
                                        rows={4}
                                        className="w-full p-3.5 border border-gray-200/60 dark:border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300/50 dark:focus:ring-indigo-500/50 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500 placeholder-gray-400 dark:placeholder-gray-500 resize-none backdrop-blur-sm"
                                        value={newNote.content}
                                        onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                                   />
                              </motion.div>

                              <motion.div 
                                   className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0"
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.3 }}
                              >
                                   <select
                                        className="bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 dark:focus:ring-indigo-500/50 border border-gray-200/60 dark:border-gray-700/50 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiA5Q0FCMEEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center] pl-3 pr-10 backdrop-blur-sm"
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
                                             className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700/80 dark:to-gray-800/90 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-xl font-medium w-full sm:w-auto flex-1 backdrop-blur-md"
                                             whileHover={{
                                                  scale: 1.03,
                                                  background: 'linear-gradient(to right, #e5e7eb, #d1d5db)'
                                             }}
                                             whileTap={{
                                                  scale: 0.97,
                                                  background: 'linear-gradient(to right, #d1d5db, #e5e7eb)'
                                             }}
                                             onClick={() => setCreateNoteVisible(false)}
                                        >
                                             Cancel
                                        </motion.button>

                                        <motion.button
                                             className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2.5 rounded-xl font-medium w-full sm:w-auto flex-1 backdrop-blur-md"
                                             whileHover={{
                                                  scale: 1.03,
                                                  background: 'linear-gradient(to right, #4f46e5, #7c3aed)'
                                             }}
                                             whileTap={{
                                                  scale: 0.97,
                                                  background: 'linear-gradient(to right, #4338ca, #6d28d9)'
                                             }}
                                             onClick={addNote}
                                        >
                                             Create
                                        </motion.button>
                                   </div>
                              </motion.div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
}