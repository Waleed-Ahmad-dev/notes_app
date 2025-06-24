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
               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 sticky top-24 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    borderColor: 'rgba(99, 102, 241, 0.5)',
                    y: -3
               }}
               transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                    y: { type: 'spring', stiffness: 300 }
               }}
               onHoverStart={() => setIsHovered(true)}
               onHoverEnd={() => setIsHovered(false)}
          >
               {isHovered && (
                    <motion.div
                         className="absolute inset-0 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/5 pointer-events-none"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                    />
               )}

               <div className="flex justify-between items-center mb-6">
                    <motion.h2
                         className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
                         whileHover={{
                              x: 3,
                              textShadow: '0px 0px 8px rgba(99, 102, 241, 0.4)'
                         }}
                         transition={{ type: 'spring', stiffness: 300 }}
                    >
                         Categories
                    </motion.h2>

                    <motion.button
                         onClick={() => setCreateNoteVisible(true)}
                         className="bg-indigo-600 dark:bg-indigo-700 text-white p-2 rounded-lg relative overflow-hidden group"
                         whileHover={{
                              scale: 1.05,
                              backgroundColor: '#4f46e5'
                         }}
                         whileTap={{
                              scale: 0.95,
                              backgroundColor: '#4338ca'
                         }}
                         initial={false}
                         aria-label="Create new note"
                    >
                         <Plus size={18} className="relative z-10 transition-transform group-hover:rotate-90 duration-300" />
                         <motion.span
                              className="absolute inset-0 bg-indigo-500 dark:bg-indigo-400 opacity-0 group-hover:opacity-30"
                              initial={{ borderRadius: '50%', scale: 0 }}
                              animate={{
                                   borderRadius: ['50%', '20%', '15%'],
                                   scale: 2.5,
                                   opacity: [0, 0.3, 0]
                              }}
                              transition={{
                                   duration: 0.6,
                                   ease: 'easeOut'
                              }}
                         />
                    </motion.button>
               </div>

               <CategoryList
                    categories={categories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
               />

               <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -3 }}
                    className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300"
               >
                    <motion.h3
                         className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300"
                         whileHover={{ x: 2 }}
                    >
                         Tags
                    </motion.h3>
                    <TagList />
               </motion.div>
          </motion.div>
     );
}