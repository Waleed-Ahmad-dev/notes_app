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
          <div className="space-y-2">
               {categories.map(category => (
                    <button
                         key={category.id}
                         className={
                              `flex justify-between items-center w-full p-3 rounded-lg transition-all duration-200
                              ${
                                   activeTab === category.id
                                        ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 shadow-[inset_3px_0_0_0] shadow-indigo-500 dark:shadow-indigo-400'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700/80'
                              }`
                         }
                         onClick={() => setActiveTab(category.id)}
                    >
                         <div className="flex items-center space-x-3">
                              <span className="transition-colors duration-200">
                                   {category.icon}
                              </span>
                              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                                   {category.name}
                              </span>
                         </div>
                         <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full transition-colors duration-200">
                              {category.count}
                         </span>
                    </button>
               ))}
          </div>
     );
}