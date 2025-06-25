import { motion } from 'framer-motion';
import { Plus } from 'react-feather';
import CategoryList from './CategoryList';
import TagList from './TagList';
import { Category } from '@/utils/types';
import { useState } from 'react';

export default function Sidebar({
     categories,
     activeTab,
     setActiveTab,
     setCreateNoteVisible
}: {
     categories: Category[];
     activeTab: string;
     setActiveTab: (id: string) => void;
     setCreateNoteVisible: (visible: boolean) => void;
}) {
     const [isHovered, setIsHovered] = useState(false);

     return (
          <motion.div
               className="bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/90 rounded-2xl shadow-xl dark:shadow-gray-950 p-6 sticky top-24 border border-gray-200/50 dark:border-gray-700/30 backdrop-blur-xl"
               initial={{ opacity: 0, x: -20 }}
               animate={{ 
                    opacity: 1, 
                    x: 0,
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
               }}
               transition={{ duration: 0.4 }}
               onHoverStart={() => setIsHovered(true)}
               onHoverEnd={() => setIsHovered(false)}
               whileHover={{
                    y: -5,
                    borderColor: 'rgba(99, 102, 241, 0.5)'
               }}
          >
               {isHovered && (
                    <motion.div
                         className="absolute inset-0 rounded-2xl bg-indigo-500/5 pointer-events-none"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                    />
               )}

               <div className="flex justify-between items-center mb-6">
                    <motion.h2
                         className="text-xl font-bold text-gray-800 dark:text-white"
                         whileHover={{
                              x: 3,
                              background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                              //   WebkitBackgroundClip: 'text',
                              //   WebkitTextFillColor: 'transparent'
                         }}
                    >
                         Categories
                    </motion.h2>

                    <motion.button
                         onClick={() => setCreateNoteVisible(true)}
                         className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2.5 rounded-xl relative overflow-hidden group backdrop-blur-sm"
                         whileHover={{
                              scale: 1.05,
                              background: 'linear-gradient(to right, #4f46e5, #7c3aed)'
                         }}
                         whileTap={{
                              scale: 0.95,
                              background: 'linear-gradient(to right, #4338ca, #6d28d9)'
                         }}
                         aria-label="Create new note"
                    >
                         <Plus size={20} className="relative z-10" />
                         <motion.span
                              className="absolute inset-0 bg-white/20"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                   scale: isHovered ? 1.5 : 1, 
                                   opacity: isHovered ? 0.3 : 0
                              }}
                              transition={{ duration: 0.3 }}
                         />
                    </motion.button>
               </div>

               <CategoryList
                    categories={categories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
               />

               <motion.div
                    className="mt-8 pt-6 border-t border-gray-100/50 dark:border-gray-700/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -3 }}
               >
                    <motion.h3
                         className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3"
                         whileHover={{ 
                              x: 2,
                              background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                              //   WebkitBackgroundClip: 'text',
                              //   WebkitTextFillColor: 'transparent'
                         }}
                    >
                         Tags
                    </motion.h3>
                    <TagList />
               </motion.div>
          </motion.div>
     );
}