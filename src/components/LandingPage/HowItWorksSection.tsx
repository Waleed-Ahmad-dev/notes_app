import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HowItWorksSection() {
     const steps = [
          { step: 1, title: 'Sign Up', description: 'Create your free account in seconds' },
          { step: 2, title: 'Create Notes', description: 'Start capturing your ideas and thoughts' },
          { step: 3, title: 'Organize', description: 'Categorize and tag your notes for easy access' },
          { step: 4, title: 'Access Anywhere', description: 'Use on all your devices seamlessly' },
     ];

     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

     return (
          <section id="how-it-works" className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20 transition-colors duration-300">
               <div className="container mx-auto px-4">
                    <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                    >
                         <motion.div
                              initial={{ scale: 0.9 }}
                              whileInView={{ scale: 1 }}
                              transition={{ type: "spring", bounce: 0.5 }}
                              className="inline-block mb-4"
                         >
                              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 relative transition-colors duration-300">
                                   How It Works
                                   <motion.div
                                        className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-indigo-500 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                   />
                              </h2>
                         </motion.div>
                         <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                              Get started in minutes and transform how you capture and organize information
                         </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {steps.map((step, index) => (
                              <motion.div
                                   key={index}
                                   className="relative"
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true, margin: "-50px" }}
                                   transition={{ delay: index * 0.15, duration: 0.5 }}
                                   whileHover={{ y: -10 }}
                                   onHoverStart={() => setHoveredIndex(index)}
                                   onHoverEnd={() => setHoveredIndex(null)}
                              >
                                   <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-2xl shadow-lg" />

                                   <motion.div
                                        className="relative h-full bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300"
                                        whileHover={{
                                             boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.3)",
                                             borderColor: "rgba(99, 102, 241, 0.5)"
                                        }}
                                        transition={{ duration: 0.3 }}
                                   >
                                        <motion.div
                                             className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                                             initial={{ width: 0 }}
                                             whileInView={{ width: "100%" }}
                                             transition={{ delay: 0.2, duration: 0.8 }}
                                        />

                                        <div className="flex flex-col items-center pt-2">
                                             <motion.div
                                                  className="relative w-20 h-20 rounded-full mb-6 flex items-center justify-center"
                                                  animate={{
                                                       background: hoveredIndex === index
                                                       ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                                                       : "linear-gradient(135deg, #e0e7ff, #ede9fe)"
                                                  }}
                                                  transition={{ duration: 0.3 }}
                                             >
                                                  <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-800" />
                                                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30" />
                                                  <motion.div
                                                       className="absolute inset-0 rounded-full border-2 border-transparent"
                                                       animate={{
                                                            borderColor: hoveredIndex === index ? "rgba(99, 102, 241, 0.4)" : "rgba(165, 180, 252, 0.2)",
                                                            scale: hoveredIndex === index ? 1.1 : 1
                                                       }}
                                                       transition={{ duration: 0.3 }}
                                                  />
                                                  <motion.span
                                                       className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 z-10 transition-colors duration-300"
                                                       animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
                                                       transition={{ type: "spring", stiffness: 400 }}
                                                  >
                                                       {step.step}
                                                  </motion.span>
                                             </motion.div>
                                             <motion.h3
                                                  className="text-xl font-bold mb-3 text-gray-800 dark:text-white transition-colors duration-300"
                                                  animate={{ color: hoveredIndex === index ? "#4f46e5" : "" }}
                                             >
                                                  {step.title}
                                             </motion.h3>
                                             <p className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">
                                                  {step.description}
                                             </p>
                                        </div>
                                        <motion.div
                                             className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl opacity-0"
                                             animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                        />
                                   </motion.div>
                              </motion.div>
                         ))}
                    </div>
                    <motion.div
                         className="mt-16 text-center"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.5 }}
                    >
                         <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95">
                              Get Started
                         </button>
                         <p className="mt-4 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                              Join thousands of satisfied users today
                         </p>
                    </motion.div>
               </div>
          </section>
     );
}