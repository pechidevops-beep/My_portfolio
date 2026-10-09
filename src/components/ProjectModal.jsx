// src/components/ProjectModal.jsx
import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers, Server, Sparkles, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d121c] border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-white/[0.02]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium mb-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3 h-3" />
              <span>{project.badge}</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-emerald-400" />
              <span>Project Overview</span>
            </h4>
            <p className="leading-relaxed text-slate-200">
              {project.description}
            </p>
          </div>

          {/* Architecture Details */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>Architecture & Engineering Design</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Features & Implementations</span>
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-white/[0.01] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Verified from Pechi's Resume Portfolio
          </div>

          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-colors"
              >
                <span>Live Preview / Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
