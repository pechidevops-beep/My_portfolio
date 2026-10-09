import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, FileDown } from 'lucide-react';
import { useSmoothScroll } from '../context/SmoothScrollContext';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollTo } = useSmoothScroll();

  // Monitor scroll for sticky styles & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'services', 'process', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href, { offset: -70 });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group font-mono text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md px-1"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              Pechi<span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Open Resume PDF in new tab"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 active:scale-95 rounded-lg shadow-sm shadow-emerald-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090b10]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-white border border-white/10 rounded-lg bg-white/5"
              aria-label="View Resume"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-white/10 rounded-lg bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0f17]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-2">
              <a
                href="/resume.pdf"
                download="Pechi_Muthu_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 border border-white/15 rounded-lg bg-white/5"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
