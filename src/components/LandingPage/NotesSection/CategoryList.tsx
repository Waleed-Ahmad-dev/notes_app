import { motion } from 'framer-motion';
import { Category } from "@/utils/types";

export default function CategoryList({
     categories,
     activeTab,
     setActiveTab
}: {
     categories: Category[];
     activeTab: string;
     setActiveTab: (id: string) => void;
}) {
     return (
          <div className="space-y-3">
               {categories.map((category, index) => (
                    <motion.button
                         key={category.id}
                         className={`
                              flex justify-between items-center w-full p-3.5 rounded-xl transition-all
                              backdrop-blur-sm bg-gradient-to-r
                              ${activeTab === category.id
                                   ? 'from-indigo-500/10 to-purple-500/10 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.25)] border border-indigo-400/30'
                                   : 'from-white/5 to-gray-100/5 hover:from-white/10 hover:to-gray-100/10 border border-gray-200/30 dark:border-gray-700/30'
                              }`
                         }
                         onClick={() => setActiveTab(category.id)}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: index * 0.05, duration: 0.3 }}
                         whileHover={{ 
                              y: -3,
                              boxShadow: activeTab !== category.id 
                              ? '0 10px 25px -5px rgba(0,0,0,0.1)' 
                              : undefined
                         }}
                         whileTap={{ scale: 0.97 }}
                    >
                         <div className="flex items-center space-x-3">
                              <motion.span 
                                   className="text-xl transition-colors"
                                   animate={{ 
                                        rotate: activeTab === category.id ? [0, 10, -5, 0] : 0 
                                   }}
                                   transition={{ duration: 0.5 }}
                              >
                                   {category.icon}
                              </motion.span>
                              <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors">
                                   {category.name}
                              </span>
                         </div>
                         <motion.span 
                              className="bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-300 text-xs px-2.5 py-1 rounded-full backdrop-blur-md"
                              animate={{ scale: activeTab === category.id ? [1, 1.2, 1] : 1 }}
                              transition={{ duration: 0.3 }}
                         >
                              {category.count}
                         </motion.span>
                    </motion.button>
               ))}
          </div>
     );
}