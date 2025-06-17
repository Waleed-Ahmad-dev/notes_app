import { motion } from 'framer-motion';
import { Plus } from 'react-feather';
import CategoryList from './CategoryList';
import TagList from './TagList';
import { Category } from '@/utils/types';

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
     return (
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

               <CategoryList 
                    categories={categories} 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
               />
               <TagList />
          </motion.div>
     );
}