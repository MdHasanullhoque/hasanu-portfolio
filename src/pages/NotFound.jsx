import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found – MD Hasanull Hoque'
  }, [])

  return (
    <div className="mx-auto max-w-[70rem] px-5">
      <section className="py-24 text-center md:py-32">
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-mut">404</p>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.1] tracking-tight">
          Page not found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[0.95rem] text-mut">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3.5 font-display text-sm font-bold tracking-wide text-bg transition hover:-translate-y-0.5"
        >
          BACK HOME
        </Link>
      </section>
    </div>
  )
}
