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
}

export default function HeroSection({ notes }: HeroSectionProps) {
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
                                   <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                        Get Started
                                   </button>
                                   <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                                        Watch Demo
                                   </button>
                              </motion.div>
                         </div>
          
                         <motion.div 
                              className="md:w-1/2 relative"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                         >
                              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-md mx-auto shadow-xl">
                                   <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-lg">Recent Notes</h3>
                                        <button className="bg-white/20 p-2 rounded-lg">
                                             <Plus size={16} />
                                        </button>
                                   </div>

                                   <div className="space-y-4">
                                        {notes.slice(0, 3).map(note => (
                                             <div key={note.id} className="bg-white/10 p-4 rounded-xl backdrop-blur">
                                                  <div className="flex justify-between">
                                                       <h4 className="font-medium">{note.title}</h4>
                                                       <Star 
                                                            size={16} 
                                                            className={note.starred ? "text-yellow-400 fill-yellow-400" : "text-white"} 
                                                       />
                                                  </div>
                                                  <p className="text-sm text-white/80 mt-1 truncate">{note.content}</p>
                                                  <div className="flex justify-between items-center mt-3">
                                                       <span className="text-xs bg-indigo-500 px-2 py-1 rounded">{note.category}</span>
                                                       <span className="text-xs opacity-75">{note.date}</span>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}