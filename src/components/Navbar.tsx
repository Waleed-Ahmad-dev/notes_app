import { motion } from 'framer-motion';
import { BookOpen, Sun, Moon, Menu, X, ArrowRight } from 'react-feather';

interface NavbarProps {
     darkMode: boolean;
     setDarkMode: (value: boolean) => void;
     mobileMenuOpen: boolean;
     setMobileMenuOpen: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
     return (
          <motion.nav 
               className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-800/80 dark:shadow-gray-900/50"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
          >
               <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                         <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
                              <BookOpen size={18} className="text-white" />
                         </div>
                         <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notion<span className="text-indigo-600 dark:text-indigo-400">Notes</span></h1>
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                         <a href="#features" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Features</a>
                         <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">How It Works</a>
                         <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Testimonials</a>
          
                         <button 
                              onClick={() => setDarkMode(!darkMode)}
                              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                         >
                              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                         </button>
          
                         <button className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center">
                              Get Started <ArrowRight size={16} className="ml-2" />
                         </button>
                    </div>

                    <div className="flex items-center space-x-4 md:hidden">
                         <button 
                              onClick={() => setDarkMode(!darkMode)}
                              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
                         >
                              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                         </button>
          
                         <button 
                              className="text-gray-600 dark:text-gray-300"
                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                         >
                              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                         </button>
                    </div>
               </div>

               {mobileMenuOpen && (
                    <motion.div 
                         className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 border-t dark:border-gray-700"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                    >
                         <div className="flex flex-col space-y-3">
                              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2">Features</a>
                              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2">How It Works</a>
                              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2">Testimonials</a>
                              <button className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                                   Get Started
                              </button>
                         </div>
                    </motion.div>
               )}
          </motion.nav>
     );
}