import { motion } from 'framer-motion';

export default function CTASection() {
     return (
          <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
               <div className="container mx-auto px-4 text-center">
                    <motion.h2
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="text-3xl font-bold mb-4"
                    >
                         Ready to Get Organized?
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.1 }}
                         className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                         Join thousands of users who are already organizing their thoughts with NotionNotes.
                    </motion.p>
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2 }}
                    >
                         <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mr-4">
                              Get Started for Free
                         </button>
                         <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                              Schedule a Demo
                         </button>
                    </motion.div>
               </div>
          </section>
     );
}