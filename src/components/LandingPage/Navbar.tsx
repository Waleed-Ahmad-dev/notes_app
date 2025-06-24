"use client";

import { motion } from 'framer-motion';
import { BookOpen, Menu, X, ArrowRight, Moon, Sun } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useMemo, useCallback, memo } from 'react';

interface NavbarProps {
     mobileMenuOpen: boolean;
     setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
     theme: 'dark' | 'light';
     toggleTheme: () => void;
}

const NavLinks = [
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

     const closeMobileMenu = useCallback(() => {
          setMobileMenuOpen(false);
     }, [setMobileMenuOpen]);

     const handleGetStarted = useCallback(() => {
          router.push("/signup");
     }, [router]);

     const toggleMobileMenu = useCallback(() => {
          setMobileMenuOpen((prev: boolean): boolean => !prev);
     }, [setMobileMenuOpen]);

     const MobileMenu = useMemo(() => (
          mobileMenuOpen && (
               <motion.div
                    className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 border-t dark:border-gray-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
               >
                    <div className="flex flex-col space-y-4">
                         {NavLinks.map((link) => (
                              <motion.a
                                   key={link.name}
                                   href={link.href}
                                   className="text-gray-600 dark:text-gray-300 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                   whileHover={{
                                        x: 5,
                                        color: '#7c3aed'
                                   }}
                                   whileTap={{ scale: 0.98 }}
                                   onClick={closeMobileMenu}
                              >
                                   {link.name}
                              </motion.a>
                         ))}
                         <motion.button
                              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl mt-2 flex items-center justify-center shadow-lg"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={closeMobileMenu}
                         >
                              Get Started
                              <ArrowRight size={18} className="ml-2" />
                         </motion.button>
                    </div>
               </motion.div>
          )
     ), [mobileMenuOpen, closeMobileMenu]);

     const DesktopNavLinks = useMemo(() => (
          NavLinks.map((link) => (
               <motion.a
                    key={link.name}
                    href={link.href}
                    className="relative text-gray-600 dark:text-gray-300 font-medium px-1 py-2"
                    whileHover={{ color: '#7c3aed' }}
                    whileTap={{ scale: 0.95 }}
               >
                    {link.name}
                    <motion.div
                         className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                         initial={{ scaleX: 0 }}
                         whileHover={{
                              scaleX: 1,
                              transition: { duration: 0.3, ease: "easeOut" }
                         }}
                    />
               </motion.a>
          ))
     ), []);

     return (
          <motion.nav
               className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm dark:bg-gray-900/90 dark:shadow-gray-950 transition-colors duration-300"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
          >
               <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <motion.div
                         className="flex items-center space-x-2 cursor-pointer"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                    >
                         <div className="bg-indigo-600 w-9 h-9 rounded-lg flex items-center justify-center shadow-md">
                              <BookOpen size={20} className="text-white" />
                         </div>
                         <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                              Notion<span className="text-indigo-600 dark:text-indigo-400">Notes</span>
                         </h1>
                    </motion.div>

                    <div className="hidden md:flex space-x-8 items-center">
                         {DesktopNavLinks}
                    </div>

                    <div className="flex items-center space-x-4">
                         <div className="hidden md:flex items-center space-x-4">
                              <motion.button
                                   onClick={toggleTheme}
                                   className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                              >
                                   {theme === 'dark' ? (
                                        <Sun size={20} className="text-gray-700 dark:text-yellow-300" />
                                   ) : (
                                        <Moon size={20} className="text-gray-700 dark:text-gray-300" />
                                   )}
                              </motion.button>
                              <motion.button
                                   className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 group"
                                   whileHover={{ scale: 1.05 }}
                                   whileTap={{ scale: 0.95 }}
                                   onClick={handleGetStarted}
                              >
                                   Get Started
                                   <motion.span
                                        initial={{ x: 0 }}
                                        animate={{ x: mobileMenuOpen ? 5 : 0 }}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                   >
                                        <ArrowRight size={18} />
                                   </motion.span>
                              </motion.button>
                         </div>

                         {/* Mobile Dark Mode Toggle (Added next to hamburger) */}
                         <motion.button
                              className="md:hidden text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={toggleTheme}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                         >
                              {theme === 'dark' ? (
                                   <Sun size={22} className="text-gray-700 dark:text-yellow-300" />
                              ) : (
                                   <Moon size={22} className="text-gray-700 dark:text-gray-300" />
                              )}
                         </motion.button>

                         <motion.button
                              className="md:hidden text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={toggleMobileMenu}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                         >
                              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                         </motion.button>
                    </div>
               </div>

               {MobileMenu}
          </motion.nav>
     );
});

Navbar.displayName = 'Navbar';

export default Navbar;