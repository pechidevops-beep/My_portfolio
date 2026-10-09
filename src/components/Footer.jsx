import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useSmoothScroll } from '../context/SmoothScrollContext';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { scrollTo } = useSmoothScroll();

  const scrollToTop = () => {
    scrollTo(0, { duration: 1.5 });
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    scrollTo(hash, { offset: -70 });
  };

  return (
    <footer className="bg-[#07090e] border-t border-white/10 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#hero"
              className="flex items-center gap-2 font-mono text-lg font-bold text-white mb-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span>
                Pechi<span className="text-emerald-400">.dev</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Full Stack Developer & IT Engineer crafting modern, responsive, and resilient digital experiences with React, Node.js, and containerized architectures.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/pechidevops-beep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/pechi-muthu-s-6703b4299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:pechi8001@gmail.com"
                aria-label="Email Pechi"
                className="p-2.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-4">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-emerald-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-emerald-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-emerald-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-emerald-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-emerald-400 transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-emerald-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Resume (PDF)</a>
              </li>
            </ul>
          </div>

          {/* Location & Status */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-4">
                Location & Availability
              </span>
              <p className="text-sm text-slate-400 mb-2">
                Kovilpatti, Tamil Nadu, India
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Client Work</span>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {CURRENT_YEAR} Pechi Muthu. Built with React, Vite & Tailwind CSS.</p>
          <p className="font-mono text-[11px] text-slate-500">
            Design Taste: Anti-Slop Minimal Dark Tech
          </p>
        </div>

      </div>
    </footer>
  );
};
