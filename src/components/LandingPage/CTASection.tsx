import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CTASection() {
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          setIsVisible(true);
     }, []);

     return (
          <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white">
               {/* Floating particles background */}
               <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                         <motion.div
                              key={i}
                              className="absolute rounded-full"
                              style={{
                                   background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(129, 140, 248, 0.15)' : i % 3 === 1 ? 'rgba(192, 132, 252, 0.15)' : 'rgba(139, 92, 246, 0.15)'})`,
                                   width: `${Math.random() * 30 + 10}px`,
                                   height: `${Math.random() * 30 + 10}px`,
                                   top: `${Math.random() * 100}%`,
                                   left: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                   y: [0, -20, 0],
                                   x: [0, Math.random() * 40 - 20, 0],
                                   scale: [1, 1.2, 1],
                              }}
                              transition={{
                                   duration: 5 + Math.random() * 10,
                                   repeat: Infinity,
                                   ease: "easeInOut",
                              }}
                         />
                    ))}
               </div>

               {/* Geometric shapes */}
               <motion.div 
                    className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-purple-800/20 blur-3xl"
                    animate={{ 
                         scale: [1, 1.2, 1],
                         rotate: [0, 15, 0]
                    }}
                    transition={{
                         duration: 12,
                         repeat: Infinity,
                         ease: "easeInOut"
                    }}
               />

               <motion.div 
                    className="absolute bottom-1/3 -left-16 w-48 h-48 rounded-full bg-indigo-800/20 blur-3xl"
                    animate={{ 
                         scale: [1, 1.3, 1],
                         rotate: [0, -20, 0]
                    }}
                    transition={{
                         duration: 10,
                         repeat: Infinity,
                         ease: "easeInOut"
                    }}
               />

               {/* Main content container */}
               <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={isVisible ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6 }}
                              className="mb-10"
                         >
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-800/30 backdrop-blur-sm rounded-full border border-indigo-600/50 mb-6">
                                   <motion.div 
                                        className="w-2 h-2 rounded-full bg-emerald-400"
                                        animate={{ 
                                             scale: [1, 1.3, 1],
                                             opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{ 
                                             duration: 1.5, 
                                             repeat: Infinity 
                                        }}
                                   />
                                   <span className="text-sm font-medium text-indigo-200">Over 10,000 active users</span>
                              </div>

                              <motion.h2
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                   transition={{ duration: 0.6, delay: 0.1 }}
                                   className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                              >
                                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
                                        Transform Your Productivity
                                   </span>
                              </motion.h2>

                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-indigo-100"
                              >
                                   Join thousands of professionals who are already organizing their workflow with NotionNotes. 
                                   Experience the future of productivity.
                              </motion.p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={isVisible ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="flex flex-col sm:flex-row justify-center gap-4"
                         >
                              <motion.button
                                   whileHover={{
                                        scale: 1.05,
                                        background: "linear-gradient(135deg, #a5b4fc, #818cf8, #6366f1)",
                                        boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                                   }}
                                   whileTap={{ 
                                        scale: 0.97,
                                        boxShadow: "0 5px 15px -5px rgba(99, 102, 241, 0.3)"
                                   }}
                                   transition={{ 
                                        duration: 0.3, 
                                        ease: "easeOut",
                                        background: { duration: 0.5 }
                                   }}
                                   className="relative bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg group overflow-hidden"
                              >
                                   <span className="relative z-10 flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                        </svg>
                                        Get Started for Free
                                   </span>
                                   <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                   />
                              </motion.button>

                              <motion.button
                                   whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.15)"
                                   }}
                                   whileTap={{ 
                                        scale: 0.97,
                                        boxShadow: "0 5px 15px -5px rgba(255, 255, 255, 0.1)"
                                   }}
                                   transition={{ duration: 0.3, ease: "easeOut" }}
                                   className="relative bg-indigo-900/60 backdrop-blur-sm border-2 border-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-indigo-900/80 transition-all duration-300 group"
                              >
                                   <span className="relative z-10 flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                                        </svg>
                                        Schedule a Demo
                                   </span>
                                   <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </motion.button>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={isVisible ? { opacity: 1 } : {}}
                              transition={{ delay: 0.8, duration: 0.8 }}
                              className="mt-16"
                         >
                              <div className="flex flex-col items-center">
                                   <div className="relative mb-6">
                                        <div className="flex -space-x-4">
                                             {[...Array(5)].map((_, i) => (
                                                  <motion.div
                                                       key={i}
                                                       className="relative w-12 h-12 rounded-full border-2 border-indigo-900 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg"
                                                       initial={{ y: 20, opacity: 0 }}
                                                       animate={isVisible ? { y: 0, opacity: 1 } : {}}
                                                       transition={{ 
                                                            delay: 0.4 + (i * 0.1),
                                                            duration: 0.5 
                                                       }}
                                                  >
                                                       <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-indigo-900 flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                       </div>
                                                  </motion.div>
                                             ))}
                                        </div>

                                        <motion.div 
                                             className="absolute -top-4 -right-6"
                                             animate={{ 
                                                  rotate: [0, 5, -5, 0],
                                             }}
                                             transition={{ 
                                                  duration: 2, 
                                                  repeat: Infinity,
                                                  ease: "easeInOut"
                                             }}
                                        >
                                             <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-xs font-bold shadow-lg">
                                                  +24 today
                                             </div>
                                        </motion.div>
                                   </div>

                                   <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.9, duration: 0.5 }}
                                        className="text-lg text-indigo-200 max-w-md"
                                   >
                                        Join our community of <span className="font-bold text-white">10,000+</span> professionals transforming their workflow
                                   </motion.div>
                              </div>
                         </motion.div>
                    </div>
               </div>

               {/* Floating cards animation */}
               <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
                    {[...Array(3)].map((_, i) => (
                         <motion.div
                              key={i}
                              className="w-24 h-32 rounded-xl bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm border border-indigo-700/50 shadow-lg"
                              animate={{ 
                                   y: [0, -20, 0],
                                   rotate: i % 2 === 0 ? [0, -3, 0] : [0, 3, 0]
                              }}
                              transition={{ 
                                   duration: 4 + i, 
                                   repeat: Infinity,
                                   delay: i * 0.5
                              }}
                         />
                    ))}
               </div>
          </section>
     );
}