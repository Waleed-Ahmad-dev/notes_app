"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Menu, X, ArrowRight, Moon, Sun } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useCallback, memo, useState, useEffect } from 'react';

interface NavbarProps {
     mobileMenuOpen: boolean;
     setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
     theme: 'dark' | 'light';
     toggleTheme: () => void;
}

const NAV_LINKS = [
     { name: 'Features', href: '#features' },
     { name: 'How It Works', href: '#how-it-works' },
     { name: 'Testimonials', href: '#testimonials' },
];

const Navbar = memo(({ 
     mobileMenuOpen, 
     setMobileMenuOpen, 
     theme,
     toggleTheme 
}: NavbarProps) => {
     const router = useRouter();
     const [scrolled, setScrolled] = useState(false);
     const [hoveredLink, setHoveredLink] = useState<string | null>(null);

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 10);
          };
     
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const closeMobileMenu = useCallback(() => {
          setMobileMenuOpen(false);
     }, [setMobileMenuOpen]);

     const handleGetStarted = useCallback(() => {
          router.push("/signup");
     }, [router]);

     const toggleMobileMenu = useCallback(() => {
          setMobileMenuOpen(prev => !prev);
     }, [setMobileMenuOpen]);

     // Floating particles background
     const particles = Array.from({ length: 15 }, (_, i) => ({
          id: i,
          size: Math.random() * 4 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 2}s`,
     }));

     return (
          <motion.nav
               className={
                    `fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500 ${
                    scrolled 
                         ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm dark:shadow-gray-950/30 py-2' 
                         : 'bg-transparent py-4'
                    }`
               }
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
               <div className="absolute inset-0 overflow-hidden -z-10">
                    {particles.map(particle => (
                         <motion.div
                              key={particle.id}
                              className="absolute rounded-full bg-indigo-400/20 dark:bg-indigo-500/20"
                              style={{
                                   width: `${particle.size}px`,
                                   height: `${particle.size}px`,
                                   top: particle.top,
                                   left: particle.left,
                              }}
                              animate={{
                                   y: [0, -20, 0],
                                   x: [0, Math.random() > 0.5 ? -10 : 10, 0],
                              }}
                              transition={{
                                   duration: parseFloat(particle.animationDuration),
                                   delay: parseFloat(particle.animationDelay),
                                   repeat: Infinity,
                                   repeatType: 'reverse',
                                   ease: 'easeInOut'
                              }}
                         />
                    ))}
               </div>

               <div className="container mx-auto px-4 flex justify-between items-center">
                    <motion.div
                         className="flex items-center space-x-2 cursor-pointer"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                         <motion.div
                              className="bg-gradient-to-br from-indigo-600 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                              whileHover={{ rotate: 5, scale: 1.1 }}
                              whileTap={{ rotate: -5, scale: 0.9 }}
                         >
                              <BookOpen size={20} className="text-white" />
                         </motion.div>
                         <motion.h1 
                              className="text-2xl font-bold text-gray-800 dark:text-white"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                         >
                              Notion<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Notes</span>
                         </motion.h1>
                    </motion.div>

                    <div className="hidden md:flex space-x-8 items-center">
                         {NAV_LINKS.map((link) => (
                              <motion.a
                                   key={link.name}
                                   href={link.href}
                                   className="relative text-gray-600 dark:text-gray-300 font-medium px-1 py-2"
                                   onMouseEnter={() => setHoveredLink(link.name)}
                                   onMouseLeave={() => setHoveredLink(null)}
                                   whileHover={{ color: '#7c3aed' }}
                                   whileTap={{ scale: 0.95 }}
                              >
                                   {link.name}
                                   {hoveredLink === link.name && (
                                        <motion.div
                                             className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                             layoutId="navHover"
                                             initial={{ scaleX: 0 }}
                                             animate={{ scaleX: 1 }}
                                             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        />
                                   )}
                              </motion.a>
                         ))}
                    </div>

                    <div className="flex items-center space-x-4">
                         <div className="hidden md:flex items-center space-x-4">
                              <motion.button
                                   onClick={toggleTheme}
                                   className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden"
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   aria-label="Toggle theme"
                              >
                                   <motion.div
                                        key={theme}
                                        initial={{ rotate: theme === 'dark' ? 0 : 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: theme === 'dark' ? -90 : 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                   >
                                        {theme === 'dark' ? (
                                             <Sun size={20} className="text-yellow-300" />
                                        ) : (
                                             <Moon size={20} className="text-indigo-700" />
                                        )}
                                   </motion.div>
                              </motion.button>

                              <motion.button
                                   className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl shadow-lg group overflow-hidden relative"
                                   whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.5)'
                                   }}
                                   whileTap={{ scale: 0.95 }}
                                   onClick={handleGetStarted}
                              >
                                   <span className="relative z-10">Get Started</span>
                                   <motion.span
                                        className="ml-2 relative z-10"
                                        initial={{ x: 0 }}
                                        animate={{ x: mobileMenuOpen ? 5 : 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: 'spring', stiffness: 500 }}
                                   >
                                        <ArrowRight size={18} />
                                   </motion.span>

                                   <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                   />
                                   <motion.div
                                        className="absolute top-0 left-0 w-8 h-full bg-white/30"
                                        initial={{ x: -50, skewX: -30 }}
                                        whileHover={{ x: 300, transition: { duration: 0.8 } }}
                                   />
                              </motion.button>
                         </div>

                         <motion.button
                              className="md:hidden text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={toggleTheme}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Toggle theme"
                         >
                              {theme === 'dark' ? (
                                   <Sun size={22} className="text-yellow-300" />
                              ) : (
                                   <Moon size={22} className="text-indigo-700" />
                              )}
                         </motion.button>

                         <motion.button
                              className="md:hidden text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={toggleMobileMenu}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Toggle menu"
                         >
                              <AnimatePresence mode="wait">
                                   {mobileMenuOpen ? (
                                        <motion.div
                                             key="close"
                                             initial={{ rotate: 90, opacity: 0 }}
                                             animate={{ rotate: 0, opacity: 1 }}
                                             exit={{ rotate: -90, opacity: 0 }}
                                        >
                                             <X size={26} />
                                        </motion.div>
                                   ) : (
                                        <motion.div
                                             key="menu"
                                             initial={{ rotate: -90, opacity: 0 }}
                                             animate={{ rotate: 0, opacity: 1 }}
                                             exit={{ rotate: 90, opacity: 0 }}
                                        >
                                             <Menu size={26} />
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </motion.button>
                    </div>
               </div>

               <AnimatePresence>
                    {mobileMenuOpen && (
                         <motion.div
                              className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 border-t border-gray-100 dark:border-gray-800"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ 
                                   opacity: 1, 
                                   height: 'auto',
                                   transition: { 
                                        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                        opacity: { duration: 0.3 }
                                   }
                              }}
                              exit={{ 
                                   opacity: 0, 
                                   height: 0,
                                   transition: { 
                                        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                        opacity: { duration: 0.2 }
                                   }
                              }}
                         >
                              <motion.div 
                                   className="flex flex-col space-y-4"
                                   initial="hidden"
                                   animate="visible"
                                   variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                             opacity: 1,
                                             transition: {
                                                  staggerChildren: 0.1
                                             }
                                        }
                                   }}
                              >
                                   {NAV_LINKS.map((link, index) => (
                                        <motion.a
                                             key={link.name}
                                             href={link.href}
                                             className="text-gray-600 dark:text-gray-300 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                                             variants={{
                                                  hidden: { opacity: 0, x: -20 },
                                                  visible: { 
                                                       opacity: 1, 
                                                       x: 0,
                                                       transition: { type: 'spring', stiffness: 300 }
                                                  }
                                             }}
                                             whileHover={{
                                                  x: 5,
                                                  color: '#7c3aed',
                                                  backgroundColor: theme === 'light' ? '#f3f4f6' : '#1f2937'
                                             }}
                                             whileTap={{ scale: 0.98 }}
                                             onClick={closeMobileMenu}
                                        >
                                             <motion.span 
                                                  className="inline-block mr-2 text-indigo-500"
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{ delay: index * 0.1 + 0.2 }}
                                             >
                                                  •
                                             </motion.span>
                                             {link.name}
                                        </motion.a>
                                   ))}
                                   <motion.button
                                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl mt-2 flex items-center justify-center shadow-lg group"
                                        whileHover={{ scale: 1.02, boxShadow: '0 5px 15px -3px rgba(99, 102, 241, 0.4)' }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleGetStarted}
                                        variants={{
                                             hidden: { opacity: 0, y: 10 },
                                             visible: { 
                                                  opacity: 1, 
                                                  y: 0,
                                                  transition: { type: 'spring', stiffness: 300 }
                                             }
                                        }}
                                   >
                                        Get Started
                                        <motion.span
                                             className="ml-2 group-hover:translate-x-1 transition-transform"
                                             whileHover={{ scale: 1.2 }}
                                        >
                                        <ArrowRight size={18} />
                                   </motion.span>
                              </motion.button>
                         </motion.div>
                    </motion.div>
               )}
               </AnimatePresence>
          </motion.nav>
     );
});

Navbar.displayName = 'Navbar';

export default Navbar;