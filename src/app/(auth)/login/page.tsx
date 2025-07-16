/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { FiUser, FiLock, FiEye, FiEyeOff, FiArrowRight, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { GiFingerPrint } from 'react-icons/gi';

const LoginPage = () => {
     const [identifier, setIdentifier] = useState('');
     const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const [errors, setErrors] = useState({ identifier: '', password: '', general: '' });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [activeInput, setActiveInput] = useState<string | null>(null);
     const containerRef = useRef<HTMLDivElement>(null);
     const [particles, setParticles] = useState<{x: number, y: number, size: number, delay: number}[]>([]);

     // Create floating particles
     useEffect(() => {
          if (!containerRef.current) return;

          const newParticles = Array.from({ length: 15 }, (__, i) => ({
               x: Math.random() * 100,
               y: Math.random() * 100,
               size: Math.random() * 3 + 1,
               delay: Math.random() * 5
          }));

          setParticles(newParticles);
     }, []);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          const newErrors = validate();
          if (Object.values(newErrors).some(error => error)) {
               setErrors(newErrors);
               return;
          }

          setIsSubmitting(true);
          // Simulate API call
          setTimeout(() => {
               setIsSubmitting(false);
               alert('Login successful!'); // Replace with actual redirect logic
          }, 1500);
     };

     const validate = () => {
          const newErrors = { identifier: '', password: '', general: '' };
          if (!identifier) newErrors.identifier = 'Username or email is required';
          if (!password) newErrors.password = 'Password is required';
          return newErrors;
     };

     // Animation variants
     const container = {
          hidden: { opacity: 0 },
          show: {
               opacity: 1,
               transition: {
               staggerChildren: 0.1
               }
          }
     };

     const item = {
          hidden: { y: 20, opacity: 0 },
          show: { 
               y: 0, 
               opacity: 1, 
               transition: { 
                    damping: 12,
                    stiffness: 100
               }
          }
     };

     const hoverEffect = {
          scale: 1.03,
          transition: { type: "spring" as const, stiffness: 300 }
     };

     const tapEffect = { scale: 0.98 };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0520] via-[#1c1049] to-[#0a0520] overflow-hidden p-4">
               {/* Animated background */}
               <div className="absolute inset-0 overflow-hidden">
                    {particles.map((particle, i) => (
                         <motion.div
                              key={i}
                              className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30"
                              animate={{
                                   x: [0, 20 * (i % 3 === 0 ? -1 : 1)],
                                   y: [0, 30 * (i % 2 === 0 ? -1 : 1)],
                              }}
                              transition={{
                                   duration: 8 + i * 2,
                                   repeat: Infinity,
                                   repeatType: "reverse",
                                   delay: particle.delay,
                                   ease: "easeInOut"
                              }}
                              style={{
                                   width: particle.size * 10,
                                   height: particle.size * 10,
                                   top: `${particle.y}%`,
                                   left: `${particle.x}%`,
                                   opacity: 0.2 + Math.random() * 0.3,
                              }}
                         />
                    ))}

                    {/* Glowing center element */}
                    <motion.div 
                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                         animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.2, 0.1]
                         }}
                         transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                         }}
                    >
                         <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-700/30 to-indigo-700/30 blur-[80px]" />
                    </motion.div>
               </div>

               <motion.div
                    ref={containerRef}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="relative z-10 w-full max-w-md"
               >
                    <motion.div
                         className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
                         whileHover={{ 
                              boxShadow: '0 20px 50px -10px rgba(99, 102, 241, 0.4)'
                         }}
                         transition={{ duration: 0.5 }}
                    >
                         {/* Header section with gradient bar */}
                         <div className="p-1 bg-gradient-to-r from-indigo-500 to-purple-500">
                              <div className="bg-gradient-to-b from-gray-900 to-gray-900/80 p-8 pb-6">
                                   <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-center mb-8"
                                   >
                                        <motion.div 
                                             className="mx-auto mb-4"
                                             animate={{ 
                                                  rotate: [0, 10, -10, 5, 0],
                                                  scale: [1, 1.1, 1]
                                             }}
                                             transition={{ 
                                                  duration: 2,
                                                  times: [0, 0.2, 0.4, 0.6, 1]
                                             }}
                                        >
                                             <GiFingerPrint className="text-indigo-400 mx-auto text-5xl" />
                                        </motion.div>
                                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 mb-2">
                                             Welcome Back
                                        </h1>
                                        <p className="text-gray-400">Sign in to continue your journey</p>
                                   </motion.div>

                                   <motion.form
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        onSubmit={handleSubmit}
                                   >
                                        {/* Identifier Field */}
                                        <motion.div variants={item} className="mb-6">
                                             <div 
                                                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                                                  activeInput === 'identifier' 
                                                       ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-[2px]' 
                                                       : 'bg-gray-800/70'
                                                  }`}
                                             >
                                                  <div className="relative bg-gray-900/80 rounded-xl">
                                                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-400">
                                                            <FiUser />
                                                       </div>
                                                       <Input
                                                            id="identifier"
                                                            type="text"
                                                            value={identifier}
                                                            onFocus={() => setActiveInput('identifier')}
                                                            onBlur={() => setActiveInput(null)}
                                                            onChange={(e) => setIdentifier(e.target.value)}
                                                            className="pl-10 bg-transparent border-none text-white rounded-xl py-5 focus:ring-0"
                                                            placeholder="Username or Email"
                                                       />
                                                  </div>
                                             </div>
                                             <AnimatePresence>
                                                  {errors.identifier && (
                                                       <motion.p 
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="text-red-400 text-sm mt-2 pl-2"
                                                       >
                                                            {errors.identifier}
                                                       </motion.p>
                                                  )}
                                             </AnimatePresence>
                                        </motion.div>

                                        {/* Password Field */}
                                        <motion.div variants={item} className="mb-4">
                                             <div 
                                                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                                                  activeInput === 'password' 
                                                       ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-[2px]' 
                                                       : 'bg-gray-800/70'
                                                  }`}
                                             >
                                                  <div className="relative bg-gray-900/80 rounded-xl">
                                                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-400">
                                                            <FiLock />
                                                       </div>
                                                       <Input
                                                            id="password"
                                                            type={showPassword ? "text" : "password"}
                                                            value={password}
                                                            onFocus={() => setActiveInput('password')}
                                                            onBlur={() => setActiveInput(null)}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="pl-10 pr-10 bg-transparent border-none text-white rounded-xl py-5 focus:ring-0"
                                                            placeholder="Password"
                                                       />
                                                       <button
                                                            type="button"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-300 transition-colors"
                                                       >
                                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                                       </button>
                                                  </div>
                                             </div>
                                             <AnimatePresence>
                                                  {errors.password && (
                                                       <motion.p 
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="text-red-400 text-sm mt-2 pl-2"
                                                       >
                                                            {errors.password}
                                                       </motion.p>
                                                  )}
                                             </AnimatePresence>
                                        </motion.div>

                                        {/* Forgot Password */}
                                        <motion.div 
                                             variants={item}
                                             className="text-right mb-6"
                                        >
                                             <Link 
                                                  href="/forgot-password" 
                                                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors group"
                                             >
                                                  <span className="group-hover:underline">Forgot Password?</span>
                                                  <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all">→</span>
                                             </Link>
                                        </motion.div>

                                        {/* General Errors */}
                                        <AnimatePresence>
                                             {errors.general && (
                                                  <motion.div
                                                       initial={{ height: 0, opacity: 0 }}
                                                       animate={{ height: 'auto', opacity: 1 }}
                                                       exit={{ height: 0, opacity: 0 }}
                                                       className="mb-4 bg-red-900/30 border border-red-700/50 rounded-lg p-3"
                                                  >
                                                       <p className="text-red-300 text-sm">{errors.general}</p>
                                                  </motion.div>
                                             )}
                                        </AnimatePresence>

                                        {/* Submit Button */}
                                        <motion.div variants={item} className="mt-6">
                                             <motion.button
                                                  type="submit"
                                                  disabled={isSubmitting}
                                                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl py-6 transition-all duration-300 relative overflow-hidden group"
                                                  whileHover={hoverEffect}
                                                  whileTap={tapEffect}
                                             >
                                                  <span className="relative z-10 flex items-center justify-center">
                                                       {isSubmitting ? (
                                                            <motion.span
                                                                 animate={{ rotate: 360 }}
                                                                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                 className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                            />
                                                       ) : (
                                                            <>
                                                                 Login <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                                            </>
                                                       )}
                                                  </span>
                                                  <motion.div 
                                                       className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                                       initial={{ opacity: 0 }}
                                                  />
                                                  <motion.div
                                                       initial={{ width: 0 }}
                                                       animate={{ width: isSubmitting ? '100%' : 0 }}
                                                       className="absolute bottom-0 left-0 h-1 bg-indigo-300/50"
                                                       transition={{ duration: 1.5 }}
                                                  />
                                             </motion.button>
                                        </motion.div>
                                   </motion.form>
                                   {/* Social Login */}
                                   <motion.div 
                                        variants={item}
                                        className="mt-8"
                                   >
                                        <div className="flex items-center my-6">
                                             <div className="flex-grow border-t border-gray-700/50"></div>
                                             <span className="mx-4 text-gray-500 text-sm">Or sign in with</span>
                                             <div className="flex-grow border-t border-gray-700/50"></div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                             {[
                                                  { icon: <FiGithub />, color: 'from-gray-800 to-gray-900' },
                                                  { icon: <FiTwitter />, color: 'from-blue-500 to-blue-600' },
                                                  { icon: <FiLinkedin />, color: 'from-blue-700 to-blue-800' }
                                             ].map((social, index) => (
                                                  <motion.button
                                                       key={index}
                                                       type="button"
                                                       className={`bg-gradient-to-b ${social.color} text-white p-4 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity relative overflow-hidden`}
                                                       whileHover={{ y: -5 }}
                                                       whileTap={{ scale: 0.95 }}
                                                  >
                                                  {social.icon}
                                                  <motion.div 
                                                       className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity"
                                                       initial={{ opacity: 0 }}
                                                  />
                                                  </motion.button>
                                             ))}
                                        </div>
                                   </motion.div>
                              </div>
                         </div>
                    </motion.div>

                    <motion.div 
                         className="text-center mt-6 text-gray-400"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.5 }}
                    >
                         Don&#39;t have an account?{' '}
                         <Link 
                              href="/signup" 
                              className="text-indigo-400 hover:text-indigo-300 underline transition-colors"
                         >
                              Sign up
                         </Link>
                    </motion.div>
               </motion.div>
          </div>
     );
};

export default LoginPage;