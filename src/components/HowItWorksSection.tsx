import { motion } from 'framer-motion';

export default function HowItWorksSection() {
     const steps = [
          { step: 1, title: 'Sign Up', description: 'Create your free account in seconds' },
          { step: 2, title: 'Create Notes', description: 'Start capturing your ideas and thoughts' },
          { step: 3, title: 'Organize', description: 'Categorize and tag your notes for easy access' },
          { step: 4, title: 'Access Anywhere', description: 'Use on all your devices seamlessly' },
     ];

     return (
          <section id="how-it-works" className="py-16 dark:bg-gray-900">
               <div className="container mx-auto px-4">
                    <motion.div
                         className="text-center mb-12"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                    >
                         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">How It Works</h2>
                         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                              Get started in minutes and transform how you capture and organize information
                         </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         {steps.map((step, index) => (
                              <motion.div
                                   key={index}
                                   className="text-center"
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                              >
                                   <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                        {step.step}
                                   </div>
                                   <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}