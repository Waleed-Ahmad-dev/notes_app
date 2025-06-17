"use client";

import { LayoutGrid, User } from "lucide-react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Calendar, ChevronDown, ChevronUp, Cloud, Edit, FileText, Folder, GitHub, Instagram, Linkedin, Mail, Menu, Moon, Plus, Search, Star, Sun, Tag, X } from "react-feather";
import { AnimatePresence, motion } from 'framer-motion';

export default function ModernNotesApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting Notes', content: 'Discuss project timeline with team', category: 'work', date: '2023-06-10', starred: true },
    { id: 2, title: 'Shopping List', content: 'Milk, Eggs, Bread, Fruits', category: 'personal', date: '2023-06-12', starred: false },
    { id: 3, title: 'Book Ideas', content: 'Sci-fi novel about space exploration', category: 'ideas', date: '2023-06-08', starred: true },
    { id: 4, title: 'Project Plan', content: 'Outline for new client project', category: 'work', date: '2023-06-05', starred: false },
    { id: 5, title: 'Vacation Plans', content: 'Research hotels in Bali', category: 'travel', date: '2023-06-15', starred: false },
  ]);
  const [newNote, setNewNote] = useState({ title: '', content: '', category: 'personal' });
  const [createNoteVisible, setCreateNoteVisible] = useState(false);
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Notes', icon: <LayoutGrid size={18} />, count: notes.length },
    { id: 'work', name: 'Work', icon: <FileText size={18} />, count: notes.filter(n => n.category === 'work').length },
    { id: 'personal', name: 'Personal', icon: <User size={18} />, count: notes.filter(n => n.category === 'personal').length },
    { id: 'ideas', name: 'Ideas', icon: <Star size={18} />, count: notes.filter(n => n.category === 'ideas').length },
    { id: 'travel', name: 'Travel', icon: <Calendar size={18} />, count: notes.filter(n => n.category === 'travel').length },
  ];

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleStar = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, starred: !note.starred } : note
    ));
  };

  const addNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note = {
        id: notes.length + 1,
        title: newNote.title,
        content: newNote.content,
        category: newNote.category,
        date: new Date().toISOString().split('T')[0],
        starred: false
      };
      setNotes([note, ...notes]);
      setNewNote({ title: '', content: '', category: 'personal' });
      setCreateNoteVisible(false);
    }
  };

  const deleteNote = (id: number | null) => {
    setNotes(notes.filter(note => note.id !== id));
    if (expandedNote === id) setExpandedNote(null);
  };

  const filteredNotes = activeTab === 'all' 
    ? notes 
    : notes.filter(note => note.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>Modern Notes App</title>
        <meta name="description" content="Organize your thoughts effortlessly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-800/80 dark:shadow-gray-900/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <BookOpen size={18} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notion<span className="text-indigo-600 dark:text-indigo-400">Notes</span></h1>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Testimonials</a>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center">
              Get Started <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 border-t dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2">Features</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2">How It Works</a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2">Testimonials</a>
              <button className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Organize Your Thoughts, <br className="hidden md:block" />Effortlessly
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl mb-8 max-w-lg"
                >
                  The modern note-taking app that helps you capture ideas, organize thoughts, and boost productivity.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                  <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                    Watch Demo
                  </button>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-md mx-auto shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Recent Notes</h3>
                    <button className="bg-white/20 p-2 rounded-lg">
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {notes.slice(0, 3).map(note => (
                      <div key={note.id} className="bg-white/10 p-4 rounded-xl backdrop-blur">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{note.title}</h4>
                          <Star 
                            size={16} 
                            className={note.starred ? "text-yellow-400 fill-yellow-400" : "text-white"} 
                          />
                        </div>
                        <p className="text-sm text-white/80 mt-1 truncate">{note.content}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs bg-indigo-500 px-2 py-1 rounded">{note.category}</span>
                          <span className="text-xs opacity-75">{note.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 sticky top-24"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Categories</h2>
                    <button 
                      onClick={() => setCreateNoteVisible(true)}
                      className="bg-indigo-600 dark:bg-indigo-700 text-white p-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`flex justify-between items-center w-full p-3 rounded-lg transition-colors ${
                          activeTab === category.id 
                            ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTab(category.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`${activeTab === category.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}>
                            {category.icon}
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                        </div>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Important', 'To-Do', 'Ideas', 'Meeting', 'Personal'].map(tag => (
                        <span 
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Notes Grid */}
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {categories.find(c => c.id === activeTab)?.name || 'All Notes'}
                  </h2>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search notes..." 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500"
                    />
                    <Search size={18} className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
                
                <AnimatePresence>
                  {createNoteVisible && (
                    <motion.div 
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h3 className="font-bold text-lg mb-4 dark:text-white">Create New Note</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Title"
                          className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          value={newNote.title}
                          onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                        />
                        <textarea
                          placeholder="Content"
                          rows={4}
                          className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          value={newNote.content}
                          onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                        />
                        <div className="flex justify-between">
                          <select
                            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500"
                            value={newNote.category}
                            onChange={(e) => setNewNote({...newNote, category: e.target.value})}
                          >
                            <option value="personal">Personal</option>
                            <option value="work">Work</option>
                            <option value="ideas">Ideas</option>
                            <option value="travel">Travel</option>
                          </select>
                          <div className="space-x-3">
                            <button 
                              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                              onClick={() => setCreateNoteVisible(false)}
                            >
                              Cancel
                            </button>
                            <button 
                              className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600"
                              onClick={addNote}
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {filteredNotes.length === 0 ? (
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-indigo-100 dark:bg-indigo-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Edit size={24} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No notes found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Create your first note to get started</p>
                    <button 
                      className="bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600"
                      onClick={() => setCreateNoteVisible(true)}
                    >
                      Create Note
                    </button>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNotes.map(note => (
                      <motion.div
                        key={note.id}
                        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden ${
                          expandedNote === note.id ? 'md:col-span-2 lg:col-span-3' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="p-5">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-white">{note.title}</h3>
                            <button 
                              onClick={() => toggleStar(note.id)}
                              className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400"
                            >
                              <Star 
                                size={18} 
                                className={note.starred ? "text-yellow-400 fill-yellow-400" : ""} 
                              />
                            </button>
                          </div>
                          
                          <div className="flex items-center mt-2 mb-4">
                            <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs px-2 py-1 rounded mr-2 capitalize">
                              {note.category}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{note.date}</span>
                          </div>
                          
                          <p className={`text-gray-600 dark:text-gray-400 ${expandedNote === note.id ? '' : 'line-clamp-3'}`}>
                            {note.content}
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-100 dark:border-gray-700 px-5 py-3 flex justify-between">
                          <div className="flex space-x-2">
                            <button 
                              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                              onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                            >
                              {expandedNote === note.id ? (
                                <ChevronUp size={18} />
                              ) : (
                                <ChevronDown size={18} />
                              )}
                            </button>
                            <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                              <Tag size={18} />
                            </button>
                          </div>
                          <button 
                            className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
                            onClick={() => deleteNote(note.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Powerful Features</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Designed to boost your productivity and help you organize your thoughts effortlessly
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Edit size={36} className="text-indigo-600 dark:text-indigo-400" />, 
                  title: 'Easy Note-Taking', 
                  description: 'Create and edit notes with a beautiful, distraction-free interface that focuses on your content.' 
                },
                { 
                  icon: <Search size={36} className="text-indigo-600 dark:text-indigo-400" />, 
                  title: 'Powerful Search', 
                  description: 'Find anything instantly with our advanced search that indexes all your notes in real-time.' 
                },
                { 
                  icon: <Cloud size={36} className="text-indigo-600 dark:text-indigo-400" />, 
                  title: 'Cloud Sync', 
                  description: 'Access your notes from any device with our seamless cloud synchronization.' 
                },
                { 
                  icon: <Tag size={36} className="text-indigo-600 dark:text-indigo-400" />, 
                  title: 'Smart Organization', 
                  description: 'Categorize and tag your notes for effortless organization and retrieval.' 
                },
                { 
                  icon: <Folder size={36} className="text-indigo-600 dark:text-indigo-400" />, 
                  title: 'Collections', 
                  description: 'Group related notes into collections for projects, topics, or areas of interest.' 
                },
                { 
                  icon: <Calendar size={36} className="text-indigo-600 dark:text-indigo-400" />, 
                  title: 'Reminders', 
                  description: 'Set reminders for important notes so you never miss a deadline or task.' 
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-indigo-100 dark:bg-indigo-900/40 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">How It Works</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get started in minutes and transform how you capture and organize information
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Sign Up', description: 'Create your free account in seconds' },
                { step: 2, title: 'Create Notes', description: 'Start capturing your ideas and thoughts' },
                { step: 3, title: 'Organize', description: 'Categorize and tag your notes for easy access' },
                { step: 4, title: 'Access Anywhere', description: 'Use on all your devices seamlessly' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-indigo-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What Our Users Say</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join thousands of satisfied users who transformed their productivity with NotionNotes
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "NotionNotes has completely transformed how I organize my daily tasks. It's intuitive, powerful, and beautiful to use!",
                  author: "Jane Doe",
                  role: "Product Manager"
                },
                {
                  quote: "I love the cloud sync feature. I can access my notes from my laptop, tablet, or phone seamlessly. A game-changer!",
                  author: "John Smith",
                  role: "Software Engineer"
                },
                {
                  quote: "The tagging system makes finding old notes effortless. I've finally stopped losing important ideas and meeting notes.",
                  author: "Sarah Johnson",
                  role: "Marketing Director"
                },
                {
                  quote: "As a writer, NotionNotes has become my digital notebook. The clean interface helps me focus on my thoughts without distractions.",
                  author: "Michael Chen",
                  role: "Author"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className="text-yellow-400 fill-yellow-400 mr-1" 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Get Organized?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Join thousands of users who are already organizing their thoughts with NotionNotes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mr-4">
                Get Started for Free
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule a Demo
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}