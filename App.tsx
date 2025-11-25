import React, { useState, useEffect } from 'react';
import { Background } from './components/Layout/Background';
import { Dock } from './components/Layout/Dock';
import { Hero } from './components/Sections/Hero';
import { Projects } from './components/Sections/Projects';
import { About } from './components/Sections/About';
import { Contact } from './components/Sections/Contact';
import { SectionId } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isScrolling, setIsScrolling] = useState(false);

  // Helper to handle smooth transitions
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onExplore={() => setActiveSection('work')} />;
      case 'work':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onExplore={() => setActiveSection('work')} />;
    }
  };

  // Optional: Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-white/30 selection:text-white">
      <Background />
      
      {/* Main Content Area */}
      <main className="relative z-10 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Navigation Dock */}
      <Dock activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Top Left Branding */}
      <div className="fixed top-8 left-8 z-40 hidden md:block">
        <button 
          onClick={() => setActiveSection('home')}
          className="text-2xl font-bold tracking-tight text-white/90 hover:text-white transition-colors"
        >
          Lumina.
        </button>
      </div>

       {/* Top Right Social Links */}
       <div className="fixed top-8 right-8 z-40 hidden md:flex gap-4">
         <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Twitter</a>
         <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
       </div>
    </div>
  );
};

export default App;