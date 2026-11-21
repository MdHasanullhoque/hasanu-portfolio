import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import HeroStack from '../components/HeroStack'
import portrait from '../assets/testypic.jfif'

// Page-only lists live here, next to the classes that style them.
const marqueeWords = ['Frontend', 'Admin', 'UI Design', 'Operations', 'Code', 'Coordination']

export default function Home() {
  useEffect(() => {
    document.title = 'MD Hasanull Hoque – Developer by creativity. Administrator by profession.'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      {/* ───────────── 1. HERO ───────────── */}
      <section className="grid items-center gap-12 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:py-20">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-mut sm:text-xs">
            <span aria-hidden="true" className="h-2 w-2 bg-tech dark:bg-tech-light" />
            Two worlds. Equal passion.
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-admin" />
          </p>

          <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight">
            HELLO, I’M
            <br />
            <span className="hero-name-underline relative inline-block pb-2 text-[0.88em]">
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

        <div className="relative mx-auto w-full max-w-[25rem] md:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-3 rounded-[2.5rem] border border-admin/40 bg-admin-soft/50 transition-transform duration-700 ease-out hover:rotate-1 motion-reduce:transition-none"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-1 -rotate-2 rounded-[2.25rem] bg-[linear-gradient(145deg,rgba(197,255,92,0.72),rgba(74,89,104,0.18)_55%,rgba(157,184,122,0.52))]"
          />
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-tech-deep shadow-[0_35px_80px_-32px_rgba(25,35,30,0.65)]">
            <img
              src={portrait}
              alt="Portrait of MD Hasanull Hoque"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-[#10171D]/35 via-transparent to-[#10171D]/90"
            />

            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#10171D]/35 px-3 py-2 font-mono text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_rgba(197,255,92,0.9)]" />
              One identity · two worlds
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
              {/* <p className="mb-2 font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand">
                Developer · Admin Executive
              </p> */}
              {/* <p className="font-display text-3xl font-bold leading-[0.95] tracking-tight sm:text-4xl">
                MD Hasanull
                <br />
                Hoque<span className="text-brand">.</span>
              </p> */}
              <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/75">
                  Bangladesh
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Portfolio · 2026
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-2 z-10 flex animate-toast-enter items-center gap-3 rounded-2xl border border-white/80 bg-card/95 px-3 py-2.5 shadow-[0_18px_40px_-18px_rgba(23,23,23,0.45)] backdrop-blur-xl motion-reduce:animate-none sm:-right-5 sm:px-4">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-admin-soft text-admin-deep">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 15.5 8.5 11l3 3L18 7.5" />
                <path d="M13.5 7.5H18V12" />
              </svg>
            </span>
            <span>
              <span className="block font-display text-xs font-bold text-ink">Ideas into impact</span>
              <span className="mt-0.5 block font-mono text-[0.55rem] uppercase tracking-wider text-mut">
                Code · Design · Operations
              </span>
            </span>
          </div>
        </div>

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

        {/* Individual Admin and Technology cards are hidden; show the stacked pathway UI instead. */}
        <div className="flex justify-center">
          <HeroStack />
        </div>
      </section>
    </div>
  )
}
