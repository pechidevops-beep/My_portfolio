// src/components/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { AnimaticCard } from './AnimaticCard';

const PROJECT_TYPES = [
  'Website Development',
  'Frontend Development',
  'Responsive Design',
  'Website Improvements & Refactoring',
  'Full-Stack Custom App',
  'Other / Discussion'
];

const BUDGET_RANGES = [
  'Flexible / To be discussed',
  '< $250 (Under ₹20,000)',
  '$250 – $600 (₹20,000 – ₹50,000)',
  '$600+ (₹50,000+)',
  'Fixed Scope / Retainer'
];

export const Contact = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'Website Development',
    budget: 'Flexible / To be discussed',
    message: ''
  });
  const [prevPropService, setPrevPropService] = useState(preselectedService);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync state if preselectedService changes from service card click
  if (preselectedService !== prevPropService) {
    setPrevPropService(preselectedService);
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a project description or message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate client-side handling and demo submission verification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pechi8001@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Pechi,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}\n`
    );
    return `mailto:pechi8001@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Have a project in mind? Let's build something great.
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl text-base">
            Open for freelance collaborations, contract web development, and full-time software engineering roles.
          </p>
        </div>

        {/* Two Columns: Contact Info vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Email Card */}
            <AnimaticCard
              className="p-6 transition-all"
              spotlightColor="rgba(34, 197, 94, 0.14)"
              borderColor="rgba(34, 197, 94, 0.35)"
              tiltFactor={3}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Direct Email
              </span>
              <a
                href="mailto:pechi8001@gmail.com"
                className="text-lg font-bold text-white hover:text-emerald-300 transition-colors block"
              >
                pechi8001@gmail.com
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Usually responds within 24 hours.
              </p>
            </AnimaticCard>

            {/* Direct Phone & Location Card */}
            <AnimaticCard
              className="p-6 space-y-4"
              spotlightColor="rgba(34, 197, 94, 0.14)"
              borderColor="rgba(34, 197, 94, 0.35)"
              tiltFactor={3}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Phone / WhatsApp</span>
                  <a href="tel:+917603957341" className="text-sm font-semibold text-white hover:text-emerald-300">
                    +91 76039 57341
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Location</span>
                  <span className="text-sm text-slate-200">
                    Kovilpatti, Tamil Nadu, India (IST / UTC+5:30)
                  </span>
                </div>
              </div>
            </AnimaticCard>

            {/* Profiles & Verification */}
            <AnimaticCard
              className="p-6"
              spotlightColor="rgba(34, 197, 94, 0.14)"
              borderColor="rgba(34, 197, 94, 0.35)"
              tiltFactor={3}
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Profiles & Repositories
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/pechidevops-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-sm text-slate-200 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-emerald-400" />
                    <span>github.com/pechidevops-beep</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/pechi-muthu-s-6703b4299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-sm text-slate-200 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                    <span>linkedin.com/in/pechi-muthu-s</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </AnimaticCard>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1420] border border-white/10 shadow-xl">
              
              {submitted ? (
                /* Success State */
                <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Prepared & Validated!</h3>
                  <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Your inquiry for{' '}
                    <span className="text-emerald-400">{formData.projectType}</span> has been processed.
                  </p>
                  
                  {/* Direct Mail Client Action */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 w-full max-w-md mb-6 text-left">
                    <div className="text-xs text-slate-400 mb-2">
                      Click below to instantly deliver your message via your default mail client:
                    </div>
                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
                    >
                      <span>Open in Mail App (Direct Send)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Website Development',
                        budget: 'Flexible / To be discussed',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono text-slate-400 hover:text-white underline underline-offset-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Henderson"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-emerald-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-emerald-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-slate-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Estimated Budget <span className="text-slate-500 text-[11px]">(Optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                      >
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b} className="bg-slate-900 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Description & Requirements <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're looking to build, expected timelines, or any tech requirements..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-emerald-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission and Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 transition-all shadow-md shadow-emerald-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Validating...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/30 transition-all"
                      title="Direct mailto client dispatch"
                    >
                      <Mail className="w-4 h-4 text-emerald-400" />
                      <span>Direct Mail Client</span>
                    </a>
                  </div>

                  {/* Honest Demo Mode & Integration Transparency Note */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-[11px] text-slate-400 leading-relaxed">
                    <span className="text-emerald-400 font-mono font-medium">Notice: </span>
                    Client-side validation active. Submissions provide instant verification and a prefilled mailto link. To connect real automated backend email delivery, add your EmailJS, Resend, or Formspree keys in <code className="text-slate-300">src/components/Contact.jsx</code>.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
