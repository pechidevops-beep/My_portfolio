// src/components/Services.jsx
import React from 'react';
import { services } from '../data/services';
import { DynamicIcon } from './DynamicIcon';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AnimaticCard } from './AnimaticCard';
import { useSmoothScroll } from '../context/SmoothScrollContext';

export const Services = ({ onSelectService }) => {
  const { scrollTo } = useSmoothScroll();

  const handleRequestService = (service) => {
    if (onSelectService) {
      onSelectService(service.category);
    }
    scrollTo('#contact');
  };

  return (
    <section id="services" className="py-24 relative bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Freelance Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I can help your team or business.
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-base">
            Targeted engineering services focused on high-quality delivery, clean codebases, and production reliability.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv) => (
            <AnimaticCard
              key={srv.id}
              className="p-6 sm:p-7 flex flex-col justify-between group shadow-lg"
              spotlightColor="rgba(34, 197, 94, 0.14)"
              borderColor="rgba(34, 197, 94, 0.4)"
              tiltFactor={4.5}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={srv.iconName} className="w-6 h-6" fallback="Code2" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Deliverables */}
                <div className="mt-5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    What's Included:
                  </span>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For note */}
                <div className="mt-5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">Ideal For: </span>
                  {srv.idealFor}
                </div>
              </div>

              {/* Request CTA Button */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleRequestService(srv)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-emerald-400 hover:text-black border border-white/10 hover:border-emerald-400 transition-all duration-200 active:scale-95"
                >
                  <span>Request This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </AnimaticCard>
          ))}
        </div>

      </div>
    </section>
  );
};
