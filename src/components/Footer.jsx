import { Link } from 'react-router-dom'
import { EMAIL, GITHUB, LINKEDIN } from '../lib/content'

// Footer is dark in both light and dark mode (bg-dk), full width, rounded top corners.
export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-[2rem] bg-dk px-5 pb-8 pt-14 text-[#F3F1EA] md:mt-24 [&_a:focus-visible]:outline-[#F3F1EA]">
      <div className="mx-auto max-w-[70rem]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              HASANULL<span className="text-admin">.</span>
              <span className="text-tech-light">_</span>
            </p>
            <p className="mt-3 max-w-xs text-[0.95rem] text-[#A6A398]">
              Building Digital Experiences. Managing Real-World Operations.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#A6A398]">
              Navigate
            </h2>
            <ul className="flex flex-col gap-2 text-[0.95rem]">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#A6A398]">
              Pathways
            </h2>
            <ul className="flex flex-col gap-2 text-[0.95rem]">
              <li>
                <Link
                  to="/administration"
                  className="flex items-center gap-2 transition-colors hover:text-admin"
                >
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-admin" />
                  Administration
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="flex items-center gap-2 transition-colors hover:text-tech-light"
                >
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-tech-light" />
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#A6A398]">
              Connect
            </h2>
            <ul className="flex flex-col gap-2 text-[0.95rem]">
              <li>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                {LINKEDIN ? (
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[#A6A398]">
                    LinkedIn
                    <span className="rounded-full border border-dashed border-[#A6A398]/60 px-2 py-0.5 font-mono text-[0.65rem]">
                      soon
                    </span>
                  </span>
                )}
              </li>
              <li>
                {EMAIL ? (
                  <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                    Email
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[#A6A398]">
                    Email
                    <span className="rounded-full border border-dashed border-[#A6A398]/60 px-2 py-0.5 font-mono text-[0.65rem]">
                      soon
                    </span>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-[#A6A398] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MD Hasanull Hoque</p>
          <p className="font-mono text-xs">Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}
