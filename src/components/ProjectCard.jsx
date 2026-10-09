// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { AnimaticCard } from './AnimaticCard';

export const ProjectCard = ({ project, onInspect }) => {
  return (
    <AnimaticCard
      className="group flex flex-col justify-between"
      spotlightColor="rgba(34, 197, 94, 0.16)"
      borderColor="rgba(34, 197, 94, 0.45)"
      tiltFactor={5}
    >
      {/* Top Banner & Simulated Tech UI Mockup */}
      <div className="relative p-5 pb-4 bg-gradient-to-b from-white/[0.04] to-transparent border-b border-white/5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/30" />
            <span className="text-[11px] font-mono text-slate-400 ml-1.5">source://{project.id}</span>
          </div>
          
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            {project.badge}
          </span>
        </div>

        {/* Realistic Interactive Tech Snippet / Visual Header */}
        <div className="p-3.5 rounded-xl bg-[#070a10]/95 border border-white/5 font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>{project.title.split('—')[0].trim()}</span>
            </span>
            <span className="text-[10px] text-emerald-400/90 bg-emerald-500/10 px-1.5 py-0.5 rounded">Verified Repo</span>
          </div>
          <p className="text-[11px] text-slate-400 truncate">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          <div className="mt-4 space-y-2">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:border-emerald-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-all py-1.5 px-2 -ml-2 rounded-lg hover:bg-emerald-500/10 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          >
            <span>Inspect Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all hover:scale-105"
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} demo`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95"
                title="Live Application"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

    </AnimaticCard>
  );
};
