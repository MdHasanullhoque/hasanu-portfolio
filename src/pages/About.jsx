import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LiveCard from '../components/LiveCard'
import Reveal from '../components/Reveal'
import { SKILL_GROUPS } from '../lib/content'

const adminAreas = [
  'Office Administration',
  'Procurement & Purchasing',
  'Vendor Management',
  'Employee Support',
  'IT Asset Management',
  'Facility Management',
  'Administrative Documentation',
]

const techSkills = SKILL_GROUPS.flatMap((g) => g.items)

export default function About() {
  useEffect(() => {
    document.title = 'About – MD Hasanull Hoque'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      {/* ───────────── HERO ───────────── */}
      <section className="py-12 md:py-20">
        <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-mut">About</p>
        <h1 className="max-w-4xl font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.1] tracking-tight">
          Different Skills.{' '}
          <span className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-[0.08em] after:w-full after:rounded-full after:bg-[linear-gradient(90deg,#9DB87A,#4A5968)] after:content-['']">
            One Perspective.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-mut">
          I’m Hasanull, based in Bangladesh. I move between two professional worlds: building digital
          experiences with code and design, and keeping real-world operations organized as an Admin
          Executive. I like bringing the same care for structure and clarity to both.
        </p>
      </section>

      {/* ───────────── CARDS ───────────── */}
      <section className="pb-12 md:pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="h-full">
            <LiveCard
              spot="rgba(157,184,122,0.2)"
              className="h-full rounded-3xl border border-line bg-card p-6 data-[live=true]:shadow-[0_18px_44px_-22px_rgba(23,23,23,0.5)] data-[live=true]:ring-2 data-[live=true]:ring-ink"
            >
              <h2 className="mb-3 font-display text-xl font-bold">Professional journey</h2>
              <p className="text-[0.95rem] leading-relaxed text-mut">
                I’m in the final year of my BBA (Honours) in Marketing. In November 2025 I joined
                Musemind Digital Agency Ltd. as an Admin Executive, and alongside my work I keep
                learning and building in frontend development.
              </p>
            </LiveCard>
          </Reveal>

          <Reveal className="h-full" delay={80}>
            <LiveCard
              spot="rgba(74,89,104,0.22)"
              className="h-full rounded-3xl border border-line bg-card p-6 data-[live=true]:shadow-[0_18px_44px_-20px_rgba(74,89,104,0.7)] data-[live=true]:ring-2 data-[live=true]:ring-tech dark:data-[live=true]:ring-tech-light"
            >
              <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-tech dark:bg-tech-light" />
                Technology interests
              </h2>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-mut">
                Frontend development, web applications and UI design. I enjoy turning an idea into
                something people can see and use.
              </p>
              <Link
                to="/technology"
                className="mt-auto inline-flex w-fit font-display text-sm font-bold text-tech underline-offset-4 hover:underline dark:text-tech-light"
              >
                Explore technology →
              </Link>
            </LiveCard>
          </Reveal>

          <Reveal className="h-full" delay={160}>
            <LiveCard
              spot="rgba(157,184,122,0.3)"
              className="h-full rounded-3xl border border-line bg-card p-6 data-[live=true]:shadow-[0_18px_44px_-20px_rgba(157,184,122,0.9)] data-[live=true]:ring-2 data-[live=true]:ring-admin"
            >
              <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-admin" />
                Administrative experience
              </h2>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-mut">
                Admin Executive at Musemind Digital Agency Ltd. since November 2025, contributing to
                workplace operations, procurement, employee support, coordination, and administrative
                process improvements.
              </p>
              <Link
                to="/administration"
                className="mt-auto inline-flex w-fit font-display text-sm font-bold text-admin-mut underline-offset-4 hover:underline dark:text-admin"
              >
                Explore administration →
              </Link>
            </LiveCard>
          </Reveal>

          <Reveal className="h-full">
            <LiveCard
              spot="rgba(157,184,122,0.2)"
              className="h-full rounded-3xl border border-line bg-card p-6 data-[live=true]:shadow-[0_18px_44px_-22px_rgba(23,23,23,0.5)] data-[live=true]:ring-2 data-[live=true]:ring-ink"
            >
              <h2 className="mb-3 font-display text-xl font-bold">Education</h2>
              <p className="font-display text-base font-bold">BBA (Honours), Marketing</p>
              <p className="mt-1 text-[0.95rem] text-mut">Final year</p>
            </LiveCard>
          </Reveal>

          <Reveal className="h-full lg:col-span-1" delay={80}>
            <LiveCard
              spot="rgba(157,184,122,0.2)"
              className="h-full rounded-3xl border border-line bg-card p-6 data-[live=true]:shadow-[0_18px_44px_-22px_rgba(23,23,23,0.5)] data-[live=true]:ring-2 data-[live=true]:ring-ink"
            >
              <h2 className="mb-4 font-display text-xl font-bold">Skills</h2>
              <p className="mb-2 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-mut">
                Technology
              </p>
              <ul className="mb-4 flex flex-wrap gap-1.5">
                {techSkills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-tech-soft px-2.5 py-1 text-xs font-semibold text-tech-deep dark:bg-tech dark:text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mb-2 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-mut">
                Administration
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {adminAreas.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-admin-soft px-2.5 py-1 text-xs font-semibold text-admin-on"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </LiveCard>
          </Reveal>

          <Reveal className="h-full" delay={160}>
            <LiveCard
              spot="rgba(157,184,122,0.2)"
              className="h-full rounded-3xl border border-dashed border-mut/50 bg-card p-6 data-[live=true]:ring-2 data-[live=true]:ring-ink"
            >
              <h2 className="mb-3 font-display text-xl font-bold">Personal interests</h2>
              <span className="w-fit rounded-full border border-dashed border-mut/60 px-3 py-1 font-mono text-[0.7rem] font-medium text-mut">
                to be added
              </span>
            </LiveCard>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
