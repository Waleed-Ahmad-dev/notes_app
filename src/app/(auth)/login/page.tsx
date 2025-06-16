"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const MotionButton = motion(Button);

const formVariants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               staggerChildren: 0.1,
          },
     },
};

const inputVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0 },
};

export default function LoginPage() {
     const [identifier, setIdentifier] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({ identifier: '', password: '', general: '' });
     const [isSubmitting, setIsSubmitting] = useState(false);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          const newErrors = validate();
          if (Object.values(newErrors).some((error) => error)) {
               setErrors(newErrors);
               return;
          }
          setIsSubmitting(true);
          try {
               const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ identifier, password }),
               });
               if (!response.ok) {
                    const data = await response.json();
                    setErrors({ ...errors, general: data.error });
               } else {
                    alert('Login successful!');
               }
          } catch (error) {
               console.error(error);
               setErrors({ ...errors, general: 'An error occurred. Please try again.' });
          } finally {
               setIsSubmitting(false);
          }
     };

     const validate = () => {
          const newErrors = { identifier: '', password: '', general: '' };
          if (!identifier) newErrors.identifier = 'Username or email is required';
          if (!password) newErrors.password = 'Password is required';
          return newErrors;
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900">
               <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <motion.form
                         variants={formVariants}
                         initial="hidden"
                         animate="visible"
                         onSubmit={handleSubmit}
                    >
                         <motion.h1 variants={inputVariants} className="text-3xl font-bold mb-6 text-center text-white">
                              Login
                         </motion.h1>
                         <motion.div variants={inputVariants} className="mb-4">
                              <label htmlFor="identifier" className="block text-sm font-medium mb-1 text-gray-300">
                                   Username or Email
                              </label>
                              <Input
                                   id="identifier"
                                   type="text"
                                   value={identifier}
                                   onChange={(e) => setIdentifier(e.target.value)}
                                   className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 rounded-md"
                              />
                              {errors.identifier && <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>}
                         </motion.div>
                         <motion.div variants={inputVariants} className="mb-6">
                              <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-300">
                                   Password
                              </label>
                              <Input
                                   id="password"
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 rounded-md"
                              />
                              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                         </motion.div>
                         <motion.div variants={inputVariants}>
                              <MotionButton
                                   type="submit"
                                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-md"
                                   disabled={isSubmitting}
                                   whileHover={{ scale: 1.05 }}
                              >
                                   {isSubmitting ? 'Logging In...' : 'Login'}
                              </MotionButton>
                         </motion.div>
                    </motion.form>
                    <p className="mt-4 text-center text-gray-400">
                         Don&apos;t have an account? <Link href="/signup" className="text-blue-400 hover:underline">Sign up</Link>
                    </p>
               </div>
          </div>
     );
}