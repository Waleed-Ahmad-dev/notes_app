import { motion } from 'framer-motion';
import { Plus, Star } from 'react-feather';

interface Note {
     id: string;
     title: string;
     content: string;
     starred: boolean;
     category: string;
     date: string;
}

interface HeroSectionProps {
     notes: Note[];
     onSignup: () => void;
     onLogin: () => void;
}

export default function HeroSection({ notes, onSignup, onLogin }: HeroSectionProps) {
     function clamp(min: number, value: number, max: number): number {
          return Math.min(Math.max(value, min), max);
     }

     return (
          <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
               <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                         <div className="md:w-1/2 mb-10 md:mb-0">
                              <motion.h1
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   className="text-4xl md:text-5xl font-bold mb-4"
                              >
                                   Organize Your Thoughts, <br className="hidden md:block" />Effortlessly
                              </motion.h1>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="text-xl mb-8 max-w-lg"
                              >
                                   The modern note-taking app that helps you capture ideas, organize thoughts, and boost productivity.
                              </motion.p>
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.4 }}
                                   className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                              >
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onSignup}
                                        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:shadow-md"
                                   >
                                        Get Started
                                   </motion.button>
                                   <motion.button
                                        whileHover={{
                                             scale: 1.05,
                                             backgroundColor: 'rgba(255,255,255,0.15)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onLogin}
                                        className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all shadow-lg hover:shadow-xl active:shadow-md"
                                   >
                                        Login
                                   </motion.button>
                              </motion.div>
                         </div>

                         <motion.div
                              className="w-[95vw] max-w-full mx-auto md:w-1/2 relative"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                         >
                              <div className="bg-white/10 backdrop-blur rounded-lg md:rounded-2xl p-2 sm:p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                                   <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold">Recent Notes</h3>
                                        <motion.button
                                             whileHover={{ scale: 1.1, rotate: 90, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                             whileTap={{ scale: 0.9 }}
                                             className="bg-white/20 p-1 sm:p-1.5 md:p-2 rounded-md md:rounded-lg transition-all"
                                        >
                                             <Plus size={clamp(12, 14, 16)} />
                                        </motion.button>
                                   </div>

                                   <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                        {notes.slice(0, 3).map(note => (
                                             <motion.div
                                                  key={note.id}
                                                  whileHover={{
                                                       y: -5,
                                                       backgroundColor: 'rgba(255,255,255,0.15)'
                                                  }}
                                                  whileTap={{ scale: 0.98 }}
                                                  className="bg-white/10 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur cursor-pointer transition-all hover:shadow-lg"
                                             >
                                                  <div className="flex justify-between">
                                                       <h4 className="text-xs sm:text-sm md:text-base font-medium truncate max-w-[70%]">
                                                            {note.title}
                                                       </h4>
                                                       <motion.button
                                                            whileHover={{ scale: 1.3 }}
                                                            whileTap={{ scale: 0.7 }}
                                                            className="focus:outline-none"
                                                       >
                                                            <Star
                                                                 size={clamp(12, 14, 16)}
                                                                 className={note.starred
                                                                      ? "text-yellow-400 fill-yellow-400"
                                                                      : "text-white hover:text-yellow-300 transition-colors"
                                                                 }
                                                            />
                                                       </motion.button>
                                                  </div>
                                                  <p className="text-[10px] xs:text-xs sm:text-sm text-white/80 mt-1 truncate">
                                                       {note.content}
                                                  </p>
                                                  <div className="flex flex-wrap gap-y-1 justify-between items-center mt-1 sm:mt-2 md:mt-3">
                                                       <span className="text-[9px] xs:text-xs bg-indigo-500 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded transition-colors hover:bg-indigo-400">
                                                            {note.category}
                                                       </span>
                                                       <span className="text-[9px] xs:text-xs opacity-75">
                                                            {note.date}
                                                       </span>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>

                              <motion.div
                                   className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 md:-top-4 md:-right-4 md:w-24 md:h-24 bg-yellow-400 rounded-full opacity-20 blur-sm sm:blur md:blur-2xl"
                                   animate={{
                                        scale: [1, 1.1, 1],
                                   }}
                                   transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                   }}
                              ></motion.div>
                              <motion.div
                                   className="absolute -bottom-2 -left-2 w-16 h-16 sm:w-20 sm:h-20 md:-bottom-4 md:-left-4 md:w-32 md:h-32 bg-purple-400 rounded-full opacity-20 blur-sm sm:blur md:blur-2xl"
                                   animate={{
                                        scale: [1, 1.15, 1],
                                   }}
                                   transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                   }}
                              ></motion.div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}