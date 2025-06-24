import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Star, User } from 'react-feather';

export default function TestimonialsSection() {
     const testimonials = [
          {
               quote: "NotionNotes has completely transformed how I organize my daily tasks. It's intuitive, powerful, and beautiful to use!",
               author: "Jane Doe",
               role: "Product Manager"
          },
          {
               quote: "I love the cloud sync feature. I can access my notes from my laptop, tablet, or phone seamlessly. A game-changer!",
               author: "John Smith",
               role: "Software Engineer"
          },
          {
               quote: "The tagging system makes finding old notes effortless. I've finally stopped losing important ideas and meeting notes.",
               author: "Sarah Johnson",
               role: "Marketing Director"
          },
          {
               quote: "As a writer, NotionNotes has become my digital notebook. The clean interface helps me focus on my thoughts without distractions.",
               author: "Michael Chen",
               role: "Author"
          }
     ];

     return (
          <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
               <div className="container mx-auto px-4">
                    <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                    >
                         <motion.div
                              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-gray-700 mb-6 transition-colors duration-300"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1, rotate: 15 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, type: "spring" }}
                         >
                              <Quote className="text-indigo-600 dark:text-indigo-400" size={24} />
                         </motion.div>
                         <h2 className="text-4xl font-bold dark:text-white mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent transition-colors duration-300">
                              What Our Users Say
                         </h2>
                         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                              Join thousands of satisfied users who transformed their productivity with NotionNotes
                         </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         {testimonials.map((testimonial, index) => (
                              <motion.div
                                   key={index}
                                   className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 group"
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1, duration: 0.5 }}
                                   whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                   }}
                                   whileTap={{ scale: 0.98 }}
                              >
                                   <div className="absolute top-6 left-8 text-indigo-100 dark:text-indigo-900/50 group-hover:text-indigo-200 dark:group-hover:text-indigo-800/70 transition-colors duration-300">
                                        <Quote size={48} />
                                   </div>

                                   <div className="flex mb-5">
                                        {[...Array(5)].map((_, i) => (
                                             <motion.div
                                                  key={i}
                                                  whileHover={{
                                                       scale: 1.2,
                                                       rotate: 15,
                                                       transition: { duration: 0.2 }
                                                  }}
                                             >
                                                  <Star
                                                       size={20}
                                                       className="text-amber-400 fill-amber-400 mr-1"
                                                  />
                                             </motion.div>
                                        ))}
                                   </div>
                                   <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 pl-8 relative z-10 transition-colors duration-300">
                                        {testimonial.quote}
                                   </p>

                                   <div className="flex items-center border-t border-gray-100 dark:border-gray-700 pt-6 transition-colors duration-300">
                                        <div className="relative">
                                             <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-0.5 rounded-full">
                                                  <div className="bg-white dark:bg-gray-800 rounded-full p-1">
                                                       <div className="bg-gray-200 dark:bg-gray-700 w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300">
                                                            <User className="text-gray-500 dark:text-gray-400" size={20} />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="ml-4">
                                             <h4 className="font-bold text-lg dark:text-white transition-colors duration-300">{testimonial.author}</h4>
                                             <p className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300">{testimonial.role}</p>
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}