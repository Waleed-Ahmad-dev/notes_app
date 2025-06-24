import { motion } from 'framer-motion';
import { Edit } from 'react-feather';

export default function EmptyState({ onCreateNote }: { onCreateNote: () => void }) {
     return (
          <motion.div
               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 sm:p-8 md:p-12 text-center transition-colors duration-300"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
               }}
          >
               <motion.div
                    className="bg-indigo-100 dark:bg-indigo-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
                    whileHover={{
                         scale: 1.05,
                         backgroundColor: 'rgba(199, 210, 254, 0.5)',
                    }}
                    whileTap={{ scale: 0.95 }}
               >
                    <Edit size={24} className="text-indigo-600 dark:text-indigo-400" />
               </motion.div>
               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                    No notes found
               </h3>
               <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto transition-colors duration-300">
                    Create your first note to get started
               </p>
               <motion.button
                    className="bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-3 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-300"
                    onClick={onCreateNote}
                    whileHover={{
                         scale: 1.05,
                         backgroundColor: '#4f46e5'
                    }}
                    whileTap={{
                         scale: 0.95,
                         backgroundColor: '#4338ca'
                    }}
               >
                    Create Note
               </motion.button>
          </motion.div>
     );
}