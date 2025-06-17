"use client";

import CTASection from '@/components/CTASection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Navbar from '@/components/Navbar';
import NotesSection from '@/components/NotesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [createNoteVisible, setCreateNoteVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const [newNote, setNewNote] = useState({ 
    title: '', 
    content: '', 
    category: 'personal' 
  });

  // Sample data
  const [notes, setNotes] = useState([
    { id: "1", title: 'Meeting Notes', content: 'Discussed project timeline with team members', category: 'work', date: '2023-06-15', starred: true },
    { id: "2", title: 'Shopping List', content: 'Milk, Eggs, Bread, Fruits, Vegetables', category: 'personal', date: '2023-06-14', starred: false },
    { id: "3", title: 'Project Ideas', content: 'New mobile app concept for productivity tracking', category: 'ideas', date: '2023-06-10', starred: true },
  ]);

  const [categories] = useState([
    { id: 'all', name: 'All Notes', icon: '📝', count: 12 },
    { id: 'work', name: 'Work', icon: '💼', count: 5 },
    { id: 'personal', name: 'Personal', icon: '👤', count: 4 },
    { id: 'ideas', name: 'Ideas', icon: '💡', count: 3 },
    { id: 'travel', name: 'Travel', icon: '✈️', count: 0 },
  ]);

  const filteredNotes = activeTab === 'all' 
    ? notes 
    : notes.filter(note => note.category === activeTab);

  const addNote = () => {
    if (newNote.title.trim() === '') return;
    
    const note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      category: newNote.category,
      date: new Date().toISOString().split('T')[0],
      starred: false
    };
    
    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '', category: 'personal' });
    setCreateNoteVisible(false);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (expandedNote === id) setExpandedNote(null);
  };

  const toggleStar = (id: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, starred: !note.starred } : note
    ));
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="pt-20 pb-16">
        <HeroSection notes={notes} />
        <NotesSection 
          categories={categories}
          notes={notes}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          createNoteVisible={createNoteVisible}
          setCreateNoteVisible={setCreateNoteVisible}
          newNote={newNote}
          setNewNote={setNewNote}
          addNote={addNote}
          deleteNote={deleteNote}
          toggleStar={toggleStar}
          expandedNote={expandedNote}
          setExpandedNote={setExpandedNote}
          filteredNotes={filteredNotes}
        />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;