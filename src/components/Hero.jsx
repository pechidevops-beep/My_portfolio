// src/components/Hero.jsx
import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import { AnimaticCard } from './AnimaticCard';

const TECH_BADGES = [
  { name: 'React (Vite)', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10' },
  { name: 'JavaScript (ES6+)', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/10' },
  { name: 'Node.js & Express', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' },
  { name: 'PostgreSQL & SQL', color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
  { name: 'Docker', color: 'text-sky-400 border-sky-500/20 bg-sky-500/10' },
  { name: 'Tailwind CSS', color: 'text-teal-400 border-teal-500/20 bg-teal-500/10' },
];

export const Hero = () => {
  const { scrollTo } = useSmoothScroll();

  const handleScrollTo = (id) => {
    scrollTo('#' + id);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[300px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Available for Freelance Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              I build digital experiences that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400">
                drive results.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              I'm <strong className="text-white font-semibold">Pechi Muthu</strong>, a full-stack developer focused on creating modern, responsive, and high-performance web applications that help businesses and founders grow.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-500/40 transition-all cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Social Links & Verified Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/pechidevops-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pechi-muthu-s-6703b4299"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:pechi8001@gmail.com"
                  aria-label="Direct Email"
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://www.codechef.com/users/pechi8001"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodeChef Profile"
                  className="px-2.5 py-1.5 text-xs font-mono text-slate-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
                >
                  CodeChef
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pechi's Profile Card & Tech Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-lime-500/20 rounded-3xl blur-xl opacity-70" />

              {/* Main Profile Glass Card */}
              <AnimaticCard
                className="p-5 sm:p-6 shadow-2xl backdrop-blur-xl"
                spotlightColor="rgba(34, 197, 94, 0.18)"
                borderColor="rgba(34, 197, 94, 0.45)"
                tiltFactor={4}
              >
                {/* Photo & Status */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/4.6] bg-slate-900 border border-white/10 mb-5 group">
                  <img
                    src="/pechi.jpg"
                    alt="Pechi Muthu - Full Stack Developer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f17] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090b10]/85 border border-white/15 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-mono text-white font-semibold">Pechi Muthu</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">Full Stack Dev</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                      Final-Year B.Tech IT • 2 Completed Internships
                    </p>
                  </div>
                </div>

                {/* Tech Highlights Pills */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Technologies</span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Modern Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {TECH_BADGES.map((tech) => (
                      <span
                        key={tech.name}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md border ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

              </AnimaticCard>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
