import { motion } from 'framer-motion';

export default function CTASection() {
     return (
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
               <div className="container mx-auto px-4 text-center">
                    <motion.h2
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 15
                         }}
                         className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                    >
                         Ready to Get Organized?
                    </motion.h2>

                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: 0.1
                         }}
                         className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90"
                    >
                         Join thousands of users who are already organizing their thoughts with NotionNotes.
                    </motion.p>

                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: 0.2
                         }}
                         className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                         <motion.button
                              whileHover={{
                                   scale: 1.05,
                                   boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="relative bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg group"
                         >
                              <span className="relative z-10">Get Started for Free</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                         </motion.button>
          
                         <motion.button
                              whileHover={{
                                   scale: 1.05,
                                   boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="relative bg-transparent border-2 border-white/60 px-8 py-[14px] rounded-xl font-bold hover:border-white hover:bg-white/10 transition-all duration-300 group"
                         >
                              <span className="relative z-10">Schedule a Demo</span>
                              <div className="absolute inset-0 bg-white opacity-0 rounded-xl group-hover:opacity-5 transition-opacity duration-300"></div>
                         </motion.button>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.6, duration: 1 }}
                         className="mt-12 text-indigo-200"
                    >
                         <div className="inline-flex items-center gap-2">
                              <div className="flex -space-x-3">
                                   {[...Array(5)].map((_, i) => (
                                        <div
                                             key={i}
                                             className="w-10 h-10 rounded-full bg-white border-2 border-indigo-500"
                                        />
                                   ))}
                              </div>
                              <span className="text-lg ml-2">Join our community of 10k+ users</span>
                         </div>
                    </motion.div>
               </div>
          </section>
     );
}