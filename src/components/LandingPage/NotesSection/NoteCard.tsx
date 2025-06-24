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
               className={
                    `bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`
               }
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3 }}
               whileHover={{
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
               }}
               whileTap={{ scale: 0.98 }}
          >
               <div className="p-5">
                    <div className="flex justify-between items-start">
                         <h3 className="font-bold text-lg text-gray-800 dark:text-white truncate max-w-[70%] transition-colors duration-300">
                              {note.title}
                         </h3>
                         <motion.button
                              onClick={onToggleStar}
                              className="p-1 rounded-full"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label={note.starred ? "Unstar note" : "Star note"}
                         >
                              <Star
                                   size={18}
                                   className={`transition-colors duration-200 ${
                                        note.starred
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400"
                                   }`}
                              />
                         </motion.button>
                    </div>

                    <div className="flex items-center mt-2 mb-4">
                         <motion.span
                              className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs px-2 py-1 rounded mr-2 capitalize transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              {note.category}
                         </motion.span>
                         <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
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

               <div className="border-t border-gray-100 dark:border-gray-700 px-5 py-3 flex justify-between transition-colors duration-300">
                    <div className="flex space-x-2">
                         <motion.button
                              className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                              onClick={onExpand}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={isExpanded ? "Collapse note" : "Expand note"}
                         >
                              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                         </motion.button>
                         <motion.button
                              className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="Add tag"
                         >
                              <Tag size={18} />
                         </motion.button>
                    </div>
                    <motion.button
                         className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 font-medium transition-colors duration-300"
                         onClick={onDelete}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         aria-label="Delete note"
                    >
                         Delete
                    </motion.button>
               </div>
          </motion.div>
     );
}