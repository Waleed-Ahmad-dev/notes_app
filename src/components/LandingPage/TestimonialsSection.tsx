import { motion } from 'framer-motion';
import { Star } from 'react-feather';

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
          <section id="testimonials" className="py-16 bg-indigo-50 dark:bg-gray-800">
               <div className="container mx-auto px-4">
                    <motion.div
                         className="text-center mb-12"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                    >
                         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What Our Users Say</h2>
                         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                              Join thousands of satisfied users who transformed their productivity with NotionNotes
                         </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {testimonials.map((testimonial, index) => (
                              <motion.div
                                   key={index}
                                   className="bg-white dark:bg-gray-700 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                              >
                                   <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                             <Star 
                                                  key={i} 
                                                  size={18} 
                                                  className="text-yellow-400 fill-yellow-400 mr-1" 
                                             />
                                        ))}
                                   </div>
                                   <p className="text-gray-600 dark:text-gray-300 italic mb-4">{testimonial.quote}</p>
                                   <div className="flex items-center">
                                        <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-xl w-16 h-16" />
                                        <div className="ml-4">
                                             <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                                             <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}