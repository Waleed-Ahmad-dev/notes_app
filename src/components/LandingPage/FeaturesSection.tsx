import { motion, easeInOut } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Edit, Search, Cloud, Tag, Folder, Calendar } from 'react-feather';

export default function FeaturesSection() {
     const [isHovered, setIsHovered] = useState<number | null>(null);
     const [isMounted, setIsMounted] = useState(false);
     
     useEffect(() => {
          setIsMounted(true);
     }, []);

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

     const floatingVariants = {
          float: {
               y: [0, -15, 0],
                    transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: easeInOut
               }
          }
     };

     return (
          <section id="features" className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 overflow-hidden">
               {/* Decorative background elements */}
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 dark:opacity-20">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-50 animate-pulse-slow"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-40 animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-40 animate-pulse-slow animation-delay-4000"></div>
               </div>

               {/* Floating particles */}
               {isMounted && Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                         key={i}
                         className="absolute rounded-full bg-indigo-500 dark:bg-indigo-400 opacity-20"
                         style={{
                              width: `${Math.random() * 10 + 5}px`,
                              height: `${Math.random() * 10 + 5}px`,
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                         }}
                         initial={{ y: 0 }}
                         animate={{
                              y: [0, -30, 0],
                              x: [0, Math.random() * 40 - 20, 0],
                         }}
                         transition={{
                              duration: Math.random() * 10 + 10,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2
                         }}
                    />
               ))}

               <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                         <motion.h2
                              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                         >
                              Powerful Features
                         </motion.h2>
                         <motion.p
                              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
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
                                   className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700/50 p-7 shadow-lg dark:shadow-gray-900/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                                   onHoverStart={() => setIsHovered(index)}
                                   onHoverEnd={() => setIsHovered(null)}
                              >
                                   {/* Animated highlight on hover */}
                                   <motion.div 
                                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-white/80 dark:from-indigo-900/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={isHovered === index ? { scale: 1.1 } : { scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                   />

                                   {/* Floating icon container */}
                                   <motion.div
                                        className="bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-900/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                                        variants={floatingVariants}
                                        animate="float"
                                        whileHover={{ 
                                             rotate: 5,
                                             scale: 1.15,
                                             transition: { duration: 0.3 }
                                        }}
                                   >
                                        {feature.icon}
                                   </motion.div>

                                   <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                                        {feature.title}
                                   </h3>

                                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                        {feature.description}
                                   </p>

                                   {/* Animated connection line on hover */}
                                   {isHovered === index && (
                                        <motion.div 
                                             className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                                             initial={{ width: 0 }}
                                             animate={{ width: "100%" }}
                                             transition={{ duration: 0.5 }}
                                        />
                                   )}
                              </motion.div>
                         ))}
                    </div>

                    {/* Interactive preview area */}
                    <motion.div 
                         className="mt-16 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-lg p-8"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.6, duration: 0.5 }}
                    >
                         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                              <div className="flex-1">
                                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Experience the Difference</h3>
                                   <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                                        Our intuitive interface adapts to your workflow, providing a seamless experience across all devices.
                                   </p>
                                   <motion.button
                                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
                                        whileHover={{ 
                                             background: ["linear-gradient(to right, #4f46e5, #7c3aed)", "linear-gradient(to right, #7c3aed, #4f46e5)"],
                                             transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                                        }}
                                   >
                                        Get Started Today
                                   </motion.button>
                              </div>

                              <div className="flex-1 flex justify-center">
                                   <motion.div 
                                        className="relative"
                                        animate={{ 
                                             y: [0, -10, 0],
                                        }}
                                        transition={{
                                             duration: 4,
                                             repeat: Infinity,
                                             ease: "easeInOut"
                                        }}
                                   >
                                        <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-64 h-40 flex items-center justify-center">
                                             <span className="text-gray-500 dark:text-gray-400">Interactive Preview</span>
                                        </div>

                                        {/* Floating devices around the preview */}
                                        <motion.div 
                                             className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900/30 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg"
                                             animate={{ 
                                                  rotate: [0, -5, 0, 5, 0],
                                             }}
                                             transition={{
                                                  duration: 6,
                                                  repeat: Infinity,
                                                  ease: "easeInOut"
                                             }}
                                        >
                                             <div className="bg-gray-300 border-2 border-dashed rounded w-8 h-8" />
                                        </motion.div>

                                        <motion.div 
                                             className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900/30 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg"
                                             animate={{ 
                                                  rotate: [0, 5, 0, -5, 0],
                                             }}
                                             transition={{
                                                  duration: 6,
                                                  repeat: Infinity,
                                                  ease: "easeInOut",
                                                  delay: 1
                                             }}
                                        >
                                             <div className="bg-gray-300 border-2 border-dashed rounded w-8 h-8" />
                                        </motion.div>
                                   </motion.div>
                              </div>
                         </div>
                    </motion.div>
               </div>
          </section>
     );
}