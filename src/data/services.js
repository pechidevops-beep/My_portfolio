// src/data/services.js
// Editable freelance services based on Section 5.6 of agents.md

export const services = [
  {
    id: 'web-dev',
    title: 'Full-Stack Website Development',
    category: 'Website Development',
    iconName: 'Code2',
    shortDesc: 'Modern, performant, and scalable full-stack web applications tailored for businesses, startups, and product owners.',
    deliverables: [
      'Complete end-to-end web architecture',
      'Secure backend RESTful APIs with Node.js & Express',
      'Database schema setup (PostgreSQL, MySQL, Supabase)',
      'Automated deployment to Vercel, Render, or Docker containers'
    ],
    idealFor: 'Startups launching an MVP, founders needing a custom web app, or businesses migrating to a modern tech stack.'
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development (React)',
    category: 'Frontend Development',
    iconName: 'LayoutGrid',
    shortDesc: 'Interactive, modular, and component-driven user interfaces built with React, Vite, and clean styling.',
    deliverables: [
      'Clean, componentized React code with reusable components',
      'Tailwind CSS styling with responsive design tokens',
      'State management, API integration, and smooth client routing',
      'Accessible, keyboard-navigable UI with subtle micro-animations'
    ],
    idealFor: 'Teams with backend APIs ready needing a polished frontend, or teams revamping their existing user interface.'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    category: 'Responsive Design',
    iconName: 'Smartphone',
    shortDesc: 'Fluid, cross-device web experiences that look and feel stunning across mobile phones, tablets, and wide desktop displays.',
    deliverables: [
      'Mobile-first responsive layout engineering',
      'Touch-friendly navigation and gesture ergonomics',
      'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
      'High-DPI Retina asset optimization and lightning-fast load times'
    ],
    idealFor: 'Companies whose mobile users bounce due to poor mobile layouts, or designers wanting precise translation from Figma.'
  },
  {
    id: 'web-improvements',
    title: 'Website Improvements & Refactoring',
    category: 'Improvements & Fixes',
    iconName: 'Sparkles',
    shortDesc: 'UI polish, performance speedups, critical bug fixes, API integrations, and code refactoring for existing codebases.',
    deliverables: [
      'Audit and resolution of frontend layout bugs and console errors',
      'Performance optimization (Lighthouse score boost, asset compression)',
      'Third-party API integrations (Stripe, Claude/OpenAI, Supabase, SendGrid)',
      'Codebase refactoring into clean, maintainable patterns'
    ],
    idealFor: 'Existing sites that feel slow, look outdated, or need immediate feature additions and debugging.'
  }
];
