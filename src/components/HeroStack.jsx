import { Link } from 'react-router-dom'
import CodeArt from './CodeArt'

// Short previews only; full lists stay on the Home page / their own pages.
const adminPreview = ['Office Administration', 'Vendor Coordination', 'Procurement & Purchasing']
const techCode = ['const idea = "digital";', 'buildExperience(idea)']

// Shared hover/focus behaviour. The card that is hovered or focused
// straightens up, lifts, and jumps above its sibling so it reads as "the one".
const cardBase =
  'group absolute inset-x-0 block rounded-[1.75rem] p-4 sm:p-5 ' +
  'shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)] ' +
  'transition duration-300 ease-out ' +
  'hover:z-30 focus-visible:z-30 hover:rotate-0 focus-visible:rotate-0 ' +
  'hover:-translate-y-2 focus-visible:-translate-y-2 hover:scale-[1.02] focus-visible:scale-[1.02] ' +
  'motion-reduce:transition-none motion-reduce:transform-none ' +
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

export default function HeroStack() {
  return (
    <div className="relative mx-auto h-[28rem] w-full max-w-[22rem] sm:h-[30rem] sm:max-w-sm md:h-[31rem] md:max-w-[25rem]">
      {/* Card 1 (back, top): Administration */}
      <Link
        to="/administration"
        aria-label="Explore Administration"
        className={`${cardBase} top-0 z-10 h-[56%] -rotate-3 bg-admin-soft text-admin-on focus-visible:ring-admin-deep`}
      >
        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-admin px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-admin-on">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-admin-on" />
          Administration
        </span>

        <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.65rem)] font-bold leading-tight">
          Administration & Operations
        </h3>
        <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-admin-mut sm:max-w-none">
          Organized workplaces, managed resources, coordinated people.
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {adminPreview.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-admin-mut/30 bg-white/60 px-3 py-1 text-xs font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span
          aria-hidden="true"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-admin-deep text-admin-ond transition duration-300 group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
        >
          <Arrow />
        </span>
      </Link>

      {/* Card 2 (front, bottom): Technology */}
      <Link
        to="/technology"
        aria-label="Explore Technology"
        className={`${cardBase} bottom-0 z-20 h-[56%] rotate-2 bg-tech-deep text-tech-ond focus-visible:ring-tech-light`}
      >
        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-tech px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-white">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tech-light" />
          Technology
        </span>

        <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.65rem)] font-bold leading-tight text-white">
          Technology & Design
        </h3>
        <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-tech-light sm:max-w-none">
          Ideas turned into digital experiences through code and design.
        </p>

        <CodeArt lines={techCode} label="typing preview" autoPlay compact className="mt-3" />

        <span
          aria-hidden="true"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-tech text-white transition duration-300 group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:transition-none"
        >
          <Arrow />
        </span>
      </Link>
    </div>
  )
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
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