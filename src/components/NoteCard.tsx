// components/NoteCard.tsx
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
                    ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`
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
                              onClick={onToggleStar}
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
                         <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(note.createdAt).toLocaleDateString()}</span>
                    </div>

                    <p className={`text-gray-600 dark:text-gray-400 ${isExpanded ? '' : 'line-clamp-3'}`}>
                         {note.content}
                    </p>
               </div>

               <div className="border-t border-gray-100 dark:border-gray-700 px-5 py-3 flex justify-between">
                    <div className="flex space-x-2">
                         <button 
                              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                              onClick={onExpand}
                         >
                              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                         </button>
                         <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                              <Tag size={18} />
                         </button>
                    </div>
                    <button 
                         className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                         onClick={onDelete}
                    >
                         Delete
                    </button>
               </div>
          </motion.div>
     );
}