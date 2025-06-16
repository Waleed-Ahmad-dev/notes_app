"use client";

import { SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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

export default function SignUpPage() {
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({ username: '', email: '', password: '' });
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
               const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password }),
               });
               if (!response.ok) {
                    const data = await response.json();
                    setErrors({ ...errors, [data.field]: data.error });
               } else {
                    alert('Registration successful! Please check your email to verify your account.');
               }
          } catch (error) {
               console.error(error);
               alert('An error occurred. Please try again.');
          } finally {
               setIsSubmitting(false);
          }
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
                              Sign Up
                         </motion.h1>
                         <motion.div variants={inputVariants} className="mb-4">
                              <label htmlFor="username" className="block text-sm font-medium mb-1 text-gray-300">
                                   Username
                              </label>
                              <Input
                                   id="username"
                                   type="text"
                                   value={username}
                                   onChange={(e: { target: { value: SetStateAction<string>; }; }) => setUsername(e.target.value)}
                                   className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 rounded-md"
                              />
                              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                         </motion.div>
                         <motion.div variants={inputVariants} className="mb-4">
                              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                                   Email
                              </label>
                              <Input
                                   id="email"
                                   type="email"
                                   value={email}
                                   onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                                   className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 rounded-md"
                              />
                              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                         </motion.div>
                         <motion.div variants={inputVariants} className="mb-6">
                              <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-300">
                                   Password
                              </label>
                              <Input
                                   id="password"
                                   type="password"
                                   value={password}
                                   onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
                                   className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 rounded-md"
                              />
                              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                         </motion.div>
                         <motion.div variants={inputVariants}>
                              <Button
                                   type="submit"
                                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-md cursor-pointer"
                                   disabled={isSubmitting}
                              >
                                   {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                              </Button>
                         </motion.div>
                    </motion.form>
                    <p className="mt-4 text-center text-gray-400">
                         Already have an account? <Link href="/login" className="text-blue-400 hover:underline">Log in</Link>
                    </p>
               </div>
          </div>
     );
}