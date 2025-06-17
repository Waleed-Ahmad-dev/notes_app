import { BookOpen, GitHub, Linkedin, Instagram, Mail } from 'react-feather';

export default function Footer() {
     return (
          <footer className="bg-gray-900 text-white py-12">
               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         <div>
                              <div className="flex items-center space-x-2 mb-4">
                                   <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
                                        <BookOpen size={18} className="text-white" />
                                   </div>
                                   <h1 className="text-xl font-bold">Notion<span className="text-indigo-400">Notes</span></h1>
                              </div>
                              <p className="text-gray-400 mb-4">
                                   The modern note-taking app designed to help you capture ideas, organize thoughts, and boost productivity.
                              </p>
                              <div className="flex space-x-4">
                                   <a href="https://github.com/Waleed-Ahmad-dev" className="text-gray-400 hover:text-white transition-colors">
                                        <GitHub size={20} />
                                   </a>
                                   <a href="https://www.linkedin.com/in/waleed-ahmed2009/" className="text-gray-400 hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                   </a>
                                   <a href="https://www.instagram.com/shadow.scripter.poet?igsh=N3lxdTdkbG9odnc5" className="text-gray-400 hover:text-white transition-colors">
                                        <Instagram size={20} />
                                   </a>
                                   <a href="mailto:itswaleedqureshi@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        <Mail size={20} />
                                   </a>
                              </div>
                         </div>
               
                         <div>
                              <h3 className="font-bold text-lg mb-4">Product</h3>
                              <ul className="space-y-2">
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="font-bold text-lg mb-4">Resources</h3>
                              <ul className="space-y-2">
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                              </ul>
                         </div>
               
                         <div>
                              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
                              <p className="text-gray-400 mb-4">
                                   Get product updates and productivity tips delivered to your inbox.
                              </p>
                              <div className="flex">
                                   <input 
                                        type="email" 
                                        placeholder="Your email" 
                                        className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />
                                        <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                                             Subscribe
                                        </button>
                              </div>
                         </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                         © 2025 NotionNotes. All rights reserved.
                    </div>
               </div>
          </footer>
     );
}