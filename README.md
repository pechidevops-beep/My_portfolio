# Pechi.dev — Full Stack Developer & Freelance Portfolio

A high-performance, accessible, dark-themed developer portfolio crafted for **Pechi Muthu** (Full Stack Developer & IT Engineer). Built with React, Vite, Tailwind CSS v4, and Lucide React following modern design taste guidelines.

---

## 🌟 Key Features

- **Modern Dark-Tech Aesthetic**: Custom minimalist dark theme with subtle grid backdrops, translucent glassmorphism, and electric lime/emerald accents (`#22c55e`).
- **Interactive Navigation & Section Spy**: Fixed header with scroll detection, active section indicator, smooth anchor scrolling, and accessible mobile drawer menu.
- **Hero & Profile Showcase**: Real profile photo integration (`/pechi.jpg`), live availability indicator ("Available for Freelance Projects"), tech stack ticker, and quick action CTAs.
- **Comprehensive About & Verified Timeline**:
  - Bio and core engineering principles.
  - Interactive tabs switching between **Introduction & Philosophy**, **Internships (Jestech Solutions & Roza Solutions)**, and **Academics & Certifications (Sethu Institute of Technology, IIT Kharagpur Elite, IIIT Hyderabad Elite)**.
  - Direct **Download Resume (PDF)** button serving verified resume (`/resume.pdf`).
- **Data-Driven Skills Matrix**: 18+ technical competencies across Frontend, Backend, Databases, DevOps, and Core Architecture with interactive category filters.
- **Featured Projects Gallery & Architecture Inspector**:
  - Verified projects from resume: *API Contract Drift Detector*, *PipeHeal — Self-Healing CI/CD Monitor*, *CollabSpace*, and *Pechi.dev*.
  - Realistic interactive tech snippets and code badges.
  - Deep-dive **Project Details Modal** detailing system architecture, rule engines, AI prompt synthesis, and metrics.
- **Freelance Services & Auto-Selection**:
  - 4 targeted freelance services: Website Development, Frontend Development, Responsive Design, and Website Improvements & Refactoring.
  - Clicking **"Request This Service"** smooth-scrolls to the contact section and automatically pre-selects the service in the inquiry form dropdown.
- **Four-Step Engineering Workflow**: Visual timeline breaking down *Discover*, *Plan*, *Build*, and *Deliver*.
- **Client Inquiry & Contact Section**:
  - Client-side validation with actionable error feedback.
  - Direct email card (`pechi8001@gmail.com`) with instant 1-click **Copy to Clipboard** toast.
  - Direct phone (`+91 76039 57341`), location, and social links (GitHub, LinkedIn, CodeChef).
  - Dual delivery options: Instant mail client trigger (`mailto:`) + transparent demo mode notice with instructions for backend integration.
- **Fully Responsive & Accessible**: Tested across desktop viewports and mobile devices (390px width) with keyboard accessibility (`Esc` modal dismissal, focus rings).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) (Functional Components, Hooks) |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG Social Icons |
| **Fonts** | Google Fonts: *Plus Jakarta Sans* & *JetBrains Mono* |
| **Linter** | [Oxlint](https://oxc.rs/) (0 errors, 0 warnings) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or higher, v24+ recommended)
- npm (v9+ or higher)

### Installation
Clone or navigate to the repository and install dependencies:
```bash
npm install
```

### Running Locally (Development)
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Linting
Run the fast Oxlint suite:
```bash
npm run lint
```

### Building for Production
Create an optimized production bundle:
```bash
npm run build
```
The output files will be written to the `dist/` directory.

### Previewing Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
d:\Freelancer_portfolio/
├── public/
│   ├── favicon.svg             # Custom dark & lime brand favicon
│   ├── pechi.jpg               # Pechi Muthu's verified portrait photo
│   └── resume.pdf              # Pechi Muthu's verified resume PDF
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx           # Bio, metrics, internships & academic tabs
│   │   ├── Contact.jsx         # Contact form, mailto fallback, clipboard copy
│   │   ├── DynamicIcon.jsx     # Tree-shaken Lucide icon renderer
│   │   ├── Footer.jsx          # Links, copyright, and back-to-top button
│   │   ├── Hero.jsx            # Hero banner, photo card, and stack badges
│   │   ├── Navbar.jsx          # Sticky glass nav, section spy & mobile drawer
│   │   ├── ProjectCard.jsx     # Project card with tech mockup
│   │   ├── ProjectModal.jsx    # Architecture inspection modal
│   │   ├── Projects.jsx        # Project gallery with filter tabs
│   │   ├── Services.jsx        # 4 freelance services with prefill dispatch
│   │   ├── SocialIcons.jsx     # High-fidelity SVG icons for GitHub & LinkedIn
│   │   └── WorkProcess.jsx     # 4-step workflow timeline
│   ├── data/
│   │   ├── experience.js       # Internships, education, and certifications
│   │   ├── projects.js         # Verified projects and architectural specs
│   │   ├── services.js         # Freelance services and deliverables
│   │   └── skills.js           # Technical competencies & category taxonomy
│   ├── App.jsx                 # Application shell & state coordination
│   ├── index.css               # Design tokens, Tailwind v4 import & glass styles
│   └── main.jsx                # React root mount
├── .env.example                # Safe environment variables template
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template with SEO & Open Graph meta
├── package.json                # Project scripts and dependencies
├── vite.config.js              # Vite configuration with Tailwind v4 plugin
└── README.md                   # Project documentation
```

---

## 📬 Contact Form & Backend Integration

The Contact form is configured in **Demo / Client Verification Mode** with dual behavior:
1. **Validation & Preparation**: Ensures Name, valid Email format, and Message (>10 chars) are provided.
2. **Direct Mail Client**: Offers a 1-click `mailto:` dispatch that automatically opens your default email client (Outlook, Apple Mail, Gmail) pre-filling the inquiry details.
3. **Backend Service Integration**: To connect automatic serverless delivery (e.g. EmailJS, Formspree, Resend, or your own Node.js backend), open `src/components/Contact.jsx` and replace the simulated timeout with your API call. See `.env.example` for optional environment variable keys.

---

## 🚢 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub (`https://github.com/pechi8001/freelancer-portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📄 License & Attribution
Designed and built for **Pechi Muthu** (`pechi.dev`). All rights reserved.
