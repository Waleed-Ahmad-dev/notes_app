"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

const otpSlotVariants = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function VerifyEmailPage() {
     const [otp, setOtp] = useState('');
     const [email, setEmail] = useState('');
     const [error, setError] = useState('');
     const [isSubmitting, setIsSubmitting] = useState(false);
     const router = useRouter();

     // Retrieve email from localStorage on mount
     useEffect(() => {
          const storedEmail = localStorage.getItem('pendingVerificationEmail');
          if (storedEmail) {
               setEmail(storedEmail);
          } else {
               setError('No email found. Please sign up again.');
          }
     }, []);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          if (!otp || otp.length !== 6) {
               setError('Please enter a valid 6-digit OTP');
               return;
          }
          if (!email) {
               setError('No email found. Please sign up again.');
               return;
          }

          setIsSubmitting(true);
          try {
               const response = await fetch('/api/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ otp, email }),
               });

               if (!response.ok) {
                    const data = await response.json();
                    setError(data.error || 'Invalid OTP');
               } else {
                    // Clear email from localStorage
                    localStorage.removeItem('pendingVerificationEmail');
                    // Redirect to login page
                    router.push('/login');
               }
          } catch (err) {
               console.error('Verification error:', err);
               setError('An error occurred. Please try again.');
          } finally {
               setIsSubmitting(false);
          }
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
                              Verify Your Email
                         </motion.h1>
                         <motion.p variants={inputVariants} className="text-gray-300 mb-6 text-center">
                              Enter the 6-digit OTP sent to {email || 'your email'}.
                         </motion.p>
                         <motion.div variants={inputVariants} className="mb-6 flex justify-center">
                              <InputOTP
                                   maxLength={6}
                                   value={otp}
                                   onChange={(value) => setOtp(value)}
                              >
                                   <InputOTPGroup className="gap-2">
                                        {[...Array(6)].map((_, index) => (
                                             <motion.div key={index} variants={otpSlotVariants}>
                                                  <InputOTPSlot
                                                       index={index}
                                                       className="w-12 h-12 text-lg font-semibold text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-600"
                                                  />
                                             </motion.div>
                                        ))}
                                   </InputOTPGroup>
                              </InputOTP>
                         </motion.div>
                         {error && <motion.p variants={inputVariants} className="text-red-500 text-sm mb-4 text-center">{error}</motion.p>}
                         <motion.div variants={inputVariants}>
                              <MotionButton
                                   type="submit"
                                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-md"
                                   disabled={isSubmitting}
                                   whileHover={{ scale: 1.05 }}
                              >
                                   {isSubmitting ? 'Verifying...' : 'Verify OTP'}
                              </MotionButton>
                         </motion.div>
                    </motion.form>
                    <p className="mt-4 text-center text-gray-400">
                         Already verified? <Link href="/login" className="text-blue-400 hover:underline">Log in</Link>
                    </p>
               </div>
          </div>
     );
}