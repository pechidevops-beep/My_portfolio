// src/data/projects.js
// Verified projects from Pechi Muthu's resume and portfolio requirements.
// External URLs are clearly configured or marked as editable placeholders.

export const projects = [
  {
    id: 'api-drift-detector',
    title: 'API Contract Drift Detector',
    badge: 'AI & Developer Tools',
    featured: true,
    tagline: 'Automated OpenAPI breaking change classifier with Anthropic Claude AI migration synthesis.',
    description: 'A full-stack developer observability platform that compares two OpenAPI specification versions and automatically classifies schema mutations as breaking or non-breaking using a deterministic rule engine covering 8+ change categories.',
    techStack: ['React', 'Node.js', 'Express.js', 'Supabase', 'Anthropic Claude API', 'Monaco Diff', 'Vercel'],
    keyFeatures: [
      'Deterministic rule engine analyzing 8+ change types (field renames, type mutations, enum removals, endpoint drops)',
      'Claude 3.5 Sonnet AI integration synthesizing human-readable drift explanations and step-by-step migration scripts',
      'Interactive Monaco-based side-by-side diff view with syntax highlighting and instant issue highlighting',
      'Supabase persistence layer with historical contract version snapshots'
    ],
    architecture: 'Vercel-hosted React frontend communicates with an Express/Node.js microservice on Render, orchestrating deterministic schema AST parsing before invoking Claude API for automated change remediation summaries.',
    metrics: {
      changeRules: '8+ Diff Rule Types',
      aiSynthesis: 'Zero-touch Migrations',
      stack: 'React + Node + Claude'
    },
    links: {
      github: 'https://github.com/pechidevops-beep/API_Drift_Detector',
      live: 'https://api-drift-detector.vercel.app/',
      isPlaceholder: false
    },
    accentColor: '#22c55e'
  },
  {
    id: 'pipeheal',
    title: 'PipeHeal — Self-Healing CI/CD Monitor',
    badge: 'DevOps & Observability',
    featured: true,
    tagline: 'Intelligent pipeline observability platform surfacing automated failure remediation.',
    description: 'A resilient pipeline observability system that intercepts CI/CD build breakages, analyzes failure logs in real time, and surfaces automated suggestions to drastically cut developer downtime and manual log trawling.',
    techStack: ['React (Vite)', 'Node.js', 'Express.js', 'Docker', 'Vercel', 'Render'],
    keyFeatures: [
      'Automated CI/CD failure interceptor with fast log-parsing heuristics',
      'Containerized backend services orchestrated with Docker for reproducible multi-cloud deployment',
      'Interactive React dashboard featuring real-time incident timelines and stage drill-downs',
      'Live build health status badges and failure alert webhooks'
    ],
    architecture: 'Dockerized microservice backend hosted on Render captures webhook payloads from build runners, parses stderr traces, and powers a real-time reactive React dashboard.',
    metrics: {
      deployment: 'Docker Containerized',
      ui: 'Interactive Timeline',
      focus: 'CI/CD Reliability'
    },
    links: {
      github: 'https://github.com/pechidevops-beep/PipeHeal',
      live: 'https://pipe-heal.vercel.app/',
      isPlaceholder: false
    },
    accentColor: '#38bdf8'
  },
  {
    id: 'collabspace',
    title: 'CollabSpace — Developer Platform',
    badge: 'Full Stack & Collaboration',
    featured: true,
    tagline: 'GitHub-inspired developer collaboration platform delivering modular team workspaces.',
    description: 'A developer collaboration ecosystem that empowers distributed teams to manage shared codebases, orchestrate multi-tier permissions, and coordinate agile developer workflows with secure authentication.',
    techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    keyFeatures: [
      'Three core architectural pillars: Workspace Management, Repository Management, and Access Control',
      'Secure session authentication and role-based permissions (Owner, Contributor, Viewer)',
      'Relational PostgreSQL schema with foreign-key constraints and ACID transaction guarantees',
      'Containerized local and staging deployments with Docker Compose'
    ],
    architecture: 'Modular REST API endpoints built with Express.js querying PostgreSQL via optimized SQL queries, paired with a modern Tailwind CSS React interface.',
    metrics: {
      modules: '3 Core Engines',
      database: 'PostgreSQL Relational',
      container: 'Dockerized'
    },
    links: {
      github: 'https://github.com/pechidevops-beep/CollabSpace',
      live: '',
      isPlaceholder: false
    },
    accentColor: '#a855f7'
  },
  {
    id: 'freelancer-portfolio',
    title: 'Pechi.dev — Personal Engineering Showcase',
    badge: 'Design System & Performance',
    featured: false,
    tagline: 'Ultra-fast, accessible dark-themed portfolio built for freelance clients and engineering leads.',
    description: 'A bespoke developer portfolio crafted with modern design-taste guidelines, subtle animations, responsive ergonomics, verified resume downloads, and an interactive client service request workflow.',
    techStack: ['React', 'Vite', 'Tailwind CSS v4', 'GSAP', 'Lenis', 'Motion'],
    keyFeatures: [
      'Smooth GSAP & Lenis inertia scrolling with responsive ScrollTrigger reveals and interactive 3D card tilt',
      'Direct client project inquiry form with budget selectors and instant direct-email fallback',
      'Interactive skill explorer and deep-dive project modal inspection views',
      'Live resume viewer and verified PDF download'
    ],
    architecture: 'Component-driven Vite + React architecture utilizing Tailwind CSS v4 styling tokens and GSAP / Lenis micro-interactions.',
    metrics: {
      lighthouse: '99+ Performance',
      design: 'Dark-tech Minimal',
      responsive: '100% Mobile Ready'
    },
    links: {
      github: 'https://github.com/pechidevops-beep',
      live: '',
      isPlaceholder: false
    },
    accentColor: '#f59e0b'
  }
];
