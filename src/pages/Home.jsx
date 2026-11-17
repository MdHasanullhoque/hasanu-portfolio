import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LiveCard from '../components/LiveCard'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import CodeArt from '../components/CodeArt'
import HeroStack from '../components/HeroStack'

// Page-only lists live here, next to the classes that style them.
const marqueeWords = ['Frontend', 'Admin', 'UI Design', 'Operations', 'Code', 'Coordination']

const checklist = ['Workspace ready', 'Vendors coordinated', 'Team supported']

const adminTags = [
  'Office Administration',
  'Workplace Management',
  'Procurement & Purchasing',
  'Vendor Coordination',
  'Employee Support',
  'IT Asset Management',
  'Facility Management',
  'Administrative Documentation',
]

const techTags = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'React.js',
  'Next.js',
  'Firebase',
  'Node.js',
  'MongoDB',
  'Git & GitHub',
]

const techCode = [
  '// technology & design',
  "const identity = 'Technology & Design'",
  "const stack = ['React', 'Tailwind']",
  'build(identity, stack)',
]

export default function Home() {
  useEffect(() => {
    document.title = 'MD Hasanull Hoque – Developer by creativity. Administrator by profession.'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      {/* ───────────── 1. HERO ───────────── */}
      <section className="grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-mut sm:text-xs">
            <span aria-hidden="true" className="h-2 w-2 bg-tech dark:bg-tech-light" />
            Two worlds. Equal passion.
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-admin" />
          </p>

          <h1 className="font-display text-[clamp(2.5rem,8.5vw,5.6rem)] font-bold leading-[0.95] tracking-tight">
            HELLO, I’M
            <br />
            <span className="relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:h-[0.09em] after:w-full after:rounded-full after:bg-[linear-gradient(90deg,#9DB87A,#4A5968)] after:content-['']">
              HASANULL HOQUE.
            </span>
          </h1>

          <p className="mt-6 font-display text-[clamp(1.15rem,2.6vw,1.5rem)] font-bold leading-snug">
            Developer by creativity. Administrator by profession.
          </p>

          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mut">
            I build digital experiences through code and design, while helping businesses run smoothly
            through organized operations and effective coordination.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/technology"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3.5 font-display text-sm font-bold tracking-wide text-bg transition hover:-translate-y-0.5"
            >
              EXPLORE MY WORK
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-bold tracking-wide text-ink transition hover:bg-ink hover:text-bg"
            >
              LET’S CONNECT
            </Link>
          </div>
        </div>



        {/* Profile photo placeholder card */}
        {/* <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-card [background-image:radial-gradient(circle_at_20%_18%,rgba(157,184,122,0.5),transparent_55%),radial-gradient(circle_at_82%_85%,rgba(74,89,104,0.42),transparent_55%)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-display text-[clamp(5rem,16vw,9rem)] font-bold leading-none tracking-tight">
                H.
              </span>
              <span className="mt-3 rounded-full border border-dashed border-ink/40 px-3 py-1 font-mono text-[0.7rem] font-medium text-mut">
                Profile photo goes here
              </span>
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-dk px-3 py-1.5 font-mono text-[0.65rem] font-medium tracking-wider text-[#F3F1EA] sm:text-[0.7rem]">
              PERSONAL PORTFOLIO — 2026
            </span>

            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-admin opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-admin" />
              </span>
              Open to conversations
            </span>

            <span className="absolute bottom-4 right-4 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold">
              Bangladesh
            </span>
          </div>
        </div> */}

        {/* Stacked pathway cards */}
        <HeroStack />



      </section>

      {/* ───────────── 2. MARQUEE ───────────── */}
      <section aria-label="Focus areas" className="py-2">
        <Marquee words={marqueeWords} />
      </section>

      {/* ───────────── 3. TWO PATHWAYS ───────────── */}
      <section className="py-14 md:py-24">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-mut">
            Two pathways
          </p>
          <h2 className="mb-3 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Two worlds. Equal passion.
          </h2>
          <p className="mb-8 max-w-xl text-[0.95rem] text-mut">
            Building Digital Experiences. Managing Real-World Operations.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {/* Administration (left) */}
          <Reveal className="h-full">
            <LiveCard
              spot="rgba(157,184,122,0.4)"
              className="h-full rounded-[1.75rem] bg-admin-soft p-6 text-admin-on sm:p-8 data-[live=true]:shadow-[0_22px_60px_-22px_rgba(157,184,122,0.95)] data-[live=true]:ring-2 data-[live=true]:ring-admin"
            >
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-admin px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-on">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-admin-on" />
                Administration
              </p>
              <h3 className="mb-3 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold leading-tight">
                Administration & Operations
              </h3>
              <p className="mb-6 text-[0.95rem] leading-relaxed text-admin-mut">
                Creating organized workplaces, managing resources, coordinating people, and improving
                everyday business operations.
              </p>

              {/* mini checklist: boxes tick one by one when the card goes live */}
              <ul className="mb-6 flex flex-col gap-2.5 rounded-2xl bg-white/60 p-4">
                {checklist.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="relative grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-admin-mut/60">
                      <span
                        aria-hidden="true"
                        style={{ animationDelay: `${i * 450 + 300}ms` }}
                        className="absolute -inset-0.5 grid place-items-center rounded-md bg-admin-deep text-admin-ond opacity-0 group-data-[live=true]:animate-tick motion-reduce:animate-none motion-reduce:opacity-100"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 8.5l3.2 3L13 4.5" />
                        </svg>
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mb-8 flex flex-wrap gap-2">
                {adminTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-admin-mut/30 bg-white/60 px-3 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                to="/administration"
                className="mt-auto inline-flex w-fit items-center rounded-full bg-admin-deep px-6 py-3.5 font-display text-sm font-bold tracking-wide text-admin-ond transition hover:-translate-y-0.5"
              >
                EXPLORE ADMINISTRATION →
              </Link>
            </LiveCard>
          </Reveal>

          {/* Technology (right) */}
          <Reveal className="h-full" delay={120}>
            <LiveCard
              spot="rgba(191,201,211,0.2)"
              className="h-full rounded-[1.75rem] bg-tech-deep p-6 text-tech-ond sm:p-8 data-[live=true]:shadow-[0_22px_60px_-22px_rgba(74,89,104,0.95)] data-[live=true]:ring-2 data-[live=true]:ring-tech-light [&_a:focus-visible]:outline-tech-light"
            >
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-tech px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-white">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tech-light" />
                Technology
              </p>
              <h3 className="mb-3 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold leading-tight text-white">
                Technology & Design
              </h3>
              <p className="mb-6 text-[0.95rem] leading-relaxed text-tech-light">
                Turning ideas into digital experiences through code, creativity, and thoughtful design.
              </p>

              <CodeArt lines={techCode} className="mb-6" />

              <ul className="mb-8 flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-tech-light/30 bg-white/5 px-3 py-1 text-xs font-semibold text-tech-ond"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                to="/technology"
                className="mt-auto inline-flex w-fit items-center rounded-full border border-tech-light/40 bg-tech px-6 py-3.5 font-display text-sm font-bold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-tech-light hover:text-tech-deep"
              >
                EXPLORE TECHNOLOGY →
              </Link>
            </LiveCard>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
