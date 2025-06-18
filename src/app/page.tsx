"use client";

import CTASection from '@/components/LandingPage/CTASection';
import FeaturesSection from '@/components/LandingPage/FeaturesSection';
import Footer from '@/components/LandingPage/Footer';
import HeroSection from '@/components/LandingPage/HeroSection';
import HowItWorksSection from '@/components/LandingPage/HowItWorksSection';
import Navbar from '@/components/LandingPage/Navbar';
import NotesSection from '@/components/LandingPage/NotesSection/NotesSection';
import TestimonialsSection from '@/components/LandingPage/TestimonialsSection';
import { useState, useMemo, useCallback } from 'react';

// Static categories moved outside component
const CATEGORIES = [
  { id: 'all', name: 'All Notes', icon: '📝', count: 12 },
  { id: 'work', name: 'Work', icon: '💼', count: 5 },
  { id: 'personal', name: 'Personal', icon: '👤', count: 4 },
  { id: 'ideas', name: 'Ideas', icon: '💡', count: 3 },
  { id: 'travel', name: 'Travel', icon: '✈️', count: 0 },
];

// Initial notes data
const INITIAL_NOTES = [
  { id: "1", title: 'Meeting Notes', content: 'Discussed project timeline with team members', category: 'work', date: '2023-06-15', starred: true },
  { id: "2", title: 'Shopping List', content: 'Milk, Eggs, Bread, Fruits, Vegetables', category: 'personal', date: '2023-06-14', starred: false },
  { id: "3", title: 'Project Ideas', content: 'New mobile app concept for productivity tracking', category: 'ideas', date: '2023-06-10', starred: true },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [createNoteVisible, setCreateNoteVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    category: 'personal'
  });

  const [notes, setNotes] = useState(INITIAL_NOTES);

  // Memoized filtered notes
  const filteredNotes = useMemo(() => (
    activeTab === 'all'
      ? notes
      : notes.filter(note => note.category === activeTab)
  ), [activeTab, notes]);

  // Memoized mapped notes
  const mappedNotes = useMemo(() => (
    notes.map(note => ({ 
      ...note, 
      userId: "", 
      createdAt: new Date(note.date), 
      updatedAt: new Date(note.date) 
    }))
  ), [notes]);

  // Memoized mapped filtered notes
  const mappedFilteredNotes = useMemo(() => (
    filteredNotes.map(note => ({ 
      ...note, 
      userId: "", 
      createdAt: new Date(note.date), 
      updatedAt: new Date(note.date) 
    }))
  ), [filteredNotes]);

  // Optimized callbacks
  const addNote = useCallback(() => {
    if (newNote.title.trim() === '') return;
    const note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      category: newNote.category,
      date: new Date().toISOString().split('T')[0],
      starred: false
    };

    setNotes(prev => [note, ...prev]);
    setNewNote({ title: '', content: '', category: 'personal' });
    setCreateNoteVisible(false);
  }, [newNote]);

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
    if (expandedNote === id) setExpandedNote(null);
  }, [expandedNote]);

  const toggleStar = useCallback((id: string) => {
    setNotes(prev => prev.map(note =>
      note.id === id ? { ...note, starred: !note.starred } : note
    ));
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="pt-20 pb-16">
        <HeroSection notes={notes} />
        <NotesSection
          categories={CATEGORIES}
          notes={mappedNotes}
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
          filteredNotes={mappedFilteredNotes}
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