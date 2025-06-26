/* eslint-disable @typescript-eslint/no-explicit-any */
import { Palette } from 'lucide-react';
import { useState } from 'react';
import { BookOpen, GitHub, Linkedin, Instagram, Mail, Award, Zap, Star } from 'react-feather';

export default function Footer() {
     const [email, setEmail] = useState('');
     const [isSubscribed, setIsSubscribed] = useState(false);
     const [isHoveringLogo, setIsHoveringLogo] = useState(false);

     const handleSubmit = (e: any) => {
          e.preventDefault();
          if (email) {
               setIsSubscribed(true);
               setTimeout(() => setIsSubscribed(false), 3000);
          }
     };

     return (
          <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 text-white py-14 transition-colors duration-500">
               {/* Decorative floating elements */}
               <div className="absolute top-10 left-5 w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
               <div className="absolute top-1/4 right-20 w-4 h-4 rounded-full bg-purple-500 animate-ping opacity-30"></div>
               <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

               {/* Floating particles */}
               {[...Array(15)].map((_, i) => (
                    <div 
                         key={i}
                         className="absolute w-1 h-1 rounded-full bg-white opacity-20"
                         style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animation: `float${Math.floor(Math.random() * 3) + 1} ${8 + Math.random() * 10}s infinite ease-in-out`
                         }}
                    />
               ))}

               {/* Wave divider */}
               <div className="absolute top-0 left-0 w-full overflow-hidden">
                    <svg 
                         className="w-full h-16 -mt-1"
                         viewBox="0 0 1200 120" 
                         preserveAspectRatio="none"
                    >
                         <path 
                              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                              fill="#111827" 
                              opacity="0.25"
                         ></path>
                         <path 
                              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                              fill="#111827" 
                              opacity="0.5"
                         ></path>
                         <path 
                              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                              fill="#111827"
                         ></path>
                    </svg>
               </div>

               <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                         {/* Logo Section */}
                         <div>
                              <div 
                                   className="flex items-center space-x-3 mb-6 cursor-pointer"
                                   onMouseEnter={() => setIsHoveringLogo(true)}
                                   onMouseLeave={() => setIsHoveringLogo(false)}
                              >
                                   <div className={`bg-gradient-to-br from-indigo-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 transition-all duration-500 ${isHoveringLogo ? 'transform rotate-6 scale-110 shadow-indigo-500/40' : ''}`}>
                                        <BookOpen size={24} className="text-white" />
                                   </div>
                                   <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                                        Notion<span className="text-indigo-400">Notes</span>
                                   </h1>
                                   {isHoveringLogo && (
                                        <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-indigo-500/10 filter blur-3xl -z-10 animate-pulse"></div>
                                   )}
                              </div>
                              <p className="text-gray-400 mb-6 leading-relaxed transition-colors duration-500">
                                   The modern note-taking app designed to help you capture ideas, organize thoughts, and boost productivity.
                              </p>
                              <div className="flex space-x-5">
                                   {[
                                        { icon: GitHub, href: "https://github.com", color: "from-gray-700 to-gray-900" },
                                        { icon: Linkedin, href: "https://linkedin.com", color: "from-blue-600 to-blue-800" },
                                        { icon: Instagram, href: "https://instagram.com", color: "from-pink-500 to-rose-500" },
                                        { icon: Mail, href: "mailto:contact@example.com", color: "from-amber-500 to-orange-500" }
                                   ].map((item, index) => (
                                        <a 
                                             key={index}
                                             href={item.href} 
                                             className="relative group p-2 rounded-full transition-all duration-300"
                                        >
                                             <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10`}></div>
                                             <div className="text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-0.5">
                                                  <item.icon size={22} />
                                             </div>
                                             <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-transparent transition-colors duration-300"></div>
                                        </a>
                                   ))}
                              </div>
                         </div>

                         {/* Product Links */}
                         <div>
                              <h3 className="font-bold text-lg mb-5 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500 after:transition-all after:duration-500 after:hover:w-16">
                                   <div className="flex items-center gap-2">
                                        <Zap size={18} className="text-indigo-400" />
                                        <span>Product</span>
                                   </div>
                              </h3>
                              <ul className="space-y-3">
                                   {['Features', 'Pricing', 'Integrations', 'Roadmap'].map((item, index) => (
                                        <li key={index}>
                                             <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                                                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 group-hover:animate-pulse"></div>
                                                  <div className="relative overflow-hidden">
                                                       <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                                            {item}
                                                       </span>
                                                       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                                  </div>
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Resources Links */}
                         <div>
                              <h3 className="font-bold text-lg mb-5 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500 after:transition-all after:duration-500 after:hover:w-16">
                                   <div className="flex items-center gap-2">
                                        <Star size={18} className="text-amber-400" />
                                        <span>Resources</span>
                                   </div>
                              </h3>
                              <ul className="space-y-3">
                                   {['Blog', 'Tutorials', 'Documentation', 'Community'].map((item, index) => (
                                        <li key={index}>
                                             <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                                                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3 group-hover:animate-pulse"></div>
                                                  <div className="relative overflow-hidden">
                                                       <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                                            {item}
                                                       </span>
                                                       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                                  </div>
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Subscribe Section */}
                         <div>
                              <h3 className="font-bold text-lg mb-5 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500 after:transition-all after:duration-500 after:hover:w-16">
                                   <div className="flex items-center gap-2">
                                        <Award size={18} className="text-cyan-400" />
                                        <span>Subscribe</span>
                                   </div>
                              </h3>
                              <p className="text-gray-400 mb-5 leading-relaxed transition-colors duration-500">
                                   Get product updates and productivity tips delivered to your inbox.
                              </p>

                              <form onSubmit={handleSubmit} className="relative">
                                   <div className="flex shadow-lg shadow-indigo-500/10 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20 group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50">
                                        <input
                                             type="email"
                                             placeholder="Your email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             className="bg-gray-800/50 backdrop-blur-sm text-white px-5 py-3 w-full focus:outline-none focus:ring-0 border border-gray-700/50 focus:border-indigo-500 transition-all duration-300"
                                        />
                                        <button 
                                             type="submit"
                                             disabled={isSubscribed}
                                             className={`relative overflow-hidden px-6 py-3 transition-all duration-300 active:scale-[0.98] flex items-center justify-center ${
                                                  isSubscribed 
                                                       ? 'bg-gradient-to-r from-emerald-600 to-emerald-700' 
                                                       : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                                             }`}
                                        >
                                             {isSubscribed ? (
                                                  <>
                                                       <span className="hidden md:inline">Subscribed!</span>
                                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                       </svg>
                                                  </>
                                             ) : (
                                                  <>
                                                       <span className="hidden md:inline">Subscribe</span>
                                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                       </svg>
                                                  </>
                                             )}
                                             <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                                        </button>
                                   </div>
                                   <p className="text-gray-500 text-xs mt-3 italic transition-colors duration-500">
                                        We respect your privacy. Unsubscribe at any time.
                                   </p>
                              </form>

                              {/* Feature cards */}
                              <div className="grid grid-cols-2 gap-3 mt-6">
                                   <div className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-md hover:shadow-indigo-500/10">
                                        <div className="flex items-center gap-2">
                                             <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-8 h-8 rounded-md flex items-center justify-center">
                                                  <Palette size={16} className="text-white" />
                                             </div>
                                             <span className="text-sm font-medium">New Themes</span>
                                        </div>
                                   </div>
                                   <div className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10">
                                        <div className="flex items-center gap-2">
                                             <div className="bg-gradient-to-br from-cyan-600 to-sky-600 w-8 h-8 rounded-md flex items-center justify-center">
                                                  <BookOpen size={16} className="text-white" />
                                             </div>
                                             <span className="text-sm font-medium">Templates</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500 text-sm transition-colors duration-500">
                         <div className="flex flex-col md:flex-row justify-between items-center">
                              <p className="mb-4 md:mb-0">© 2025 NotionNotes. All rights reserved.</p>
                              <div className="flex space-x-6">
                                   {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
                                        <a 
                                             key={index} 
                                             href="#" 
                                             className="text-gray-500 hover:text-cyan-300 transition-colors duration-300 relative group"
                                        >
                                             <span className="relative z-10">{item}</span>
                                             <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>

               {/* Animated background elements */}
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none"></div>

               {/* Custom animations */}
               <style jsx>{`
                    @keyframes float1 {
                         0%, 100% { transform: translate(0, 0); }
                         50% { transform: translate(-5px, -5px); }
                    }
                    @keyframes float2 {
                         0%, 100% { transform: translate(0, 0); }
                         50% { transform: translate(5px, -8px); }
                    }
                    @keyframes float3 {
                         0%, 100% { transform: translate(0, 0); }
                         50% { transform: translate(-3px, 5px); }
                    }
                    .animate-float1 { animation: float1 8s infinite ease-in-out; }
                    .animate-float2 { animation: float2 10s infinite ease-in-out; }
                    .animate-float3 { animation: float3 12s infinite ease-in-out; }
               `}</style>
          </footer>
     );
}