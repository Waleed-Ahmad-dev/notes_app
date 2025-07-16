import { useState, useEffect } from 'react';
import { BookOpen, GitHub, Linkedin, Instagram, Mail } from 'react-feather';

export default function Footer() {
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          setIsVisible(true);
     }, []);

     return (
          <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-950 text-white py-14 transition-colors duration-700">
               {/* Animated background elements */}
               <div className="absolute inset-0 overflow-hidden z-0">
                    {[...Array(15)].map((_, i) => (
                         <div 
                              key={i}
                              className="absolute rounded-full bg-indigo-800/10 animate-pulse"
                              style={{
                                   top: `${Math.random() * 100}%`,
                                   left: `${Math.random() * 100}%`,
                                   width: `${Math.random() * 100 + 20}px`,
                                   height: `${Math.random() * 100 + 20}px`,
                                   animationDuration: `${Math.random() * 10 + 5}s`,
                                   animationDelay: `${Math.random() * 2}s`
                              }}
                         />
                    ))}
               </div>

               {/* Floating particles */}
               <div className="absolute inset-0 z-0">
                    {[...Array(30)].map((_, i) => (
                         <div
                              key={i}
                              className="absolute rounded-full bg-indigo-500 animate-float"
                              style={{
                                   top: `${Math.random() * 100}%`,
                                   left: `${Math.random() * 100}%`,
                                   width: `${Math.random() * 3 + 1}px`,
                                   height: `${Math.random() * 3 + 1}px`,
                                   animationDuration: `${Math.random() * 20 + 10}s`,
                                   animationDelay: `${Math.random() * 5}s`,
                                   opacity: Math.random() * 0.6 + 0.2
                              }}
                         />
                    ))}
               </div>

               <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                         {/* Brand Section */}
                         <div 
                              className={`transform transition-all duration-700 delay-150 ${
                              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                         }`}
                         >
                              <div className="flex items-center space-x-3 mb-6 group">
                                   <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-all duration-500 group-hover:shadow-indigo-500/50 group-hover:scale-105">
                                        <BookOpen size={24} className="text-white" />
                                   </div>
                                   <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300">
                                        Notion<span className="text-indigo-400 group-hover:text-purple-300 transition-colors">Notes</span>
                                   </h1>
                              </div>
                              <p className="text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                                   The modern note-taking app designed to help you capture ideas, organize thoughts, and boost productivity.
                              </p>
                              <div className="flex space-x-5">
                                   {[
                                        { icon: GitHub, href: "https://github.com/Waleed-Ahmad-dev" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/waleed-ahmed2009/" },
                                        { icon: Instagram, href: "https://www.instagram.com/shadow.scripter.poet?igsh=N3lxdTdkbG9odnc5" },
                                        { icon: Mail, href: "mailto:itswaleedqureshi@gmail.com" }
                                   ].map((social, i) => (
                                        <a 
                                             key={i}
                                             href={social.href} 
                                             className="bg-gray-800/50 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600/30 hover:shadow-lg hover:shadow-indigo-500/20"
                                        >
                                             <social.icon size={20} />
                                        </a>
                                   ))}
                              </div>
                         </div>

                         {/* Product Links */}
                         <LinkSection 
                              title="Product" 
                              links={["Features", "Pricing", "Integrations", "Roadmap"]} 
                              delay={200}
                              isVisible={isVisible}
                         />

                         {/* Resources Links */}
                         <LinkSection 
                              title="Resources" 
                              links={["Blog", "Tutorials", "Documentation", "Community"]} 
                              delay={250}
                              isVisible={isVisible}
                         />

                         {/* Newsletter Section */}
                         <div 
                              className={`transform transition-all duration-700 delay-300 ${
                                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                              }`}
                         >
                              <h3 className="font-bold text-lg mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 after:transition-all after:duration-500 hover:after:w-16">
                                   Subscribe
                              </h3>
                              <p className="text-gray-300 mb-5 leading-relaxed transition-colors duration-300">
                                   Get product updates and productivity tips delivered to your inbox.
                              </p>
                              <div className="relative group">
                                   <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                                   <div className="relative flex shadow-lg shadow-indigo-500/10 rounded-lg overflow-hidden">
                                        <input
                                             type="email"
                                             placeholder="Your email"
                                             className="bg-gray-800/70 backdrop-blur-sm text-white px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
                                        />
                                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 active:scale-[0.98] flex items-center justify-center relative overflow-hidden group">
                                             <span className="hidden md:inline relative z-10">Subscribe</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden relative z-10" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                             </svg>
                                             <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                   </div>
                              </div>
                              <p className="text-gray-500 text-xs mt-3 italic transition-colors duration-300">
                                   We respect your privacy. Unsubscribe at any time.
                              </p>
                         </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div 
                         className={`border-t border-gray-800 mt-14 pt-8 text-center text-gray-500 text-sm transition-colors duration-700 delay-500 ${
                              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                         }`}
                    >
                         <div className="flex flex-col md:flex-row justify-between items-center">
                              <p>© 2025 NotionNotes. All rights reserved.</p>
                              <div className="mt-4 md:mt-0 flex space-x-6">
                                   {["Privacy Policy", "Terms of Service", "Cookies"].map((item, i) => (
                                        <a 
                                             key={i}
                                             href="#" 
                                             className="text-gray-500 hover:text-gray-300 transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-gradient-to-r from-indigo-500 to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                                        >
                                             {item}
                                        </a>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>

               {/* Custom CSS for animations */}
               <style jsx global>{`
                    @keyframes float {
                         0% { transform: translateY(0) translateX(0) rotate(0); }
                         33% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
                         66% { transform: translateY(10px) translateX(-10px) rotate(-5deg); }
                         100% { transform: translateY(0) translateX(0) rotate(0); }
                    }

                    .animate-float {
                         animation: float 15s infinite ease-in-out;
                    }

                    .animate-pulse-slow {
                         animation: pulse 8s infinite cubic-bezier(0.4, 0, 0.6, 1);
                    }

                    @keyframes pulse {
                         0%, 100% { opacity: 0.2; }
                         50% { opacity: 0.5; }
                    }
               `}</style>
          </footer>
     );
}

type LinkSectionProps = {
     title: string;
     links: string[];
     delay: number;
     isVisible: boolean;
};

function LinkSection({ title, links, delay, isVisible }: LinkSectionProps) {
     return (
          <div 
               className={`transform transition-all duration-700 delay-${delay} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
               }`}
          >
               <h3 className="font-bold text-lg mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 after:transition-all after:duration-500 hover:after:w-16">
                    {title}
               </h3>
               <ul className="space-y-3">
                    {links.map((link, i) => (
                         <li key={i}>
                              <a 
                                   href="#" 
                                   className="text-gray-300 hover:text-white transition-all duration-300 inline-block transform group"
                              >
                                   <span className="flex items-center">
                                        <svg 
                                             className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" 
                                             fill="none" 
                                             stroke="currentColor" 
                                             viewBox="0 0 24 24"
                                        >
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                        {link}
                                   </span>
                                   <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-1"></span>
                              </a>
                         </li>
                    ))}
               </ul>
          </div>
     );
}