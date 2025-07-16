"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const SignUpPage = () => {
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({ username: '', email: '', password: '' });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [showPassword, setShowPassword] = useState(false);
     const [passwordStrength, setPasswordStrength] = useState(0);
     const router = useRouter();
     const containerRef = useRef(null);

     // Password strength calculator
     useEffect(() => {
          let strength = 0;
          if (password.length > 5) strength += 1;
          if (password.length > 7) strength += 1;
          if (/[A-Z]/.test(password)) strength += 1;
          if (/[0-9]/.test(password)) strength += 1;
          if (/[^A-Za-z0-9]/.test(password)) strength += 1;
          setPasswordStrength(strength);
     }, [password]);

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
               localStorage.setItem('pendingVerificationEmail', email);
               router.push('/verify-email');
               setIsSubmitting(false);
          }, 1500);
     };

     const validate = () => {
          const newErrors = { username: '', email: '', password: '' };
          if (!username) newErrors.username = 'Username is required';
          if (!email) newErrors.email = 'Email is required';
          else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
          if (!password) newErrors.password = 'Password is required';
          else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
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
          show: { y: 0, opacity: 1, transition: { type: "spring" as const, damping: 12 } }
     };

     const hoverEffect = {
          scale: 1.02,
          transition: { type: "spring", stiffness: 300 } as const
     };

     const tapEffect = { scale: 0.98 };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden p-4">
               {/* Animated background elements */}
               <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                         <motion.div
                              key={i}
                              className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
                              animate={{
                                   x: [0, 100 * (i % 3 === 0 ? -1 : 1)],
                                   y: [0, 100 * (i % 2 === 0 ? -1 : 1)],
                                   scale: [1, 1.5, 1],
                              }}
                              transition={{
                                   duration: 15 + i * 3,
                                   repeat: Infinity,
                                   ease: "easeInOut",
                              }}
                              style={{
                                   width: Math.random() * 100 + 50,
                                   height: Math.random() * 100 + 50,
                                   top: `${Math.random() * 100}%`,
                                   left: `${Math.random() * 100}%`,
                                   opacity: 0.1 + Math.random() * 0.2,
                              }}
                         />
                    ))}
               </div>

               <motion.div
                    ref={containerRef}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-full max-w-md"
               >
                    <motion.div
                         className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
                         whileHover={{ 
                              boxShadow: '0 20px 50px -10px rgba(79, 70, 229, 0.4)'
                         }}
                         transition={{ duration: 0.5 }}
                    >
                         <div className="p-1 bg-gradient-to-r from-purple-500 to-indigo-500">
                              <div className="bg-gray-900/80 rounded-t-xl p-8 pb-6">
                                   <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-center mb-8"
                                   >
                                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">
                                             Create Account
                                        </h1>
                                        <p className="text-gray-400">Join our community of creators</p>
                                   </motion.div>

                                   <motion.form
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        onSubmit={handleSubmit}
                                   >
                                        {/* Username Field */}
                                        <motion.div variants={item} className="mb-6">
                                             <div className="relative">
                                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-400">
                                                       <FiUser />
                                                  </div>
                                                  <Input
                                                       id="username"
                                                       type="text"
                                                       value={username}
                                                       onChange={(e) => setUsername(e.target.value)}
                                                       className="pl-10 bg-gray-800/70 border-gray-700/50 text-white rounded-xl py-5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                       placeholder="Username"
                                                  />
                                             </div>
                                             <AnimatePresence>
                                                  {errors.username && (
                                                       <motion.p 
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="text-red-400 text-sm mt-2 pl-2"
                                                       >
                                                            {errors.username}
                                                       </motion.p>
                                                  )}
                                             </AnimatePresence>
                                        </motion.div>

                                        {/* Email Field */}
                                        <motion.div variants={item} className="mb-6">
                                             <div className="relative">
                                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-400">
                                                       <FiMail />
                                                  </div>
                                                  <Input
                                                       id="email"
                                                       type="email"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       className="pl-10 bg-gray-800/70 border-gray-700/50 text-white rounded-xl py-5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                       placeholder="Email address"
                                                  />
                                             </div>
                                             <AnimatePresence>
                                                  {errors.email && (
                                                       <motion.p 
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="text-red-400 text-sm mt-2 pl-2"
                                                       >
                                                            {errors.email}
                                                       </motion.p>
                                                  )}
                                             </AnimatePresence>
                                        </motion.div>

                                        {/* Password Field */}
                                        <motion.div variants={item} className="mb-6">
                                             <div className="relative">
                                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-400">
                                                       <FiLock />
                                                  </div>
                                                  <Input
                                                       id="password"
                                                       type={showPassword ? "text" : "password"}
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                       className="pl-10 pr-10 bg-gray-800/70 border-gray-700/50 text-white rounded-xl py-5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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

                                             {/* Password Strength Indicator */}
                                             <div className="mt-3">
                                                  <div className="flex space-x-1 mb-1">
                                                       {[...Array(5)].map((_, i) => (
                                                            <motion.div
                                                                 key={i}
                                                                 className={
                                                                      `h-1 rounded-full flex-1 ${
                                                                           i < passwordStrength 
                                                                                ? passwordStrength < 3 
                                                                                ? 'bg-red-500' 
                                                                                : passwordStrength < 4 
                                                                                ? 'bg-yellow-500' 
                                                                                : 'bg-green-500'
                                                                                : 'bg-gray-700'
                                                                      }`
                                                                 }
                                                                 animate={{ 
                                                                      width: i < passwordStrength ? '100%' : '100%',
                                                                      opacity: 1
                                                                 }}
                                                            />
                                                       ))}
                                                  </div>
                                                  <div className="text-xs text-right text-gray-400">
                                                       {passwordStrength < 2 && 'Weak'}
                                                       {passwordStrength === 2 && 'Fair'}
                                                       {passwordStrength === 3 && 'Good'}
                                                       {passwordStrength > 3 && 'Strong'}
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

                                        {/* Submit Button */}
                                        <motion.div variants={item} className="mt-8">
                                             <motion.button
                                                  type="submit"
                                                  disabled={isSubmitting}
                                                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-xl py-6 transition-all duration-300 relative overflow-hidden"
                                                  whileHover={hoverEffect}
                                                  whileTap={tapEffect}
                                             >
                                                  {isSubmitting ? (
                                                       <motion.span
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                            className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                                                       />
                                                  ) : (
                                                       <motion.span className="flex items-center justify-center">
                                                            Sign Up <FiArrowRight className="ml-2" />
                                                       </motion.span>
                                                  )}
                                                  <motion.div
                                                       initial={{ width: 0 }}
                                                       animate={{ width: isSubmitting ? '100%' : 0 }}
                                                       className="absolute bottom-0 left-0 h-1 bg-white/30"
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
                                             <span className="mx-4 text-gray-500 text-sm">Or continue with</span>
                                             <div className="flex-grow border-t border-gray-700/50"></div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                             {[
                                                  { icon: <FiGithub />, color: 'bg-gray-800' },
                                                  { icon: <FiTwitter />, color: 'bg-blue-500' },
                                                  { icon: <FiLinkedin />, color: 'bg-blue-700' }
                                             ].map((social, index) => (
                                                  <motion.button
                                                       key={index}
                                                       type="button"
                                                       className={`${social.color} text-white p-4 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity`}
                                                       whileHover={{ y: -5 }}
                                                       whileTap={{ scale: 0.95 }}
                                                  >
                                                       {social.icon}
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
                         Already have an account?{' '}
                         <a 
                              href="/login" 
                              className="text-indigo-400 hover:text-indigo-300 underline transition-colors"
                         >
                              Log in
                         </a>
                    </motion.div>
               </motion.div>
          </div>
     );
};

export default SignUpPage;