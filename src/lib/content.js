// ─────────────────────────────────────────────────────────────
// EDIT HERE: contact details.
// Leave empty ('') until you have the real value.
//  - EMAIL set     → contact form opens a mailto: link, Email buttons become real.
//  - EMAIL empty   → form shows "The email address has not been added yet."
//  - LINKEDIN set  → LinkedIn buttons/links become real.
// ─────────────────────────────────────────────────────────────
export const EMAIL = ''
export const LINKEDIN = ''
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
    tech: null,
    contribution: null,
    github: null,
    live: null,
    code: ['// hasynest · concept sketch', 'const workspace = {', '  tasks: [],', '  workflows: [],', '}'],
  },
  {
    name: 'Garments Order & Production Tracker',
    description:
      'A web application for managing garment orders and production-related workflows.',
    tech: null,
    contribution: null,
    github: null,
    live: null,
    code: ['// order & production tracker', 'const tracker = {', '  orders: [],', '  production: [],', '}'],
  },
  {
    name: 'Landing Launchpad',
    description: 'A landing page built with HTML.',
    tech: ['HTML'],
    contribution: null,
    github: 'https://github.com/MdHasanullhoque/B12A01-Landing-Launchpad',
    live: null,
    code: ['<!-- landing page -->', '<section class="hero">', '  <h1>…</h1>', '</section>'],
  },
  {
    name: 'My First Repo',
    description: 'My first GitHub repository, written in HTML.',
    tech: ['HTML'],
    contribution: null,
    github: 'https://github.com/MdHasanullhoque/My-frist-github-repo',
    live: null,
    code: ['<!-- first repository -->', '<!DOCTYPE html>', '<html>', '  <body>…</body>', '</html>'],
  },
]

export const DESIGN_EXPERIMENTS = [
  'Landing page concepts',
  'Dashboard UI',
  'Web application interfaces',
  'Component design',
  'Creative experiments',
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
