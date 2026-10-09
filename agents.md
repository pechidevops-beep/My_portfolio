1. Mission
Build and maintain a polished, professional, fully responsive developer portfolio for Pechi.dev. The site must help potential freelance clients, recruiters, and companies understand the developer's skills, inspect projects, open real demos and GitHub repositories, review available services, and make contact.
Treat this as a portfolio intended for real use—not a generic template or a static mockup. Implement working interactions, test the application, and clearly identify any feature that cannot work until an external service or backend is configured.
2. Required Working Approach
1. Inspect before changing anything. Review the repository structure, existing components, package.json, installed dependencies, Tailwind setup, and current app entry points before editing.
2. If a Vite + React app already exists, extend it. Do not replace working code or create an unrelated project without a clear need.
3. Follow the existing conventions when they are sound. Avoid unnecessary rewrites and dependencies.
4. Implement the application—not just a plan, prototype, or static screenshot.
5. After changes, run the available checks and a production build. Fix errors caused by the changes before declaring the work complete.
6. Do not claim a test, build, deployment, form submission, or external integration succeeded unless it was actually verified.
7. If a required external service, credential, URL, or personal detail is unavailable, use a clearly labelled placeholder and document exactly what must be supplied. Never invent credentials, working links, clients, testimonials, metrics, or achievements.
3. Technology Stack
Use the following stack unless the existing repository or a compatibility issue requires a documented adjustment:
- Frontend: React with functional components and JavaScript (ES6+)
- Build tool: Vite
- Styling: Tailwind CSS, configured for the installed version
- Icons: Lucide React
- Animations: Framer Motion, only where motion improves the experience
- Routing: React Router only if multiple routes are genuinely needed; section-based navigation is enough for a single-page portfolio
- Forms: Client-side validation plus a real form service or backend endpoint when configured
- Deployment: Vercel or Netlify
Do not mix incompatible Tailwind v3 and v4 configuration approaches. Confirm the installed version and use the matching setup. Install only dependencies that are required.
4. Visual Design System
Create a modern, minimal, premium developer portfolio with a dark visual theme.
- Base background: deep charcoal or near-black
- Primary accent: electric lime or vibrant green
- Supporting colors: white and soft gray; subtle gradients only when helpful
- Typography: modern sans-serif with a clear heading hierarchy
- Layout: spacious, well-balanced, grid-based, and easy to scan
- Cards: rounded corners, restrained borders, and tasteful hover feedback
- Buttons: clear labels, visible focus states, and smooth transitions
- Motion: subtle entrance and reveal effects; respect reduced-motion preferences
Avoid excessive gradients, noisy backgrounds, overdone animation, clutter, decorative effects that reduce readability, and generic stock-template styling. Aim for a visually strong desktop layout that remains intuitive on small screens.
5. Required Page Sections
Build the following sections as reusable components. Keep section IDs and navigation links consistent.
5.1 Navigation
- Text logo: Pechi.dev
- Links: Home, About, Skills, Projects, Services, Contact
- Prominent Let's Talk CTA
- Sticky navigation with a subtle background or border on scroll
- Smooth in-page navigation
- Accessible mobile hamburger menu
- Active-section indication where practical
Ensure links work with a mouse, keyboard, touch, and screen readers. Close the mobile menu after selecting a section.
5.2 Hero
Use the following default copy unless the owner changes it:
- Availability label: Available for Freelance Projects
- Main heading: I build digital experiences that drive results.
- Supporting text: I'm a web developer focused on creating modern, responsive, and user-friendly websites that help businesses grow.
- Primary CTA: View My Work
- Secondary CTA: Let's Talk
Also include configurable GitHub and LinkedIn links, a professional illustration or tasteful code-themed visual, and a compact technology-stack indicator for React, JavaScript, Tailwind CSS, and Node.js. Use a simple placeholder asset if no approved profile or illustration is supplied. Do not imply the availability label is current unless the owner confirms it.
Do not fabricate client counts, income, performance results, years of professional experience, or other achievements.
5.3 About
Include:
- Replaceable profile-image placeholder
- Short developer introduction
- Professional interests and development philosophy
- Download Resume button
- Contact Me button
Suggested starting copy:
I'm a passionate web developer who enjoys turning ideas into functional, attractive digital products. I focus on building responsive interfaces, writing maintainable code, and creating experiences that are intuitive for users. I'm continuously improving my skills and exploring modern web technologies to deliver better solutions.

Use a two-column layout on desktop and a stacked layout on mobile. Do not invent work experience, qualifications, or client testimonials. The resume button must point to an actual supplied resume; otherwise label it as a placeholder to configure.
5.4 Skills
Group skills in easy-to-scan cards, lists, or badges:
- Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Responsive Web Design
- Backend: Node.js, Express.js, REST APIs
- Database: MongoDB, MySQL
- Tools and workflow: Git, GitHub, VS Code, Vite, npm
Store skills in an editable data file. Only show technologies the owner actually knows or is actively learning. Do not imply expert-level proficiency without evidence. The owner must be able to easily edit the list.
5.5 Featured Projects
Create a reusable project-card component and responsive project gallery. Each card should support:
- Project screenshot or realistic thumbnail
- Project name and concise description
- Technology tags
- Key features
- Live Demo link
- GitHub Repository link
Initial editable project entries:
1. CollabSpace — A team collaboration and task management platform for organizing projects, assigning tasks, sharing updates, and monitoring progress.
2. E-Commerce Platform — A responsive shopping experience with product listings, search/filtering, product details, and a cart.
3. Freelancer Portfolio — A personal portfolio for developer skills, selected projects, services, and contact information.
These are seed entries, not proof that working demos or repositories exist. Use explicit, editable placeholder values until real links and verified details are supplied. Do not create dead links that look functional. If a URL is unavailable, show a disabled or clearly labelled unavailable action instead of linking to #.
Use restrained image-zoom and hover effects. Add category/technology filtering only if it improves usability and can be completed cleanly. Keep project information separate from presentation components.
5.6 Services
Create four editable service cards:
1. Website Development — Modern, responsive websites for businesses, individuals, and startups.
2. Frontend Development — Interactive, reusable interfaces using React.
3. Responsive Web Design — Experiences that work across phones, tablets, laptops, and desktops.
4. Website Improvements — Layout refinements, UI updates, bug fixes, and performance improvements.
Each card needs an icon, concise description, and subtle hover feedback. Do not publish prices, delivery guarantees, or service claims that have not been approved by the owner.
5.7 Work Process
Show a clear four-step workflow:
1. Discover — Understand requirements, audience, and goals.
2. Plan — Define structure, visual direction, and functionality.
3. Build — Develop with suitable technologies and reusable components.
4. Deliver — Test responsiveness, resolve issues, and prepare deployment.
Use a timeline or connected cards, while ensuring the sequence still reads clearly on mobile.
5.8 Contact
Heading: Have a project in mind? Let's build something great.
Form fields:
- Full name (required)
- Email address (required and format-validated)
- Project type dropdown
- Budget range (optional)
- Project description (required)
Requirements:
- Accessible labels and actionable error messages
- Required-field and email validation
- Loading, success, and failure states when connected
- Prevent accidental duplicate submissions
- Clickable email address
- GitHub and LinkedIn links
- A direct email contact option
Truthfulness and security requirements: A frontend-only form does not deliver messages by itself. Connect an actual form provider or backend endpoint before showing a success state that implies delivery. If no integration is configured, clearly label the form as demo mode or offer a clearly described direct-email fallback. Do not expose API secrets or private credentials in client-side code. Do not report successful submission unless the configured service confirms it.
5.9 Footer
Include:
- Pechi.dev logo/text
- Short developer tagline
- Section navigation links
- GitHub and LinkedIn links
- Copyright year generated dynamically
- Back to Top link
Use the same navigation targets and real URLs as the rest of the site.
6. Accessibility, Responsiveness, and Metadata
- Use semantic HTML and a logical heading order.
- Make all interactive elements keyboard accessible.
- Provide visible focus states and useful accessible names.
- Associate form labels, errors, and help text with their inputs.
- Maintain readable contrast between text and backgrounds.
- Support reduced-motion preferences.
- Test small mobile widths as well as tablet and desktop layouts.
- Prevent horizontal overflow and overlapping sticky navigation.
- Use optimized images with appropriate alternative text; mark purely decorative images accordingly.
- Add an accurate document title, meta description, and Open Graph metadata.
- Add a custom favicon only when the asset improves the finished site.
- Add a custom 404 page only if the app has multiple routes and it is useful.
7. Project Structure
Use a structure like the following, adapting it to the existing project when appropriate:
src/
  assets/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    Services.jsx
    WorkProcess.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js
    skills.js
    services.js
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  resume.pdf               # only after a real resume is supplied
README.md
Avoid a monolithic App.jsx. Keep content/configuration separate from layout, reuse components, and choose component boundaries that are easy to maintain. Do not create unused files simply to match this example.
8. Code Quality Requirements
- Write readable, maintainable, production-oriented code.
- Use functional React components and hooks appropriately.
- Follow consistent naming conventions and formatting already present in the repository.
- Avoid duplicated markup and unnecessary inline styles.
- Avoid unnecessary dependencies and gratuitous abstractions.
- Check imports, exports, asset paths, and environment-variable names.
- Do not leave broken buttons, dead navigation, empty click handlers, or fake interactions.
- Prefer small, focused components and data-driven rendering for repeated cards/lists.
- Handle loading, empty, error, and success states where relevant.
- Add code comments only when they explain non-obvious logic or important constraints.
- Never put secrets or service-role keys in the browser bundle or commit them to source control.
9. Implementation Workflow
Work in this order unless the inspected codebase calls for a clearly explained adjustment:
1. Inspect the project files, scripts, dependencies, current UI, and Tailwind version.
2. Identify what already works and what must be added or fixed.
3. Establish the design tokens: colors, typography, spacing, borders, radii, and motion.
4. Configure only the necessary dependencies and styling setup.
5. Implement the navbar and hero.
6. Implement About and Skills.
7. Implement project data and reusable project cards/gallery.
8. Implement Services and Work Process.
9. Implement and validate the Contact form, including its true integration status.
10. Implement Footer, mobile navigation, and subtle motion effects.
11. Add metadata, responsive behavior, accessibility refinements, and real links where available.
12. Run the development server if possible and inspect the rendered site at mobile, tablet, and desktop widths.
13. Run the production build and fix errors.
14. Review all buttons, links, forms, navigation paths, and placeholders.
15. Update the README and provide an accurate handoff summary.
Do not stop after a static mockup. Complete the functional frontend and make any integration limitations explicit.
10. Setup and Verification
First inspect package.json and the repository. Do not overwrite a working application setup without a reason.
The project should support the following commands, when applicable:
npm install
npm run dev
npm run build
Use existing lint/test scripts if provided. If no automated tests exist, at minimum verify the production build and perform a manual functional review. Report commands that were run and their actual results. Do not say the app is error-free merely because the build command was not executed.
Verification checklist:
- [ ] Application starts using the documented command.
- [ ] Production build completes successfully.
- [ ] Desktop and mobile layouts are usable.
- [ ] All section links lead to the correct sections.
- [ ] Mobile navigation opens, closes, and supports keyboard use.
- [ ] CTAs, project links, resume, email, GitHub, and LinkedIn either work or are clearly marked as unconfigured.
- [ ] The contact form validates inputs and accurately represents its submission/integration status.
- [ ] No browser console errors or broken asset imports remain from the implementation.
- [ ] No real secrets or private credentials are included in the frontend or repository.
- [ ] Page title, description, and social metadata are configured.
- [ ] README setup and deployment instructions match the actual project.
11. README and Final Handoff
Provide a README that includes:
- Project overview and feature list
- Technology stack
- Prerequisites and setup commands
- Development and production build commands
- Environment variables, if any, documented using a safe .env.example
- Contact-form integration instructions and whether it is live or in demo mode
- Deployment instructions for Vercel or Netlify
- Project structure overview
- Known limitations or remaining setup steps
At completion, summarize:
1. The major features implemented.
2. The principal files/components created or changed.
3. The commands run and the verified build/test outcome.
4. Any service integration that still needs credentials or configuration.
5. The exact personal details and URLs the owner must replace, including GitHub, LinkedIn, email, resume file, profile image, project screenshots, and real project/demo/repository links.
12. Final Standard
Act as a senior frontend developer and UI/UX designer. Prioritize visual quality, maintainability, accessibility, responsive behavior, and honest functionality. Build a portfolio that Pechi can confidently share with recruiters and potential freelance clients, while keeping all personal claims, project details, and external links accurate and editable.