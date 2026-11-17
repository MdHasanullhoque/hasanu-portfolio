import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LiveCard from '../components/LiveCard'
import Reveal from '../components/Reveal'
import CodeArt from '../components/CodeArt'
import { APPROACH, DESIGN_EXPERIMENTS, PROJECTS, SKILL_GROUPS } from '../lib/content'

function ExperimentPreview({ type }) {
  if (type === 'landing') {
    return (
      <div className="relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl bg-[#17241f] p-5 text-white sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold tracking-tight">form & field</span>
          <span className="rounded-full border border-white/25 px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-wider text-white/70">
            made for living
          </span>
        </div>
        <div className="relative z-10 max-w-[13rem] py-5">
          <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#c5ff5c]">
            Thoughtful essentials
          </p>
          <p className="font-display text-3xl font-bold leading-[0.95] tracking-tight">
            Less, but
            <br />
            better.
          </p>
          <span className="mt-4 inline-flex rounded-full bg-[#c5ff5c] px-3 py-1.5 font-mono text-[0.6rem] font-semibold text-[#17241f]">
            Explore the collection ↗
          </span>
        </div>
        <div aria-hidden="true" className="absolute -bottom-10 -right-5 h-40 w-32 rotate-[18deg] rounded-[45%] bg-[#c5ff5c]/20 blur-sm" />
        <div aria-hidden="true" className="absolute bottom-5 right-8 h-28 w-20 rotate-[18deg] rounded-[45%] border border-[#c5ff5c]/50" />
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="min-h-56 rounded-2xl bg-[#edf1eb] p-3 text-[#26342c] sm:p-4">
        <div className="flex h-full min-h-48 overflow-hidden rounded-xl border border-[#dce3da] bg-white shadow-sm">
          <div className="w-10 shrink-0 bg-[#25372d] p-2 sm:w-12">
            <span className="mx-auto block h-5 w-5 rounded-md bg-[#c5ff5c]" />
            <div className="mt-5 space-y-2.5">
              <span className="mx-auto block h-1.5 w-5 rounded bg-white/70" />
              <span className="mx-auto block h-1.5 w-5 rounded bg-white/25" />
              <span className="mx-auto block h-1.5 w-5 rounded bg-white/25" />
            </div>
          </div>
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-[0.7rem] font-bold sm:text-xs">Good morning, Hasan</p>
                <p className="mt-0.5 text-[0.5rem] text-[#78847b] sm:text-[0.6rem]">Here’s your workspace today.</p>
              </div>
              <span className="h-5 w-5 rounded-full bg-[#e6eedc]" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
              {[
                ['Tasks', '12'],
                ['Done', '08'],
                ['Focus', '4.5h'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#e8ece6] p-1.5 sm:p-2">
                  <p className="text-[0.45rem] text-[#78847b] sm:text-[0.5rem]">{label}</p>
                  <p className="mt-1 font-display text-xs font-bold sm:text-sm">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-[#f6f8f4] p-2">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[0.5rem] font-semibold sm:text-[0.55rem]">Weekly progress</span>
                <span className="text-[0.45rem] text-[#78847b]">This week</span>
              </div>
              <div className="flex h-10 items-end gap-1">
                {[38, 65, 48, 82, 57, 92, 70].map((height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-sm ${index === 5 ? 'bg-[#78945f]' : 'bg-[#dce8d1]'}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'application') {
    return (
      <div className="min-h-56 rounded-2xl bg-[#f1eee8] p-4 sm:p-5">
        <div className="mx-auto max-w-xs rounded-xl border border-[#e5e0d7] bg-white p-3 shadow-sm sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-xs font-bold text-[#2e302c]">Today’s tasks</p>
              <p className="mt-0.5 text-[0.55rem] text-[#8a8b83]">Tuesday, June 18</p>
            </div>
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#f1eee8] text-xs text-[#6e745f]">+</span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              ['Review project brief', 'In progress'],
              ['Prepare design handoff', 'Up next'],
              ['Share weekly update', 'Completed'],
            ].map(([task, status], index) => (
              <div key={task} className="flex items-center gap-2 rounded-lg border border-[#efeee9] p-2">
                <span className={`h-3.5 w-3.5 shrink-0 rounded-full border ${index === 2 ? 'border-[#78945f] bg-[#78945f]' : 'border-[#d7d9d0]'}`} />
                <span className="min-w-0 flex-1 truncate text-[0.55rem] font-medium text-[#454840]">{task}</span>
                <span className={`shrink-0 rounded-full px-1.5 py-1 text-[0.42rem] ${index === 0 ? 'bg-[#edf3e6] text-[#60764b]' : 'bg-[#f4f3ef] text-[#85867f]'}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#f8f8f5] px-2.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8daa6b]" />
            <span className="text-[0.5rem] text-[#73766d]">You’re right on track today.</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'components') {
    return (
      <div className="flex min-h-56 flex-col justify-center rounded-2xl bg-[#e9edf2] p-5 sm:p-6">
        <div className="mx-auto w-full max-w-xs rounded-xl border border-white/80 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-display text-xs font-bold text-[#263343]">Interface kit</p>
            <span className="rounded-full bg-[#e9edf2] px-2 py-1 font-mono text-[0.45rem] uppercase tracking-wider text-[#566577]">
              v 1.0
            </span>
          </div>
          <p className="mb-1.5 text-[0.5rem] font-semibold text-[#566577]">BUTTONS</p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#34485e] px-3 py-2 text-[0.55rem] font-semibold text-white">Primary action</span>
            <span className="rounded-lg border border-[#dce2e8] px-3 py-2 text-[0.55rem] font-semibold text-[#34485e]">Secondary</span>
          </div>
          <p className="mb-1.5 mt-4 text-[0.5rem] font-semibold text-[#566577]">TEXT FIELD</p>
          <div className="rounded-lg border border-[#dce2e8] px-3 py-2 text-[0.55rem] text-[#929ca7]">Enter your email address</div>
          <div className="mt-3 flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e8eddf] font-display text-[0.5rem] font-bold text-[#526343]">H</span>
            <span className="rounded-full bg-[#f5e9d8] px-2.5 py-1 font-mono text-[0.48rem] text-[#866239]">In review</span>
            <span className="rounded-full bg-[#e5f1e8] px-2.5 py-1 font-mono text-[0.48rem] text-[#4c7656]">Complete</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl bg-[#352b43] p-5 text-white">
      <div aria-hidden="true" className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-[#e7a9a0] blur-[1px]" />
      <div aria-hidden="true" className="absolute -right-5 -top-8 h-36 w-36 rounded-full bg-[#b8c982]" />
      <div aria-hidden="true" className="absolute -bottom-12 right-16 h-36 w-36 rounded-full bg-[#e7b766]" />
      <div className="relative z-10 -rotate-6 text-center">
        <p className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-white/75">A little offbeat</p>
        <p className="mt-2 font-display text-4xl font-bold leading-[0.85] tracking-tight sm:text-5xl">
          PLAY
          <br />
          WITH
          <br />
          COLOR<span className="text-[#e7b766]">.</span>
        </p>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/30 px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-wider text-white/80">
        moodboard no. 05
      </span>
    </div>
  )
}

export default function Technology() {
  const [visibleProjectCount, setVisibleProjectCount] = useState(4)

  useEffect(() => {
    document.title = 'Technology & Design – MD Hasanull Hoque'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      {/* ───────────── HERO ───────────── */}
      <section className="py-12 md:py-20">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-tech-soft px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-tech-deep dark:bg-tech dark:text-white">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tech dark:bg-tech-light" />
          Technology & Design
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.15] tracking-tight">
          Turning Ideas Into{' '}
          <span className="rounded-xl bg-tech px-2 text-white [box-decoration-break:clone]">
            Digital Experiences.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-mut">
          I’m interested in frontend development, web applications and UI design. This page collects the
          technologies I work with, the projects I’m building and the way I like to approach a build.
        </p>
      </section>

      {/* ───────────── SNAPSHOT ───────────── */}
      <section className="pb-8 md:pb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Focus', value: 'Frontend products' },
            { label: 'Practice', value: 'UI systems & UX flows' },
            { label: 'Workflow', value: 'Prototype → build → refine' },
          ].map((stat) => (
            <Reveal key={stat.label} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-card p-4 sm:p-5">
                <p className="mb-2 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-mut">
                  {stat.label}
                </p>
                <p className="font-display text-lg font-bold leading-snug text-ink">{stat.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── SKILLS ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">Skills</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 90} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-card p-6">
                <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-tech dark:bg-tech-light" />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-tech-soft px-3 py-1.5 text-sm font-semibold text-tech-deep dark:bg-tech dark:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── FEATURED PROJECTS ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-2 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Featured projects
          </h2>
          <p className="mb-6 max-w-xl text-[0.95rem] text-mut">
            Dashed tags mark details that are still to be added.
          </p>
        </Reveal>

        <div id="featured-projects-grid" className="grid gap-5 md:grid-cols-2">
          {PROJECTS.slice(0, visibleProjectCount).map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 90} className="h-full">
              <LiveCard
                spot="rgba(74,89,104,0.22)"
                className="h-full rounded-3xl border border-line bg-card p-5 data-[live=true]:shadow-[0_20px_50px_-20px_rgba(74,89,104,0.7)] data-[live=true]:ring-2 data-[live=true]:ring-tech dark:data-[live=true]:ring-tech-light sm:p-6"
              >
                <CodeArt lines={p.code} className="mb-5" />

                <h3 className="mb-2 font-display text-xl font-bold leading-tight">{p.name}</h3>
                <p className="mb-5 text-[0.95rem] leading-relaxed text-mut">{p.description}</p>

                <dl className="mb-6 flex flex-col gap-3 text-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <dt className="w-32 shrink-0 font-mono text-xs font-medium uppercase tracking-wider text-mut">
                      Tech
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {p.tech ? (
                        p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-tech-soft px-3 py-1 text-xs font-semibold text-tech-deep dark:bg-tech dark:text-white"
                          >
                            {t}
                          </span>
                        ))
                      ) : (
                        <span className="rounded-full border border-dashed border-mut/60 px-3 py-1 font-mono text-[0.7rem] font-medium text-mut">
                          to be added
                        </span>
                      )}
                    </dd>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <dt className="w-32 shrink-0 font-mono text-xs font-medium uppercase tracking-wider text-mut">
                      My contribution
                    </dt>
                    <dd>
                      {p.contribution ? (
                        <span>{p.contribution}</span>
                      ) : (
                        <span className="rounded-full border border-dashed border-mut/60 px-3 py-1 font-mono text-[0.7rem] font-medium text-mut">
                          to be added
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-wrap gap-3">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.name} live preview in a new tab`}
                      className="inline-flex items-center rounded-full bg-tech px-5 py-2.5 font-display text-xs font-bold tracking-wide text-white transition hover:-translate-y-0.5"
                    >
                      LIVE PREVIEW ↗
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center rounded-full border border-dashed border-mut/60 px-5 py-2.5 font-mono text-xs font-medium text-mut"
                    >
                      Live preview · soon
                    </button>
                  )}

                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.name} GitHub repository in a new tab`}
                      className="inline-flex items-center rounded-full border-2 border-tech px-5 py-2 font-display text-xs font-bold tracking-wide text-tech transition hover:bg-tech hover:text-white dark:border-tech-light dark:text-tech-light dark:hover:bg-tech-light dark:hover:text-tech-deep"
                    >
                      GITHUB ↗
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center rounded-full border border-dashed border-mut/60 px-5 py-2.5 font-mono text-xs font-medium text-mut"
                    >
                      GitHub · soon
                    </button>
                  )}
                </div>
              </LiveCard>
            </Reveal>
          ))}
        </div>
        {visibleProjectCount < PROJECTS.length && (
          <div className="mt-7 flex flex-col items-center gap-2">
            <button
              type="button"
              aria-controls="featured-projects-grid"
              onClick={() =>
                setVisibleProjectCount((count) => Math.min(count + 3, PROJECTS.length))
              }
              className="group inline-flex items-center gap-3 rounded-full border border-tech/30 bg-card px-6 py-3 font-display text-sm font-bold text-tech transition duration-300 hover:-translate-y-0.5 hover:border-tech hover:bg-tech hover:text-white hover:shadow-[0_12px_30px_-14px_rgba(74,89,104,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech dark:border-tech-light/40 dark:text-tech-light dark:hover:bg-tech-light dark:hover:text-tech-deep dark:focus-visible:outline-tech-light"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-tech-soft text-base leading-none transition-transform duration-300 group-hover:rotate-90 group-hover:bg-white/15 dark:bg-tech dark:group-hover:bg-tech-deep/15">
                +
              </span>
              Load more projects
              <span className="font-mono text-[0.65rem] font-medium opacity-70">
                ({Math.min(3, PROJECTS.length - visibleProjectCount)} more)
              </span>
            </button>
            <p className="font-mono text-[0.65rem] font-medium tracking-wide text-mut">
              Showing {visibleProjectCount} of {PROJECTS.length} projects
            </p>
          </div>
        )}
      </section>

      {/* ───────────── DESIGN EXPERIMENTS ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Design experiments
          </h2>
          <p className="mb-6 mt-2 max-w-xl text-[0.95rem] leading-relaxed text-mut">
            A few directions I like exploring, from focused product layouts to playful visual systems.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {DESIGN_EXPERIMENTS.map((experiment, i) => (
            <Reveal key={experiment.type} delay={(i % 2) * 80} className="h-full">
              <article className="h-full rounded-3xl border border-line bg-card p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-mut">
                    Experiment {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-tech-soft px-2.5 py-1 font-mono text-[0.6rem] font-medium text-tech-deep dark:bg-tech dark:text-white">
                    UI concept
                  </span>
                </div>
                <ExperimentPreview type={experiment.type} />
                <div className="pt-4">
                  <h3 className="font-display text-lg font-bold">{experiment.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mut">{experiment.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── DEVELOPMENT APPROACH ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Development approach
          </h2>
          <ol className="flex flex-wrap items-center gap-2">
            {APPROACH.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-tech px-4 py-2 font-display text-sm font-bold text-white">
                  <span className="font-mono text-[0.7rem] font-medium text-tech-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step}
                </span>
                {i < APPROACH.length - 1 && (
                  <span aria-hidden="true" className="text-mut">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* ───────────── NEXT ───────────── */}
      <section className="py-12 md:py-16">
        <Reveal>
          <Link
            to="/administration"
            className="inline-flex items-center rounded-full bg-admin px-7 py-4 font-display text-sm font-bold tracking-wide text-admin-on transition hover:-translate-y-0.5"
          >
            See the administration side →
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
