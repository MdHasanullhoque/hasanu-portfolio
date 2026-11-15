import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LiveCard from '../components/LiveCard'
import Reveal from '../components/Reveal'
import { CASE_STUDIES, PRINCIPLES, RESPONSIBILITIES } from '../lib/content'

export default function Administration() {
  useEffect(() => {
    document.title = 'Administration & Operations – MD Hasanull Hoque'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      {/* ───────────── HERO ───────────── */}
      <section className="py-12 md:py-20">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-admin-soft px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-on">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-admin-mut" />
          Administration & Operations
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.15] tracking-tight">
          Organizing Operations.{' '}
          <span className="rounded-xl bg-admin px-2 text-admin-on [box-decoration-break:clone]">
            Creating Better Workplaces.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-mut">
          I work as an Admin Executive at Musemind Digital Agency Ltd., contributing to workplace
          operations, procurement, employee support, coordination, and administrative process
          improvements.
        </p>

        <dl className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-admin-soft p-4 text-admin-on">
            <dt className="mb-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-mut">
              Position
            </dt>
            <dd className="font-display text-base font-bold">Admin Executive</dd>
          </div>
          <div className="rounded-2xl bg-admin-soft p-4 text-admin-on">
            <dt className="mb-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-mut">
              Organization
            </dt>
            <dd className="font-display text-base font-bold">Musemind Digital Agency Ltd.</dd>
          </div>
          <div className="rounded-2xl bg-admin-soft p-4 text-admin-on">
            <dt className="mb-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-mut">
              Joined
            </dt>
            <dd className="font-display text-base font-bold">November 2025 — Present</dd>
          </div>
        </dl>
      </section>

      {/* ───────────── RESPONSIBILITIES ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Areas of responsibility
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESPONSIBILITIES.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 70} className="h-full">
              <LiveCard
                spot="rgba(157,184,122,0.3)"
                className="h-full rounded-3xl border border-line bg-card p-5 data-[live=true]:shadow-[0_18px_44px_-20px_rgba(157,184,122,0.9)] data-[live=true]:ring-2 data-[live=true]:ring-admin"
              >
                <span className="mb-4 inline-grid h-9 w-9 place-items-center rounded-xl bg-admin-soft font-mono text-xs font-medium text-admin-on">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 font-display text-base font-bold leading-snug">{r.title}</h3>
                <p className="text-sm leading-relaxed text-mut">{r.text}</p>
              </LiveCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── CASE STUDIES ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-2 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">Case studies</h2>
          <p className="mb-6 max-w-xl text-[0.95rem] text-mut">
            Titles are listed here. The write-ups are still to be added.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((title, i) => (
            <Reveal key={title} delay={(i % 3) * 70} className="h-full">
              <LiveCard
                spot="rgba(157,184,122,0.3)"
                className="h-full rounded-3xl border border-line bg-card p-5 data-[live=true]:shadow-[0_18px_44px_-20px_rgba(157,184,122,0.9)] data-[live=true]:ring-2 data-[live=true]:ring-admin"
              >
                <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-mut dark:text-admin">
                  Case {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-3 font-display text-lg font-bold leading-snug">{title}</h3>
                <p className="mb-4 font-mono text-[0.7rem] font-medium leading-relaxed text-mut">
                  Background · Objective · Responsibilities · Execution · Outcome
                </p>
                <span className="mt-auto w-fit rounded-full border border-dashed border-mut/60 px-3 py-1 font-mono text-[0.7rem] font-medium text-mut">
                  details to be added
                </span>
              </LiveCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── EXPERIENCE TIMELINE ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">Experience</h2>
          <ol className="relative ml-3 border-l-2 border-admin pl-8">
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-bg bg-admin"
              />
              <div className="rounded-3xl border border-line bg-card p-5 sm:p-6">
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-admin-mut dark:text-admin">
                  November 2025 — Present
                </p>
                <h3 className="font-display text-xl font-bold">Admin Executive</h3>
                <p className="mt-1 text-[0.95rem] text-mut">Musemind Digital Agency Ltd.</p>
              </div>
            </li>
          </ol>
        </Reveal>
      </section>

      {/* ───────────── PRINCIPLES ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Working principles
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 70} className="h-full">
              <div
                className={`h-full rounded-3xl p-6 ${
                  i % 2 === 0
                    ? 'bg-admin-deep text-admin-ond'
                    : 'border border-line bg-card text-ink'
                }`}
              >
                <span
                  className={`mb-4 inline-block font-mono text-xs font-medium ${
                    i % 2 === 0 ? 'text-admin' : 'text-admin-mut dark:text-admin'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 font-display text-lg font-bold">{p.title}</h3>
                <p className={`text-sm leading-relaxed ${i % 2 === 0 ? 'text-admin-ond/80' : 'text-mut'}`}>
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── NEXT ───────────── */}
      <section className="py-12 md:py-16">
        <Reveal>
          <Link
            to="/technology"
            className="inline-flex items-center rounded-full bg-tech px-7 py-4 font-display text-sm font-bold tracking-wide text-white transition hover:-translate-y-0.5"
          >
            See the technology side →
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
