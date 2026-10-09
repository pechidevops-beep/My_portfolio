// src/data/skills.js
// Editable skills data based on Pechi's verified technical competencies

export const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'database', label: 'Databases' },
  { id: 'devops', label: 'DevOps & Tools' },
  { id: 'core', label: 'Core Engineering' }
];

export const skills = [
  // Frontend
  {
    name: 'React.js (Vite)',
    category: 'frontend',
    level: 'Advanced',
    iconName: 'Atom',
    highlight: 'Functional components, Hooks, Custom State, Vite tooling'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Advanced',
    iconName: 'FileCode2',
    highlight: 'Async/Await, Closures, DOM, Modern ES Modules'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Advanced',
    iconName: 'Palette',
    highlight: 'Responsive design, custom tokens, Dark mode, Utility-first'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'Advanced',
    iconName: 'Layout',
    highlight: 'Semantic HTML, Flexbox/Grid, Animations, Accessibility'
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    level: 'Proficient',
    iconName: 'Boxes',
    highlight: 'Responsive grids, UI components, Rapid layout prototyping'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    iconName: 'Server',
    highlight: 'Event-driven runtime, scalable micro-backends, file I/O'
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'Advanced',
    iconName: 'Cpu',
    highlight: 'RESTful API routing, middleware, error handling, CORS'
  },
  {
    name: 'RESTful APIs',
    category: 'backend',
    level: 'Advanced',
    iconName: 'Workflow',
    highlight: 'API contract design, versioning, status codes, payload validation'
  },
  {
    name: 'Claude & AI APIs',
    category: 'backend',
    level: 'Proficient',
    iconName: 'Bot',
    highlight: 'LLM prompt chaining, migration step synthesis, structured JSON'
  },
  {
    name: 'Java',
    category: 'backend',
    level: 'Proficient',
    iconName: 'Coffee',
    highlight: 'OOP principles, data structures, Infosys Springboard Certified'
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 'Proficient',
    iconName: 'Database',
    highlight: 'Relational schemas, foreign keys, index optimization, SQL queries'
  },
  {
    name: 'MySQL',
    category: 'database',
    level: 'Proficient',
    iconName: 'DatabaseZap',
    highlight: 'Relational data modeling, ACID transactions, complex joins'
  },
  {
    name: 'Supabase',
    category: 'database',
    level: 'Proficient',
    iconName: 'Sparkles',
    highlight: 'PostgreSQL persistence, Auth, real-time client integrations'
  },

  // DevOps & Tools
  {
    name: 'Docker',
    category: 'devops',
    level: 'Proficient',
    iconName: 'Container',
    highlight: 'Containerization, Dockerfile recipes, reproducible dev environments'
  },
  {
    name: 'Git & GitHub',
    category: 'devops',
    level: 'Advanced',
    iconName: 'GitBranch',
    highlight: 'Branching workflows, PR reviews, merge management, version control'
  },
  {
    name: 'Vercel & Render',
    category: 'devops',
    level: 'Proficient',
    iconName: 'Cloud',
    highlight: 'Automated CI/CD deployments, environment variables, edge caching'
  },
  {
    name: 'Postman & VS Code',
    category: 'devops',
    level: 'Advanced',
    iconName: 'Terminal',
    highlight: 'API test suites, automated mock collections, debugging workflows'
  },

  // Core
  {
    name: 'API Contract Diffing',
    category: 'core',
    level: 'Specialized',
    iconName: 'GitCompare',
    highlight: 'Breaking change rules, OpenAPI spec analysis, backward compatibility'
  },
  {
    name: 'Authentication & Security',
    category: 'core',
    level: 'Proficient',
    iconName: 'ShieldCheck',
    highlight: 'JWT tokens, role-based authorization, secure credential handling'
  }
];
