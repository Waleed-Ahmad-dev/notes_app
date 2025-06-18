import { motion } from 'framer-motion';
import { Edit, Search, Cloud, Tag, Folder, Calendar } from 'react-feather';

export default function FeaturesSection() {
     const features = [
          { 
               icon: <Edit size={36} className="text-indigo-600 dark:text-indigo-400" />, 
               title: 'Easy Note-Taking', 
               description: 'Create and edit notes with a beautiful, distraction-free interface that focuses on your content.' 
          },
          { 
               icon: <Search size={36} className="text-indigo-600 dark:text-indigo-400" />, 
               title: 'Powerful Search', 
               description: 'Find anything instantly with our advanced search that indexes all your notes in real-time.' 
          },
          { 
               icon: <Cloud size={36} className="text-indigo-600 dark:text-indigo-400" />, 
               title: 'Cloud Sync', 
               description: 'Access your notes from any device with our seamless cloud synchronization.' 
          },
          { 
               icon: <Tag size={36} className="text-indigo-600 dark:text-indigo-400" />, 
               title: 'Smart Organization', 
               description: 'Categorize and tag your notes for effortless organization and retrieval.' 
          },
          { 
               icon: <Folder size={36} className="text-indigo-600 dark:text-indigo-400" />, 
               title: 'Collections', 
               description: 'Group related notes into collections for projects, topics, or areas of interest.' 
          },
          { 
               icon: <Calendar size={36} className="text-indigo-600 dark:text-indigo-400" />, 
               title: 'Reminders', 
               description: 'Set reminders for important notes so you never miss a deadline or task.' 
          },
     ];

     return (
          <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
               <div className="container mx-auto px-4">
                    <motion.div
                         className="text-center mb-12"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                    >
                         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Powerful Features</h2>
                         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                              Designed to boost your productivity and help you organize your thoughts effortlessly
                         </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {features.map((feature, index) => (
                              <motion.div
                                   key={index}
                                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 hover:shadow-xl transition-shadow"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                              >
                                   <div className="bg-indigo-100 dark:bg-indigo-900/40 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        {feature.icon}
                                   </div>
                                   <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}