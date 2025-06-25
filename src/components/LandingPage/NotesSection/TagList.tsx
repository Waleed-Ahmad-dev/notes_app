import { motion } from "framer-motion";
import { useState } from "react";

export default function TagList() {
     const [activeTag, setActiveTag] = useState<string | null>(null);

     const tags = ['Important', 'To-Do', 'Ideas', 'Meeting', 'Personal'];

     return (
          <div className="flex flex-wrap gap-3">
               {tags.map((tag, index) => (
                    <motion.button
                         key={tag}
                         onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                         className={`
                              relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium
                              transition-all duration-300 backdrop-blur-sm
                              ${activeTag === tag
                                   ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                   : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70'
                              }
                         `}
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: index * 0.05 }}
                         whileHover={{
                              scale: 1.05,
                              boxShadow: activeTag !== tag ? '0 5px 15px -5px rgba(99, 102, 241, 0.3)' : undefined
                         }}
                         whileTap={{ scale: 0.95 }}
                    >
                         <span className="relative z-10">{tag}</span>
                         {activeTag === tag && (
                              <motion.span
                                   className="absolute inset-0 bg-white/20"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                              />
                         )}
                    </motion.button>
               ))}
          </div>
     );
}