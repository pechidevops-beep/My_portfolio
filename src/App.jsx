// src/App.jsx
import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { WorkProcess } from './components/WorkProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SmoothScrollProvider, useSmoothScroll } from './context/SmoothScrollContext';

function ScrollProgressBar() {
  const { scrollProgress } = useSmoothScroll();
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none origin-left bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400"
      style={{
        transform: `scaleX(${scrollProgress / 100})`,
        boxShadow: '0 0 12px rgba(34, 197, 94, 0.7)',
        transformOrigin: '0% 50%',
      }}
    />
  );
}

function FloatingBackToTop() {
  const { scrollProgress, scrollTo } = useSmoothScroll();
  const visible = scrollProgress > 15;

  return (
    <button
      type="button"
      onClick={() => scrollTo(0, { duration: 1.3 })}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#0f1420]/90 border border-white/15 text-slate-300 hover:text-white hover:border-emerald-400/50 hover:bg-[#151c2c] backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 text-emerald-400" />
    </button>
  );
}

function PortfolioContent() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceCategory) => {
    setSelectedService(serviceCategory);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-400 relative">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services onSelectService={handleSelectService} />
        <WorkProcess />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <FloatingBackToTop />
    </div>
  );
}

export function App() {
  return (
    <SmoothScrollProvider>
      <PortfolioContent />
    </SmoothScrollProvider>
  );
}

export default App;
