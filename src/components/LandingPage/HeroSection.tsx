/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Plus, Star, ChevronRight, Zap, Bookmark, Cloud } from 'react-feather';
import { useState, useEffect, useRef } from 'react';

interface Note {
     id: string;
     title: string;
     content: string;
     starred: boolean;
     category: string;
     date: string;
     color?: string;
}

interface HeroSectionProps {
     notes: Note[];
     onSignup: () => void;
     onLogin: () => void;
}

// Category colors mapping
const categoryColors: Record<string, string> = {
     Work: 'bg-blue-500',
     Personal: 'bg-purple-500',
     Ideas: 'bg-amber-500',
     Tasks: 'bg-emerald-500',
     Learning: 'bg-rose-500',
};

export default function HeroSection({ notes, onSignup, onLogin }: HeroSectionProps) {
     const [activeNoteIndex, setActiveNoteIndex] = useState(0);
     const containerRef = useRef<HTMLDivElement>(null);
     const mouseX = useMotionValue(0);
     const mouseY = useMotionValue(0);

     // Enhanced notes with colors
     const enhancedNotes = notes.map((note, index) => ({
          ...note,
          color: Object.values(categoryColors)[index % Object.keys(categoryColors).length]
     }));

     // Parallax effect for decorative elements
     const rotateX = useTransform(mouseY, [0, window.innerHeight], [-5, 5]);
     const rotateY = useTransform(mouseX, [0, window.innerWidth], [5, -5]);

     // Handle mouse move for parallax
     const handleMouseMove = (e: React.MouseEvent) => {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
     };

     // Auto-rotate notes
     useEffect(() => {
          const interval = setInterval(() => {
               setActiveNoteIndex(prev => (prev + 1) % enhancedNotes.slice(0, 3).length);
          }, 4000);
          return () => clearInterval(interval);
     }, [enhancedNotes.length]);

     return (
          <motion.section 
               className="relative py-16 md:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               onMouseMove={handleMouseMove}
          >
               {/* Floating decorative elements */}
               <motion.div 
                    className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-indigo-600/20 blur-3xl"
                    animate={{ 
                         x: [0, -40, 0, 30, 0],
                         y: [0, 20, -30, 10, 0],
                         scale: [1, 1.1, 0.95, 1.05, 1]
                    }}
                    transition={{ 
                         duration: 12, 
                         repeat: Infinity, 
                         ease: "easeInOut" 
                    }}
               />

               <motion.div 
                    className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-purple-600/30 blur-3xl"
                    animate={{ 
                         x: [0, 50, -30, 20, 0],
                         y: [0, -40, 30, -20, 0],
                         scale: [1, 0.9, 1.1, 0.95, 1]
                    }}
                    transition={{ 
                         duration: 15, 
                         repeat: Infinity, 
                         ease: "easeInOut" 
                    }}
               />

               {/* Floating icons */}
               <motion.div 
                    className="absolute top-1/3 right-1/4 text-purple-300/40"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
               >
                    <Zap size={48} />
               </motion.div>

               <motion.div 
                    className="absolute bottom-1/4 left-1/3 text-blue-300/40"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
               >
                    <Bookmark size={40} />
               </motion.div>

               <motion.div 
                    className="absolute top-1/4 right-1/3 text-amber-300/40"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
               >
                    <Cloud size={44} />
               </motion.div>

               {/* Main content */}
               <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                         <div className="md:w-1/2 mb-10 md:mb-0">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm font-medium"
                              >
                                   <span className="mr-2">✨</span> New Update Available
                              </motion.div>

                              <motion.h1
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.3 }}
                                   className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent"
                              >
                                   Organize Your Thoughts, <br className="hidden md:block" />
                                   <motion.span 
                                        className="inline-block"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                   >
                                        Effortlessly
                                   </motion.span>
                              </motion.h1>

                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.4 }}
                                   className="text-xl mb-8 max-w-lg text-indigo-100"
                              >
                                   The modern note-taking app that helps you capture ideas, organize thoughts, and boost productivity.
                              </motion.p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                   {['AI-Powered Organization', 'Cross-Device Sync', 'End-to-End Encryption', 'Collaboration Tools'].map((feature, i) => (
                                        <motion.div
                                             key={i}
                                             initial={{ opacity: 0, x: -20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                             className="flex items-center"
                                        >
                                             <div className="mr-3 w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center">
                                                  <div className="w-2 h-2 rounded-full bg-cyan-300" />
                                             </div>
                                             <span>{feature}</span>
                                        </motion.div>
                                   ))}
                              </div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.5 }}
                                   className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                              >
                                   <motion.button
                                        whileHover={{ 
                                             scale: 1.05,
                                             boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onSignup}
                                        className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                                   >
                                        <span className="relative z-10 flex items-center sm:text-center">
                                             Get Started
                                             <ChevronRight size={18} className="ml-2" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                   </motion.button>

                                   <motion.button
                                        whileHover={{
                                             scale: 1.05,
                                             backgroundColor: 'rgba(255,255,255,0.15)',
                                             boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onLogin}
                                        className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                                   >
                                        Login
                                   </motion.button>
                              </motion.div>
                         </div>

                         <motion.div
                              className="w-full md:w-1/2 relative"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                              style={{ rotateX, rotateY }}
                         >
                              <div className="relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10">
                                   <div className="flex justify-between items-center mb-6">
                                        <motion.h3 
                                             className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent"
                                             animate={{ opacity: [0.8, 1, 0.8] }}
                                             transition={{ duration: 3, repeat: Infinity }}
                                        >
                                             Recent Notes
                                        </motion.h3>
                                        <motion.button
                                             whileHover={{ 
                                                  scale: 1.1, 
                                                  rotate: 90,
                                                  backgroundColor: 'rgba(124, 58, 237, 0.3)'
                                             }}
                                             whileTap={{ scale: 0.9 }}
                                             className="bg-indigo-700/50 p-3 rounded-xl transition-all group"
                                        >
                                             <Plus className="text-cyan-300 group-hover:text-white" />
                                        </motion.button>
                                   </div>

                                   <div className="space-y-5 relative">
                                        <AnimatePresence mode="wait">
                                             {enhancedNotes.slice(0, 3).map((note, index) => (
                                                  <motion.div
                                                       key={note.id}
                                                       initial={{ opacity: 0, y: 20 }}
                                                       animate={{ 
                                                            opacity: index === activeNoteIndex ? 1 : 0.7,
                                                            y: 0,
                                                            scale: index === activeNoteIndex ? 1.03 : 1
                                                       }}
                                                       exit={{ opacity: 0 }}
                                                       transition={{ duration: 0.5 }}
                                                       whileHover={{
                                                            y: -5,
                                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                                       }}
                                                       whileTap={{ scale: 0.98 }}
                                                       className={`p-5 rounded-2xl backdrop-blur-sm cursor-pointer transition-all duration-300 ${index === activeNoteIndex ? 'bg-white/10' : 'bg-white/5'} border border-white/5`}
                                                       onClick={() => setActiveNoteIndex(index)}
                                                  >
                                                       <div className="flex justify-between items-start">
                                                            <div className="flex items-start">
                                                                 <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${note.color || 'bg-indigo-500'}`} />
                                                                 <h4 className="text-lg font-medium truncate max-w-[70%]">
                                                                      {note.title}
                                                                 </h4>
                                                            </div>
                                                            <motion.button
                                                                 whileHover={{ scale: 1.3 }}
                                                                 whileTap={{ scale: 0.7 }}
                                                                 className="focus:outline-none"
                                                            >
                                                                 <Star
                                                                      size={20}
                                                                      className={note.starred
                                                                           ? "text-amber-400 fill-amber-400"
                                                                           : "text-white/50 hover:text-amber-300 transition-colors"
                                                                      }
                                                                 />
                                                            </motion.button>
                                                       </div>
                                                       <p className="text-sm text-white/80 mt-2 line-clamp-2">
                                                            {note.content}
                                                       </p>
                                                       <div className="flex justify-between items-center mt-4">
                                                            <span className={`text-xs px-3 py-1 rounded-full ${categoryColors[note.category] || 'bg-indigo-500'} transition-colors`}>
                                                                 {note.category}
                                                            </span>
                                                            <span className="text-xs opacity-75">
                                                                 {note.date}
                                                            </span>
                                                       </div>
                                                  </motion.div>
                                             ))}
                                        </AnimatePresence>

                                        {/* Progress indicators */}
                                        <div className="flex justify-center mt-6 space-x-2">
                                             {enhancedNotes.slice(0, 3).map((_, index) => (
                                                  <motion.button
                                                       key={index}
                                                       className={`w-2 h-2 rounded-full ${index === activeNoteIndex ? 'bg-cyan-400' : 'bg-white/20'}`}
                                                       onClick={() => setActiveNoteIndex(index)}
                                                       whileHover={{ scale: 1.5 }}
                                                       whileTap={{ scale: 0.8 }}
                                                       animate={{ 
                                                            scale: index === activeNoteIndex ? 1.3 : 1,
                                                            backgroundColor: index === activeNoteIndex ? '#22d3ee' : 'rgba(255,255,255,0.2)'
                                                       }}
                                                       transition={{ duration: 0.2 }}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              </div>

                              {/* Decorative floating elements */}
                              <motion.div
                                   className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"
                                   animate={{
                                        scale: [1, 1.1, 1],
                                   }}
                                   transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                   }}
                              />

                              <motion.div
                                   className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"
                                   animate={{
                                        scale: [1, 1.15, 1],
                                   }}
                                   transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                   }}
                              />
                         </motion.div>
                    </div>
               </div>

               {/* Decorative bottom gradient */}
               <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-indigo-900/80 to-transparent pointer-events-none" />
          </motion.section>
     );
}