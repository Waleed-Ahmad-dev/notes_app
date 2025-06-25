import { Note } from '@prisma/client';
import { motion } from 'framer-motion';
import { Star, Tag, ChevronUp, ChevronDown } from 'react-feather';

export default function NoteCard({
     note,
     isExpanded,
     onExpand,
     onDelete,
     onToggleStar
}: {
     note: Note & { starred?: boolean; category: string };
     isExpanded: boolean;
     onExpand: () => void;
     onDelete: () => void;
     onToggleStar: () => void;
}) {
     return (
          <motion.div
               className={`
                    bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/90 rounded-2xl shadow-lg dark:shadow-gray-950 overflow-hidden
                    backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/30
                    transition-all duration-300 ease-in-out
                    ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}
               `}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.3 }}
               whileHover={{
                    y: -8,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    borderColor: 'rgba(99, 102, 241, 0.5)'
               }}
               whileTap={{ scale: 0.98 }}
          >
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />

               <div className="p-5 relative z-10">
                    <div className="flex justify-between items-start">
                         <motion.h3 
                              className="font-bold text-xl text-gray-800 dark:text-white truncate max-w-[70%]"
                              animate={{ 
                                   color: isExpanded ? ['#4f46e5', '#7c3aed'] : undefined
                              }}
                              transition={{ duration: 0.5 }}
                         >
                              {note.title}
                         </motion.h3>

                         <motion.button
                              onClick={onToggleStar}
                              className="p-1.5 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                              whileHover={{ scale: 1.1, rotate: [0, 15, -10, 0] }}
                              whileTap={{ scale: 0.9 }}
                              aria-label={note.starred ? "Unstar note" : "Star note"}
                         >
                              <Star
                                   size={20}
                                   className={`transition-all duration-300 ${
                                        note.starred
                                             ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
                                             : "text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400"
                                   }`}
                              />
                         </motion.button>
                    </div>

                    <div className="flex items-center mt-2 mb-4">
                         <motion.span
                              className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1.5 rounded-full mr-3 capitalize backdrop-blur-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              {note.category}
                         </motion.span>
                         <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(note.createdAt).toLocaleDateString()}
                         </span>
                    </div>

                    <motion.p
                         className={`text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                              isExpanded ? '' : 'line-clamp-3'
                         }`}
                         animate={{
                              height: isExpanded ? 'auto' : '4.5rem'
                         }}
                    >
                         {note.content}
                    </motion.p>
               </div>

               <div className="border-t border-gray-100/50 dark:border-gray-700/30 px-5 py-3 flex justify-between backdrop-blur-sm">
                    <div className="flex space-x-2">
                         <motion.button
                              className="p-2 rounded-xl bg-white/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 backdrop-blur-md"
                              onClick={onExpand}
                              whileHover={{ 
                                   scale: 1.05,
                                   background: 'linear-gradient(to right, #e0e7ff, #ede9fe)'
                              }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={isExpanded ? "Collapse note" : "Expand note"}
                         >
                              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                         </motion.button>

                         <motion.button
                              className="p-2 rounded-xl bg-white/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 backdrop-blur-md"
                              whileHover={{ 
                                   scale: 1.05,
                                   background: 'linear-gradient(to right, #e0e7ff, #ede9fe)'
                              }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="Add tag"
                         >
                              <Tag size={18} />
                         </motion.button>
                    </div>

                    <motion.button
                         className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 text-rose-600 dark:text-rose-400 font-medium backdrop-blur-md"
                         onClick={onDelete}
                         whileHover={{ 
                              scale: 1.05,
                              background: 'linear-gradient(to right, #ffe4e6, #fce7f3)'
                         }}
                         whileTap={{ scale: 0.95 }}
                         aria-label="Delete note"
                    >
                         Delete
                    </motion.button>
               </div>
          </motion.div>
     );
}