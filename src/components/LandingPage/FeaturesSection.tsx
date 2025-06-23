import { motion } from 'framer-motion';
import { Edit, Search, Cloud, Tag, Folder, Calendar } from 'react-feather';

export default function FeaturesSection() {
     const features = [
          { 
               icon: <Edit size={36} className="text-indigo-600 dark:text-indigo-300" />, 
               title: 'Easy Note-Taking', 
               description: 'Create and edit notes with a beautiful, distraction-free interface that focuses on your content.' 
          },
          { 
               icon: <Search size={36} className="text-indigo-600 dark:text-indigo-300" />, 
               title: 'Powerful Search', 
               description: 'Find anything instantly with our advanced search that indexes all your notes in real-time.' 
          },
          { 
               icon: <Cloud size={36} className="text-indigo-600 dark:text-indigo-300" />, 
               title: 'Cloud Sync', 
               description: 'Access your notes from any device with our seamless cloud synchronization.' 
          },
          { 
               icon: <Tag size={36} className="text-indigo-600 dark:text-indigo-300" />, 
               title: 'Smart Organization', 
               description: 'Categorize and tag your notes for effortless organization and retrieval.' 
          },
          { 
               icon: <Folder size={36} className="text-indigo-600 dark:text-indigo-300" />, 
               title: 'Collections', 
               description: 'Group related notes into collections for projects, topics, or areas of interest.' 
          },
          { 
               icon: <Calendar size={36} className="text-indigo-600 dark:text-indigo-300" />, 
               title: 'Reminders', 
               description: 'Set reminders for important notes so you never miss a deadline or task.' 
          },
     ];

     return (
          <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
               <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                         <motion.h2 
                              className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                         >
                              Powerful Features
                         </motion.h2>
                         <motion.p 
                              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                         >
                              Designed to boost your productivity and help you organize your thoughts effortlessly
                         </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {features.map((feature, index) => (
                              <motion.div
                                   key={index}
                                   className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-7 shadow-lg dark:shadow-gray-900/30 hover:shadow-xl transition-all duration-300"
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ 
                                        delay: index * 0.1,
                                        duration: 0.5, 
                                        ease: "easeOut"
                                   }}
                                   whileHover={{ 
                                        y: -10,
                                        transition: { duration: 0.2 }
                                   }}
                                   whileTap={{ 
                                        scale: 0.98,
                                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)"
                                   }}
                              >
                                   {/* Gradient highlight on hover */}
                                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                   
                                   <motion.div 
                                        className="bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-900/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 5 }}
                                   >
                                        {feature.icon}
                                   </motion.div>
                                   <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}