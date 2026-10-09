import React from 'react';
import { Search, Compass, Hammer, Rocket, Check } from 'lucide-react';
import { AnimaticCard } from './AnimaticCard';

const STEPS = [
  {
    step: '01',
    title: 'Discover',
    icon: Search,
    subtitle: 'Clarifying Requirements & Goals',
    description: 'We align on project objectives, user personas, required features, timeline expectations, and technical constraints before writing a single line of code.',
    deliverable: 'Feature checklist & project scope document'
  },
  {
    step: '02',
    title: 'Plan',
    icon: Compass,
    subtitle: 'Architecture & Design Tokens',
    description: 'Structuring the component tree, selecting modern libraries, defining database schemas, API contracts, and responsive layout wireframes.',
    deliverable: 'Technical architecture & milestone roadmap'
  },
  {
    step: '03',
    title: 'Build',
    icon: Hammer,
    subtitle: 'Iterative Implementation',
    description: 'Developing high-performance React components, robust Node.js/Express APIs, Docker containers, and clean styling with thorough unit checks.',
    deliverable: 'Clean Git commits & staging preview'
  },
  {
    step: '04',
    title: 'Deliver',
    icon: Rocket,
    subtitle: 'Audit, Deploy & Handoff',
    description: 'Running lighthouse audits, verifying mobile responsiveness across screen widths, configuring CI/CD on Vercel or Render, and providing complete handoff notes.',
    deliverable: 'Live production URL & repository transfer'
  }
];

export const WorkProcess = () => {
  return (
    <section id="process" className="py-24 relative bg-[#0b0e14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I bring projects from concept to deployment.
          </h2>
          <p className="text-slate-400 mt-2 text-base">
            A structured, transparent four-step engineering process designed to eliminate surprises and ship production-grade code.
          </p>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <AnimaticCard
                key={step.step}
                className="p-6 flex flex-col justify-between group shadow-lg"
                spotlightColor="rgba(34, 197, 94, 0.12)"
                borderColor="rgba(34, 197, 94, 0.35)"
                tiltFactor={4}
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-emerald-400/35 group-hover:text-emerald-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable badge */}
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </AnimaticCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
