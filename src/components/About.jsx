// src/components/About.jsx
import React, { useState } from 'react';
import { FileDown, ArrowUpRight, GraduationCap, Briefcase, Award, CheckCircle, Code2, Sparkles, MapPin } from 'lucide-react';
import { internships, education, certifications } from '../data/experience';

import { useSmoothScroll } from '../context/SmoothScrollContext';
import { AnimaticCard } from './AnimaticCard';

export const About = () => {
  const [activeTab, setActiveTab] = useState('philosophy');
  const { scrollTo } = useSmoothScroll();

  const scrollToContact = () => {
    scrollTo('#contact');
  };

  return (
    <section id="about" className="py-24 relative bg-[#0b0e14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering with focus, precision, and passion.
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-base">
            Get to know my background, development principles, verified internship experience, and academic track record.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimaticCard
              className="p-3"
              spotlightColor="rgba(34, 197, 94, 0.16)"
              borderColor="rgba(34, 197, 94, 0.4)"
              tiltFactor={3.5}
            >
              <div className="aspect-[4/4.5] rounded-xl overflow-hidden relative">
                <img
                  src="/pechi.jpg"
                  alt="Pechi Muthu Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Kovilpatti & Madurai, Tamil Nadu</span>
                  </div>
                  <h3 className="text-lg font-bold">Pechi Muthu</h3>
                  <p className="text-xs text-slate-300">B.Tech IT • Full Stack Developer</p>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-2xl font-bold font-mono text-emerald-400">4+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Shipped Projects</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-2xl font-bold font-mono text-emerald-400">2</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Internships</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-2xl font-bold font-mono text-emerald-400">8.0</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">B.Tech CGPA / 10</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="block text-2xl font-bold font-mono text-emerald-400">3+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Certifications</span>
                </div>
              </div>
            </AnimaticCard>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume.pdf"
                download="Pechi_Muthu_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
              >
                <FileDown className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume</span>
              </a>
              <button
                type="button"
                onClick={scrollToContact}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 transition-all"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Bio & Interactive Experience Tabs */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Tab Controls */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('philosophy')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === 'philosophy'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Introduction & Philosophy</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === 'experience'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Internships (2)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('academics')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === 'academics'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education & Honors</span>
              </button>
            </div>

            {/* Tab 1: Introduction & Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="space-y-6 text-slate-300 leading-relaxed animate-in fade-in duration-200">
                <p className="text-base sm:text-lg text-slate-200 font-normal">
                  I'm a passionate web developer who enjoys turning ideas into functional, attractive digital products. I focus on building responsive interfaces, writing maintainable code, and creating experiences that are intuitive for users.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Architecture-First Thinking</h4>
                    <p className="text-xs text-slate-400">
                      Structuring scalable RESTful endpoints, normalized schemas, and containerized pipelines from day one.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Modern UI & Performance</h4>
                    <p className="text-xs text-slate-400">
                      Crafting fast, accessible client experiences using React, Vite, and ergonomic Tailwind design tokens.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400">
                  I'm continuously improving my skills and exploring modern web technologies to deliver better solutions. Whether working on client freelance initiatives or full-time software engineering roles, I take pride in clear communication, clean Git commits, and reliable delivery.
                </p>

                {/* Developer Philosophy Quote Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-2 border-emerald-400 pl-4 text-xs font-mono text-slate-300">
                  "Writing software isn't just about making features run; it's about making them readable, observable, and resilient against real-world drift."
                </div>
              </div>
            )}

            {/* Tab 2: Internships */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {internships.map((job) => (
                  <div key={job.company} className="p-5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-emerald-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-white font-bold text-base">{job.role}</h4>
                        <span className="text-emerald-400 font-medium text-sm">{job.company}</span>
                        <span className="text-slate-400 text-xs ml-2">• {job.location}</span>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Academics & Certifications */}
            {activeTab === 'academics' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Degrees */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Formal Education</h4>
                  {education.map((edu) => (
                    <div key={edu.institution} className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-white font-semibold text-sm">{edu.degree}</span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{edu.institution} ({edu.period})</p>
                      <p className="text-xs text-slate-300 mt-2">{edu.details}</p>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Verified Certifications</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {certifications.map((cert) => (
                      <div key={cert.title} className="p-3 rounded-lg bg-slate-900/40 border border-white/5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-medium text-white block">{cert.title}</span>
                            <span className="text-[11px] text-slate-400">{cert.issuer} • {cert.year}</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap">
                          {cert.recognition}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
