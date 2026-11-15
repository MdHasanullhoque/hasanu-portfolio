import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { EMAIL, GITHUB, LINKEDIN } from '../lib/content'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact – MD Hasanull Hoque'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      <section className="grid gap-10 py-12 md:py-20 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-mut">Contact</p>
          <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.1] tracking-tight">
            Have an Idea or{' '}
            <span className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-[0.08em] after:w-full after:rounded-full after:bg-[linear-gradient(90deg,#9DB87A,#4A5968)] after:content-['']">
              Opportunity?
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-mut">
            I’m open to conversations about frontend development, UI design, collaboration and
            administrative opportunities. Send a message, or find me on GitHub.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3.5 font-display text-sm font-bold tracking-wide text-bg transition hover:-translate-y-0.5"
            >
              GITHUB ↗
            </a>

            {EMAIL ? (
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-bold tracking-wide text-ink transition hover:bg-ink hover:text-bg"
              >
                EMAIL
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center rounded-full border border-dashed border-mut/60 px-6 py-3.5 font-mono text-xs font-medium text-mut"
              >
                Email · to be added
              </button>
            )}

            {LINKEDIN ? (
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-bold tracking-wide text-ink transition hover:bg-ink hover:text-bg"
              >
                LINKEDIN ↗
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center rounded-full border border-dashed border-mut/60 px-6 py-3.5 font-mono text-xs font-medium text-mut"
              >
                LinkedIn · to be added
              </button>
            )}
          </div>
        </div>

        <Reveal>
          <div className="rounded-[1.75rem] border border-line bg-card p-6 sm:p-8">
            <h2 className="mb-5 font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  )
}
