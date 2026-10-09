// src/components/Projects.jsx
import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [inspectedProject, setInspectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured Systems' },
    { id: 'ai-devops', label: 'AI & Observability' },
    { id: 'fullstack', label: 'Full Stack & APIs' }
  ];

  const filteredProjects = projects.filter((item) => {
    if (activeFilter === 'featured') return item.featured;
    if (activeFilter === 'ai-devops') return item.id === 'api-drift-detector' || item.id === 'pipeheal';
    if (activeFilter === 'fullstack') return item.id === 'collabspace' || item.id === 'api-drift-detector';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#0b0f17] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Shipped Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured projects & architectures.
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-base">
              Real-world systems spanning automated AI contract diffing, self-healing pipeline monitoring, and developer collaboration.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-emerald-400 text-black font-semibold shadow-md shadow-emerald-500/20'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={(p) => setInspectedProject(p)}
            />
          ))}
        </div>

        {/* Architecture Deep Dive Modal */}
        {inspectedProject && (
          <ProjectModal
            project={inspectedProject}
            onClose={() => setInspectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
