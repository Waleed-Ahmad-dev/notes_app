import { BookOpen, GitHub, Linkedin, Instagram, Mail } from 'react-feather';

export default function Footer() {
     return (
          <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-14">
               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                         <div>
                              <div className="flex items-center space-x-3 mb-6">
                                   <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                        <BookOpen size={20} className="text-white" />
                                   </div>
                                   <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                                        Notion<span className="text-indigo-400">Notes</span>
                                   </h1>
                              </div>
                              <p className="text-gray-400 mb-6 leading-relaxed">
                                   The modern note-taking app designed to help you capture ideas, organize thoughts, and boost productivity.
                              </p>
                              <div className="flex space-x-5">
                                   <a href="https://github.com" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                                        <GitHub size={22} />
                                   </a>
                                   <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                                        <Linkedin size={22} />
                                   </a>
                                   <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                                        <Instagram size={22} />
                                   </a>
                                   <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                                        <Mail size={22} />
                                   </a>
                              </div>
                         </div>
               
                         <div>
                              <h3 className="font-bold text-lg mb-5 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500">Product</h3>
                              <ul className="space-y-3">
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Features
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Pricing
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Integrations
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Roadmap
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="font-bold text-lg mb-5 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500">Resources</h3>
                              <ul className="space-y-3">
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Blog
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Tutorials
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Documentation
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:translate-x-1 group">
                                             Community
                                             <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 transition-all duration-300 mt-0.5"></span>
                                        </a>
                                   </li>
                              </ul>
                         </div>
               
                         <div>
                              <h3 className="font-bold text-lg mb-5 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-purple-500">Subscribe</h3>
                              <p className="text-gray-400 mb-5 leading-relaxed">
                                   Get product updates and productivity tips delivered to your inbox.
                              </p>
                              <div className="flex shadow-lg shadow-indigo-500/10 rounded-lg overflow-hidden">
                                   <input 
                                        type="email" 
                                        placeholder="Your email" 
                                        className="bg-gray-800 text-white px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
                                   />
                                   <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 active:scale-[0.98] active:opacity-90 flex items-center justify-center">
                                        <span className="hidden md:inline">Subscribe</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden" viewBox="0 0 20 20" fill="currentColor">
                                             <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                   </button>
                              </div>
                              <p className="text-gray-500 text-xs mt-3 italic">
                                   We respect your privacy. Unsubscribe at any time.
                              </p>
                         </div>
                    </div>

                    <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500 text-sm">
                         <div className="flex flex-col md:flex-row justify-between items-center">
                              <p>© 2025 NotionNotes. All rights reserved.</p>
                              <div className="mt-4 md:mt-0 flex space-x-6">
                                   <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
                                   <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
                                   <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Cookies</a>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
}