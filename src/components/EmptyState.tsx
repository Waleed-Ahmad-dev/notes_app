import { motion } from 'framer-motion';
import { Edit } from 'react-feather';

export default function EmptyState({ onCreateNote }: { onCreateNote: () => void }) {
     return (
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
                    onClick={onCreateNote}
               >
                    Create Note
               </button>
          </motion.div>
     );
}