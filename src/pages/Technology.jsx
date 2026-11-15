import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LiveCard from '../components/LiveCard'
import Reveal from '../components/Reveal'
import CodeArt from '../components/CodeArt'
import { APPROACH, DESIGN_EXPERIMENTS, PROJECTS, SKILL_GROUPS } from '../lib/content'

export default function Technology() {
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

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
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
      </section>

      {/* ───────────── DESIGN EXPERIMENTS ───────────── */}
      <section className="py-8 md:py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
            Design experiments
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESIGN_EXPERIMENTS.map((name, i) => (
            <Reveal key={name} delay={(i % 3) * 80} className="h-full">
              <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-dashed border-tech/50 bg-card p-5 dark:border-tech-light/40">
                <h3 className="font-display text-base font-bold">{name}</h3>
                <span className="shrink-0 rounded-full border border-dashed border-mut/60 px-3 py-1 font-mono text-[0.7rem] font-medium text-mut">
                  Coming soon
                </span>
              </div>
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
