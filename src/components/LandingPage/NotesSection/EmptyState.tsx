import { motion } from 'framer-motion';
import { Edit } from 'react-feather';

export default function EmptyState({ onCreateNote }: { onCreateNote: () => void }) {
     return (
          <motion.div
               className="bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/90 rounded-2xl shadow-xl dark:shadow-gray-950 p-8 md:p-12 text-center backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/30"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ 
                    opacity: 1, 
                    scale: 1,
                    boxShadow: '0 20px 50px -10px rgba(99, 102, 241, 0.2)'
               }}
               whileHover={{
                    y: -5,
                    scale: 1.01,
                    transition: { duration: 0.3 }
               }}
          >
               <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent" />

               <motion.div
                    className="bg-gradient-to-r from-indigo-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    animate={{ 
                         rotate: [0, 5, -5, 0],
                         scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                         duration: 2,
                         repeat: Infinity,
                         repeatType: "reverse"
                    }}
               >
                    <Edit size={28} className="text-white" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
               </motion.div>

               <motion.h3
                    className="text-2xl font-bold text-gray-800 dark:text-white mb-3 bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
               >
                    Your Canvas Awaits
               </motion.h3>

               <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
               >
                    Create your first note to fill this space with ideas, thoughts, and inspiration
               </motion.p>

               <motion.button
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3.5 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative overflow-hidden group backdrop-blur-md"
                    onClick={onCreateNote}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                         scale: 1.05,
                         background: 'linear-gradient(to right, #4f46e5, #7c3aed)'
                    }}
                    whileTap={{
                         scale: 0.97,
                         background: 'linear-gradient(to right, #4338ca, #6d28d9)'
                    }}
               >
                    <span className="relative z-10">Create First Note</span>
                    <motion.div 
                         className="absolute inset-0 bg-white/20"
                         initial={{ opacity: 0 }}
                         animate={{ 
                              opacity: [0, 0.3, 0],
                              x: ['-100%', '100%']
                         }}
                         transition={{ 
                              duration: 1.5,
                              repeat: Infinity
                         }}
                    />
               </motion.button>
          </motion.div>
     );
}