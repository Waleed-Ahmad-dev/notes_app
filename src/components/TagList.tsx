export default function TagList() {
     return (
          <div className="mt-8">
               <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Tags</h3>
               <div className="flex flex-wrap gap-2">
                    {['Important', 'To-Do', 'Ideas', 'Meeting', 'Personal'].map(tag => (
                         <span 
                              key={tag}
                              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                         >
                              {tag}
                         </span>
                    ))}
               </div>
          </div>
     );
}