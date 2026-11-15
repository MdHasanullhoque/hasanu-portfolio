import { Link } from 'react-router-dom'
import { EMAIL, GITHUB, LINKEDIN } from '../lib/content'

const LIME = '#C6FF4D'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Administration', to: '/administration' },
  { label: 'Technology', to: '/technology' },
  { label: 'Contact', to: '/contact' },
]

const pathwayLinks = [
  { label: 'Administration & Operations', to: '/administration' },
  { label: 'Technology & Design', to: '/technology' },
]

// Only socials that have a real value are shown.
const socials = [
  GITHUB && { label: 'GitHub', href: GITHUB, icon: 'github' },
  LINKEDIN && { label: 'LinkedIn', href: LINKEDIN, icon: 'linkedin' },
  EMAIL && { label: 'Email', href: `mailto:${EMAIL}`, icon: 'mail' },
].filter(Boolean)

const colTitle = 'mb-4 font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#C6FF4D]'
const linkCls =
  'text-[0.8rem] text-[#F3F1EA]/60 transition-colors hover:text-[#C6FF4D] focus-visible:text-[#C6FF4D]'

// Footer is dark in both light and dark mode (bg-dk), full width, rounded top corners.
export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-[2rem] bg-dk text-[#F3F1EA] md:mt-24 [&_a:focus-visible]:outline-[#F3F1EA]">
      <div className="mx-auto max-w-[70rem] px-5">
        {/* ───────── CTA ───────── */}
        <section className="pb-20 pt-16 md:pb-28 md:pt-20">
          <h2 className="font-display text-[clamp(2.1rem,6vw,3.6rem)] font-bold uppercase leading-[0.98] tracking-tight">
            One identity.
            <br />
            <span style={{ color: LIME }}>Two professional worlds.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm text-[#F3F1EA]/60">
            Building Digital Experiences. Managing Real-World Operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#C6FF4D] px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#161616] shadow-[0_10px_30px_-8px_rgba(198,255,77,0.55)] transition hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              Let’s talk <Arrow />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#C6FF4D] hover:text-[#C6FF4D]"
            >
              About me <Arrow />
            </Link>
          </div>
        </section>

        {/* ───────── LINK COLUMNS ───────── */}
        <div className="grid gap-10 pb-14 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1.2fr_1fr] md:gap-8">
          <div>
            <p className="font-display text-sm font-bold tracking-tight">
              HASANULL.<span style={{ color: LIME }}>_</span>
            </p>
            <p className="mt-4 max-w-[17rem] text-[0.8rem] leading-relaxed text-[#F3F1EA]/60">
              Frontend developer by creativity, Admin Executive by profession. One identity, two
              professional worlds.
            </p>
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[#F3F1EA]/70 transition-colors hover:border-[#C6FF4D] hover:text-[#C6FF4D]"
                    >
                      <Icon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h2 className={colTitle}>Navigate</h2>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Pathways">
            <h2 className={colTitle}>Pathways</h2>
            <ul className="flex flex-col gap-3">
              {pathwayLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={colTitle}>Connect</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/contact" className={linkCls}>
                  Get in touch
                </Link>
              </li>
              <li className="text-[0.8rem] text-[#F3F1EA]/60">Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ───────── BOTTOM BAR ───────── */}
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[70rem] px-5 py-5 text-[0.7rem] text-[#F3F1EA]/50">
          © 2026 MD Hasanull Hoque. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function Icon({ name }) {
  const common = {
    'aria-hidden': true,
    viewBox: '0 0 24 24',
    className: 'h-4 w-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  if (name === 'github')
    return (
      <svg {...common}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    )
  if (name === 'linkedin')
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      </svg>
    )
  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}