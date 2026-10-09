// src/components/Skills.jsx
import React, { useState } from 'react';
import { skills, skillCategories } from '../data/skills';
import { DynamicIcon } from './DynamicIcon';
import { Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimaticCard } from './AnimaticCard';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools & frameworks I work with.
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-base">
              A curated overview of technologies used in my production deployments, internships, and full-stack projects.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{skills.length} Core Technologies</span>
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-emerald-400 text-black font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <AnimaticCard
              key={skill.name}
              className="p-5 flex flex-col justify-between group duration-200"
              spotlightColor="rgba(34, 197, 94, 0.12)"
              borderColor="rgba(34, 197, 94, 0.35)"
              tiltFactor={3}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={skill.iconName} className="w-5 h-5" fallback="Code2" />
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    skill.level === 'Advanced'
                      ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                      : skill.level === 'Specialized'
                      ? 'text-purple-400 border-purple-500/30 bg-purple-500/10'
                      : 'text-sky-400 border-sky-500/30 bg-sky-500/10'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="capitalize">{skill.category}</span>
                <span className="text-emerald-400/80 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready for Production
                </span>
              </div>
            </AnimaticCard>
          ))}
        </div>

      </div>
    </section>
  );
};
