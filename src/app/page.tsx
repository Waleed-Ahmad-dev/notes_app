"use client";

import CTASection from '@/components/LandingPage/CTASection';
import FeaturesSection from '@/components/LandingPage/FeaturesSection';
import Footer from '@/components/LandingPage/Footer';
import HeroSection from '@/components/LandingPage/HeroSection';
import HowItWorksSection from '@/components/LandingPage/HowItWorksSection';
import Navbar from '@/components/LandingPage/Navbar';
import NotesSection from '@/components/LandingPage/NotesSection/NotesSection';
import TestimonialsSection from '@/components/LandingPage/TestimonialsSection';
import { useRouter } from 'next/navigation';
import { useState, useMemo, useCallback, useEffect } from 'react';

const CATEGORIES = [
  { id: 'all', name: 'All Notes', icon: '📝', count: 12 },
  { id: 'work', name: 'Work', icon: '💼', count: 5 },
  { id: 'personal', name: 'Personal', icon: '👤', count: 4 },
  { id: 'ideas', name: 'Ideas', icon: '💡', count: 3 },
  { id: 'travel', name: 'Travel', icon: '✈️', count: 0 },
];

const INITIAL_NOTES = [
  { id: "1", title: 'Meeting Notes', content: 'Discussed project timeline with team members', category: 'work', date: '2023-06-15', starred: true },
  { id: "2", title: 'Shopping List', content: 'Milk, Eggs, Bread, Fruits, Vegetables', category: 'personal', date: '2023-06-14', starred: false },
  { id: "3", title: 'Project Ideas', content: 'New mobile app concept for productivity tracking', category: 'ideas', date: '2023-06-10', starred: true },
];

// Precompute mapped initial notes
const MAPPED_INITIAL_NOTES = INITIAL_NOTES.map(note => ({
  ...note,
  userId: "",
  createdAt: new Date(note.date),
  updatedAt: new Date(note.date)
}));

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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const router = useRouter();
  const [notes, setNotes] = useState(MAPPED_INITIAL_NOTES);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const filteredNotes = useMemo(() => (
    activeTab === 'all'
      ? notes
      : notes.filter(note => note.category === activeTab)
  ), [activeTab, notes]);

  const addNote = useCallback(() => {
    if (!newNote.title.trim()) return;
    
    const note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      category: newNote.category,
      date: new Date().toISOString().split('T')[0],
      starred: false,
      userId: "",
      createdAt: new Date(),
      updatedAt: new Date()
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

  const onSignup = useCallback(() => router.push('/signup'), [router]);
  const onLogin = useCallback(() => router.push('/login'), [router]);

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="pt-20 pb-16">
        <HeroSection
          notes={INITIAL_NOTES}
          onSignup={onSignup}
          onLogin={onLogin}
        />
        <NotesSection
          categories={CATEGORIES}
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