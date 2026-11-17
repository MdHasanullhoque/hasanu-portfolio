// ─────────────────────────────────────────────────────────────
// EDIT HERE: contact details.
// Leave empty ('') until you have the real value.
//  - EMAIL set     → contact form opens a mailto: link, Email buttons become real.
//  - EMAIL empty   → form shows "The email address has not been added yet."
//  - LINKEDIN set  → LinkedIn buttons/links become real.
// ─────────────────────────────────────────────────────────────
export const EMAIL = 'hasanullhoque@gmail.com'
export const LINKEDIN =
  'https://www.linkedin.com/in/hasanull-hoque-b35017229?utm_source=share_via&utm_content=profile&utm_medium=member_android'
export const GITHUB = 'https://github.com/MdHasanullhoque'

// ─────────────────────────────────────────────────────────────
// Technology: skills (only technologies that are actually known)
// ─────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'] },
  { title: 'Backend & Database', items: ['Node.js', 'MongoDB', 'Firebase'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

// ─────────────────────────────────────────────────────────────
// Technology: featured projects
// tech / contribution / github / live = null → shown as a disabled
// "to be added / soon" placeholder. Never put guessed values here.
// `code` is a decorative typewriter sketch (labelled "illustration").
// ─────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    name: 'Hasynest',
    description:
      'A personal productivity workspace concept designed to bring everyday tasks and workflows together.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    contribution: 'UI design, dashboard flow, and front-end implementation',
    github: null,
    live: 'https://personal-ai-assistant-eo6c.vercel.app/',
    code: ['// hasynest · concept sketch', 'const workspace = {', '  tasks: [],', '  workflows: [],', '}'],
  },
  {
    name: 'Garments Order & Production Tracker',
    description:
      'A web application for managing garment orders and production-related workflows.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    contribution: 'Front-end planning, user flow design, and interface development',
    github: null,
    live: 'https://garments-gopts.vercel.app/',
    code: ['// order & production tracker', 'const tracker = {', '  orders: [],', '  production: [],', '}'],
  },
  {
    name: 'PeopleOS',
    description:
      'A human resources management system dashboard concept focused on employee management, attendance, payroll, and operational visibility.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    contribution: 'UI-focused front-end development for the HRMS dashboard experience',
    github: null,
    live: 'https://people-os-dun.vercel.app/dashboard',
    code: ['<!-- peopleos dashboard -->', '<section class="dashboard">', '  <h1>HRMS</h1>', '</section>'],
  },
  {
    name: 'HERO.IO',
    description: 'A productive apps landing page concept focused on workflow, productivity, and streamlined digital tools.',
    tech: ['HTML', 'CSS'],
    contribution: 'Landing page design and front-end implementation',
    github: 'https://github.com/MdHasanullhoque/My-frist-github-repo',
    live: 'https://harmonious-bubblegum-9e3622.netlify.app/',
    code: ['<!-- productive apps -->', '<section class="hero">', '  <h1>Build smarter.</h1>', '</section>'],
  },
  {
    name: 'CS E-Ticket System',
    description: 'An online ticketing system for exploring services and managing ticket bookings.',
    tech: null,
    contribution: null,
    github: null,
    live: 'https://taupe-macaron-b746f3.netlify.app/',
    code: ['// e-ticket system', 'const booking = {', '  tickets: [],', '  status: "ready",', '}'],
  },
  {
    name: 'GameHub',
    description: 'A gaming-focused web experience for discovering games and exploring gaming content.',
    tech: null,
    contribution: null,
    github: null,
    live: 'https://coruscating-manatee-3d60bd.netlify.app/',
    code: ['// gamehub', 'const gameHub = {', '  games: [],', '  discover: true,', '}'],
  },
  {
    name: 'Influencer Gear',
    description: 'A product landing page showcasing gear and accessories for content creators.',
    tech: null,
    contribution: null,
    github: null,
    live: 'https://mdhasanullhoque.github.io/influencer-gear/',
    code: ['<!-- influencer gear -->', '<section class="products">', '  <h1>Creator gear</h1>', '</section>'],
  },
  {
    name: 'Flower Shop',
    description: 'A responsive flower shop website showcasing floral products and arrangements.',
    tech: null,
    contribution: null,
    github: null,
    live: 'https://mdhasanullhoque.github.io/B12A02-Responsive-Flowers/',
    code: ['<!-- flower shop -->', '<section class="flowers">', '  <h1>Fresh flowers</h1>', '</section>'],
  },
  {
    name: 'Tea House',
    description: 'A tea house website presenting tea products and highlighting the brand experience.',
    tech: null,
    contribution: null,
    github: null,
    live: 'https://mdhasanullhoque.github.io/HTML-CSS-TAILWIND-RECAP/',
    code: ['<!-- tea house -->', '<section class="tea-house">', '  <h1>Tea and moments</h1>', '</section>'],
  },
]

export const DESIGN_EXPERIMENTS = [
  {
    title: 'Landing page concepts',
    type: 'landing',
    description: 'Bold type, a clear message, and one focused action for a product launch.',
  },
  {
    title: 'Dashboard UI',
    type: 'dashboard',
    description: 'A calm overview that makes key metrics and daily priorities easy to scan.',
  },
  {
    title: 'Web application interfaces',
    type: 'application',
    description: 'A tidy task workspace with useful status cues and a simple content hierarchy.',
  },
  {
    title: 'Component design',
    type: 'components',
    description: 'Reusable buttons, fields, and status labels shaped into a consistent UI kit.',
  },
  {
    title: 'Creative experiments',
    type: 'creative',
    description: 'An expressive visual direction exploring contrast, color, and oversized type.',
  },
]

export const APPROACH = ['Idea', 'Research', 'Design', 'Development', 'Testing', 'Deployment']

// ─────────────────────────────────────────────────────────────
// Administration
// ─────────────────────────────────────────────────────────────
export const RESPONSIBILITIES = [
  { title: 'Office Administration', text: 'Keeping the day-to-day administrative side of the workplace running.' },
  { title: 'Procurement & Purchasing', text: 'Sourcing and purchasing what the workplace needs.' },
  { title: 'Vendor Management', text: 'Coordinating with vendors and service providers.' },
  { title: 'Employee Support & Coordination', text: 'Supporting colleagues with everyday workplace needs.' },
  { title: 'IT Asset & Equipment Management', text: 'Keeping track of equipment and IT assets.' },
  { title: 'Workplace & Facility Management', text: 'Looking after the office space and its facilities.' },
  { title: 'Administrative Documentation', text: 'Keeping administrative records and documents organized.' },
  { title: 'Office Event & Logistics Coordination', text: 'Coordinating the logistics behind office events.' },
]

// Titles only. Details (Background, Objective, ...) are to be added.
export const CASE_STUDIES = [
  'Conference Room Technology Setup',
  'Office Workspace Improvement',
  'Vendor & Procurement Coordination',
  'Employee IT Equipment Management',
  'Office Maintenance & Facility Management',
  'Office Events & Employee Engagement',
  'Administrative Process Improvement',
]

export const PRINCIPLES = [
  { title: 'Organization', text: 'Clear structure makes work easier to follow.' },
  { title: 'Efficiency', text: 'Simple processes save time for everyone.' },
  { title: 'Communication', text: 'Keeping people informed and aligned.' },
  { title: 'Continuous Improvement', text: 'Small, steady improvements to how things are done.' },
]
