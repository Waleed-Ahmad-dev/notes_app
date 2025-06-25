import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Quote, Star, User } from "lucide-react";

export default function TestimonialsSection() {
     const testimonials = [
          {
               quote:
               "NotionNotes has completely transformed how I organize my daily tasks. It's intuitive, powerful, and beautiful to use!",
               author: "Jane Doe",
               role: "Product Manager",
               color: "from-rose-500 to-amber-500",
          },
          {
               quote:
               "I love the cloud sync feature. I can access my notes from my laptop, tablet, or phone seamlessly. A game-changer!",
               author: "John Smith",
               role: "Software Engineer",
               color: "from-sky-500 to-indigo-500",
          },
          {
               quote:
               "The tagging system makes finding old notes effortless. I've finally stopped losing important ideas and meeting notes.",
               author: "Sarah Johnson",
               role: "Marketing Director",
               color: "from-emerald-500 to-teal-500",
          },
          {
               quote:
               "As a writer, NotionNotes has become my digital notebook. The clean interface helps me focus on my thoughts without distractions.",
               author: "Michael Chen",
               role: "Author",
               color: "from-violet-500 to-purple-500",
          },
     ];

     const controls = useAnimation();

     useEffect(() => {
          const sequence = async () => {
               await controls.start({
                    y: [-5, 5, -5],
                    transition: {
                         duration: 4,
                         repeat: Infinity,
                         ease: "easeInOut",
                    },
               });
     };
     sequence();
     }, [controls]);

     return (
          <section
               id="testimonials"
               className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
          >
               {/* Decorative background elements */}
               <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                         <motion.div
                              key={i}
                              className="absolute rounded-full opacity-10 dark:opacity-5"
                              style={{
                                   top: `${Math.random() * 100}%`,
                                   left: `${Math.random() * 100}%`,
                                   width: `${Math.random() * 200 + 50}px`,
                                   height: `${Math.random() * 200 + 50}px`,
                                   background: `linear-gradient(45deg, ${
                                        ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"][
                                        Math.floor(Math.random() * 4)
                                        ]
                                   }, ${
                                        ["#8b5cf6", "#ec4899", "#f59e0b", "#6366f1"][
                                        Math.floor(Math.random() * 4)
                                        ]
                                   })`,
                              }}
                              animate={{
                                   y: [0, Math.random() * 40 - 20],
                                   x: [0, Math.random() * 40 - 20],
                                   rotate: [0, 360],
                                   scale: [1, 1.2, 1],
                              }}
                              transition={{
                                   duration: Math.random() * 20 + 10,
                                   repeat: Infinity,
                                   repeatType: "reverse",
                                   ease: "easeInOut",
                              }}
                         />
                    ))}
               </div>

               <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                    <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                    >
                         <motion.div
                              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-6 shadow-lg"
                              initial={{ scale: 0, rotate: -30 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, type: "spring" }}
                              animate={controls}
                         >
                              <Quote className="text-white" size={32} />
                         </motion.div>

                         <motion.h2
                              className="text-5xl font-bold dark:text-white mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 }}
                         >
                              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                   Voices of Delight
                              </span>
                         </motion.h2>

                         <motion.p
                              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                         >
                              Join thousands of satisfied users who transformed their productivity
                              with NotionNotes
                         </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {testimonials.map((testimonial, index) => (
                              <motion.div
                                   key={index}
                                   className="relative group"
                                   initial={{ opacity: 0, y: 50 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true, margin: "-50px" }}
                                   transition={{ delay: index * 0.15, duration: 0.6 }}
                              >
                                   <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-500" />

                                   <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50 group-hover:shadow-2xl transition-all duration-300">
                                        <div className="absolute top-6 left-8 opacity-10 dark:opacity-5 group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity">
                                             <Quote size={64} />
                                        </div>

                                        <div className="flex mb-5">
                                             {[...Array(5)].map((_, i) => (
                                                  <motion.div
                                                       key={i}
                                                       whileHover={{
                                                       scale: [1, 1.4, 1.2],
                                                       rotate: [0, 15, -10, 0],
                                                       transition: { duration: 0.4 },
                                                       }}
                                                       className="mr-1"
                                                  >
                                                            <Star
                                                                 size={20}
                                                                 className="text-amber-400 fill-amber-400"
                                                            />
                                                  </motion.div>
                                             ))}
                                        </div>

                                        <motion.p
                                             className="text-gray-700 dark:text-gray-200 text-lg mb-8 relative z-10"
                                             whileHover={{
                                                  x: [0, -2, 2, 0],
                                                  transition: { duration: 0.5 },
                                             }}
                                        >
                                             {testimonial.quote}
                                        </motion.p>

                                        <div className="flex items-center pt-6 border-t border-gray-100 dark:border-gray-700">
                                             <div className="relative">
                                                  <div
                                                       className={`bg-gradient-to-r ${testimonial.color} p-0.5 rounded-full`}
                                                  >
                                                       <motion.div
                                                            className="bg-white dark:bg-gray-800 rounded-full p-1"
                                                            whileHover={{ rotate: [0, 10, -10, 0] }}
                                                            transition={{ duration: 0.4 }}
                                                       >
                                                            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 w-14 h-14 rounded-full flex items-center justify-center">
                                                                 <User
                                                                      className="text-gray-600 dark:text-gray-400"
                                                                      size={20}
                                                                 />
                                                            </div>
                                                       </motion.div>
                                                  </div>
                                             </div>

                                             <div className="ml-4">
                                                  <h4 className="font-bold text-lg dark:text-white">
                                                       {testimonial.author}
                                                  </h4>
                                                  <motion.p
                                                       className={`bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-medium`}
                                                       animate={{
                                                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                                       }}
                                                       transition={{
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            repeatType: "reverse",
                                                            ease: "easeInOut",
                                                       }}
                                                  >
                                                       {testimonial.role}
                                                  </motion.p>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </div>

                    <motion.div
                         className="mt-16 text-center"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.6 }}
                    >
                         <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                              <span className="relative z-10">Read More Testimonials</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                         </button>
                    </motion.div>
               </div>
          </section>
     );
}
