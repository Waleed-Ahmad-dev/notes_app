/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useAnimation, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function HowItWorksSection() {
     const steps = [
          { step: 1, title: 'Sign Up', description: 'Create your free account in seconds', icon: '📝' },
          { step: 2, title: 'Create Notes', description: 'Start capturing your ideas and thoughts', icon: '✍️' },
          { step: 3, title: 'Organize', description: 'Categorize and tag your notes for easy access', icon: '🗂️' },
          { step: 4, title: 'Access Anywhere', description: 'Use on all your devices seamlessly', icon: '📱' },
     ];

     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
     const controls = useAnimation();
     const containerRef = useRef<HTMLDivElement>(null);
     const [windowSize, setWindowSize] = useState({
          width: typeof window !== 'undefined' ? window.innerWidth : 0,
          height: typeof window !== 'undefined' ? window.innerHeight : 0,
     });

     useEffect(() => {
          const handleResize = () => {
               setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
               });
          };

          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
     }, []);

     // Floating animation for step numbers
     useEffect(() => {
          controls.start({
                    y: [0, -15, 0],
                    transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
               },
          });
     }, [controls]);

     // Particle background
     const particles = Array.from({ length: 30 }, (_, i) => ({
          id: i,
          size: Math.random() * 6 + 2,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
     }));

     return (
          <section 
               id="how-it-works" 
               className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20 transition-colors duration-300"
               ref={containerRef}
          >
               {/* Floating particles */}
               <div className="absolute inset-0 z-0 overflow-hidden">
                    {particles.map((particle) => (
                         <motion.div
                              key={particle.id}
                              className="absolute rounded-full bg-indigo-200 dark:bg-indigo-800/50"
                              style={{
                                   width: particle.size,
                                   height: particle.size,
                                   left: `${particle.x}%`,
                                   top: `${particle.y}%`,
                              }}
                              animate={{
                                   y: [0, 10, 0],
                                   x: [0, particle.size * 2, 0],
                              }}
                              transition={{
                                   duration: 4 + Math.random() * 4,
                                   repeat: Infinity,
                                   delay: particle.delay,
                                   ease: "easeInOut",
                              }}
                         />
                    ))}
               </div>

               <div className="relative z-10 container mx-auto px-4">
                    <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                    >
                         <motion.div
                              initial={{ scale: 0.9 }}
                              whileInView={{ scale: 1 }}
                              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                              className="inline-block mb-4"
                         >
                              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 relative transition-colors duration-300">
                                   How It Works
                                   <motion.div
                                        className="absolute bottom-0 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                   />
                              </h2>
                         </motion.div>
                         <motion.p 
                              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.6 }}
                         >
                              Get started in minutes and transform how you capture and organize information
                         </motion.p>
                    </motion.div>

                    <div className="relative">
                         {/* Animated connector lines */}
                         <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5">
                              <motion.div 
                                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                   initial={{ width: 0 }}
                                   whileInView={{ width: "100%" }}
                                   transition={{ duration: 1.5, delay: 0.2 }}
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                              {steps.map((step, index) => (
                                   <motion.div
                                        key={index}
                                        className="relative"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                                        whileHover={{ y: -15 }}
                                        onHoverStart={() => setHoveredIndex(index)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                   >
                                        {/* Floating card with glass effect */}
                                        <motion.div
                                             className="relative h-full bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 border border-white/30 dark:border-gray-700/50 shadow-xl overflow-hidden transition-all duration-300"
                                             whileHover={{
                                                  boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
                                                  borderColor: "rgba(99, 102, 241, 0.4)"
                                             }}
                                             transition={{ duration: 0.3 }}
                                        >
                                             {/* Animated gradient border */}
                                             <motion.div
                                                  className="absolute inset-0 rounded-3xl opacity-0"
                                                  animate={{ 
                                                       opacity: hoveredIndex === index ? 0.5 : 0,
                                                       scale: hoveredIndex === index ? 1.02 : 1
                                                  }}
                                                  style={{
                                                       background: "conic-gradient(from 180deg at 50% 50%, #4F46E5, #7C3AED, #9333EA, #4F46E5)"
                                                  }}
                                             />

                                             {/* Shimmer effect */}
                                             <motion.div
                                                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                                  initial={{ width: 0 }}
                                                  whileInView={{ width: "100%" }}
                                                  transition={{ delay: 0.3, duration: 0.8 }}
                                             />

                                             <div className="relative flex flex-col items-center pt-4">
                                                  {/* Floating step number */}
                                                  <motion.div
                                                       className="relative w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                                                       animate={controls}
                                                       whileHover={{ scale: 1.1, rotate: 5 }}
                                                  >
                                                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20" />
                                                       <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 dark:border-indigo-400/20" />
                                                       <motion.span
                                                            className="text-4xl font-bold text-indigo-600 dark:text-indigo-300 z-10 transition-colors duration-300"
                                                            animate={{ 
                                                                 scale: hoveredIndex === index ? 1.15 : 1,
                                                                 textShadow: hoveredIndex === index ? "0 0 15px rgba(99, 102, 241, 0.5)" : "none"
                                                            }}
                                                       >
                                                            {step.icon}
                                                       </motion.span>
                                                  </motion.div>

                                                  <motion.h3
                                                       className="text-2xl font-bold mb-4 text-gray-800 dark:text-white transition-colors duration-300"
                                                       animate={{ 
                                                            color: hoveredIndex === index ? "#4f46e5" : "",
                                                            scale: hoveredIndex === index ? 1.05 : 1
                                                       }}
                                                  >
                                                       {step.title}
                                                  </motion.h3>

                                                  <p className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">
                                                       {step.description}
                                                  </p>
                                             </div>

                                             {/* Step connector dots */}
                                             {index < steps.length - 1 && (
                                                  <div className="hidden lg:block absolute top-1/3 -right-12">
                                                       {[...Array(5)].map((_, i) => (
                                                            <motion.div
                                                                 key={i}
                                                                 className="absolute w-2 h-2 rounded-full bg-indigo-500"
                                                                 style={{ left: `${i * 6}px` }}
                                                                 animate={{ 
                                                                      opacity: [0.2, 1, 0.2],
                                                                      scale: [0.8, 1.2, 0.8]
                                                                 }}
                                                                 transition={{
                                                                      duration: 1.5,
                                                                      repeat: Infinity,
                                                                      delay: i * 0.1,
                                                                      ease: "easeInOut"
                                                                 }}
                                                            />
                                                       ))}
                                                  </div>
                                             )}

                                             {/* Hover effect gradient */}
                                             <motion.div
                                                  className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-3xl opacity-0"
                                                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                             />
                                        </motion.div>

                                        {/* Floating decoration */}
                                        <motion.div
                                             className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-500 z-10"
                                             animate={{ 
                                                  scale: [1, 1.2, 1],
                                                  opacity: [0.7, 1, 0.7]
                                             }}
                                             transition={{
                                                  duration: 3,
                                                  repeat: Infinity,
                                                  ease: "easeInOut"
                                             }}
                                        />
                                   </motion.div>
                              ))}
                         </div>
                    </div>

                    <motion.div
                         className="mt-16 text-center"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.8 }}
                         viewport={{ once: true }}
                    >
                         <motion.button 
                              className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg group overflow-hidden"
                              whileHover={{ 
                                   scale: 1.05,
                                   boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)"
                              }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <span className="relative z-10">Get Started</span>
                              <motion.div 
                                   className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                                   animate={{ 
                                        x: ["-100%", "100%"],
                                   }}
                                   transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                   }}
                              />
                         </motion.button>

                         <motion.p 
                              className="mt-4 text-gray-500 dark:text-gray-400 transition-colors duration-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                         >
                              Join thousands of satisfied users today
                         </motion.p>
                    </motion.div>
               </div>

               {/* Decorative floating shapes */}
               <motion.div 
                    className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
                    animate={{ 
                         scale: [1, 1.2, 1],
                         opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                         duration: 8,
                         repeat: Infinity,
                         ease: "easeInOut"
                    }}
               />

               <motion.div 
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
                    animate={{ 
                         scale: [1, 1.1, 1],
                         opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                         duration: 6,
                         repeat: Infinity,
                         ease: "easeInOut",
                         delay: 1
                    }}
               />
          </section>
     );
}