import { useState } from "react";

export default function TagList() {
     const [activeTag, setActiveTag] = useState<string | null>(null);
     
     const tags = ['Important', 'To-Do', 'Ideas', 'Meeting', 'Personal'];

     return (
          <div className="mt-8">
               <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Tags</h3>
               <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                         <button
                              key={tag}
                              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                              className={
                                   `relative overflow-hidden
                                   px-3 py-1.5 rounded-full text-sm font-medium
                                   transition-all duration-200 ease-out
                                   transform hover:scale-[1.03] active:scale-[0.98]
                                   focus:outline-none focus:ring-2 focus:ring-offset-2
                                   focus:ring-blue-500 focus:ring-opacity-50
                                   dark:focus:ring-offset-gray-900
                                   
                                   /* Base styles */
                                   bg-gray-100 dark:bg-gray-700
                                   text-gray-700 dark:text-gray-300
                                   
                                   /* Hover styles */
                                   hover:bg-gray-200 hover:shadow-sm
                                   hover:shadow-gray-300
                                   dark:hover:bg-gray-600 dark:hover:shadow-gray-800
                                   
                                   /* Active state styles */
                                   ${
                                        activeTag === tag 
                                        ? 'bg-blue-600 text-white shadow-inner hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' 
                                        : ''
                                   }
                                   
                                   /* Active pseudo-class (during click) */
                                   active:bg-blue-500 active:shadow-inner
                                   `
                              }
                         >
                              {tag}
                         </button>
                    ))}
               </div>
          </div>
     );
}