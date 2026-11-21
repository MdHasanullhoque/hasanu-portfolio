import { Link } from 'react-router-dom'
import CodeArt from './CodeArt'

// Short previews only; full lists stay on the Home page / their own pages.
const adminPreview = ['Office Administration', 'Vendor Coordination', 'Procurement & Purchasing']
const techCode = ['const idea = "digital";', 'buildExperience(idea)']

const cardBase =
  'group absolute inset-x-0 isolate block overflow-hidden rounded-[1.75rem] border border-white/60 p-4 ' +
  'shadow-[0_28px_70px_-30px_rgba(0,0,0,0.55)] ' +
  'transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ' +
  'hover:z-30 focus-visible:z-30 hover:-translate-y-2 focus-visible:-translate-y-2 hover:scale-[1.025] focus-visible:scale-[1.025] ' +
  'motion-reduce:transition-none motion-reduce:transform-none ' +
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

export default function HeroStack() {
  return (
    <div className="relative mx-auto h-[29rem] w-full max-w-[22rem] sm:h-[31rem] sm:max-w-sm md:h-[32rem] md:max-w-[25rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-5 inset-y-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(197,255,92,0.14),transparent_68%)] blur-xl"
      />
      {/* Card 1 (back, top): Administration */}
      <Link
        to="/administration"
        aria-label="Explore Administration"
        className={`${cardBase} top-0 z-10 h-[56%] -rotate-[5deg] bg-[linear-gradient(145deg,#f5f8ee_0%,#e5edd8_100%)] text-admin-on focus-visible:ring-admin-deep sm:p-5`}
      >
        <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full border border-admin/20" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-5 -top-9 h-24 w-24 rounded-full border border-admin/20" />
        <span className="relative mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-admin/20 bg-white/70 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-admin-on shadow-sm">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-admin-on" />
          Administration
        </span>

        <h3 className="relative max-w-[17rem] font-display text-[clamp(1.25rem,2.4vw,1.65rem)] font-bold leading-tight tracking-tight">
          Administration & Operations
        </h3>
        <p className="relative mt-2 max-w-[28ch] text-sm leading-relaxed text-admin-mut sm:max-w-none">
          Organized workplaces, managed resources, coordinated people.
        </p>

        <ul className="relative mt-4 flex flex-wrap gap-2">
          {adminPreview.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-admin-mut/20 bg-white/65 px-3 py-1 text-[0.68rem] font-semibold shadow-sm"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span
          aria-hidden="true"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-admin-deep text-admin-ond shadow-lg transition duration-500 group-hover:rotate-45 group-focus-visible:rotate-45 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
        >
          <Arrow />
        </span>
      </Link>

      {/* Card 2 (front, bottom): Technology */}
      <Link
        to="/technology"
        aria-label="Explore Technology"
        className={`${cardBase} bottom-0 z-20 h-[56%] rotate-[4deg] bg-[linear-gradient(145deg,#263744_0%,#151f29_80%)] text-tech-ond focus-visible:ring-tech-light sm:p-5`}
      >
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-12 h-52 w-52 rounded-full border border-tech-light/10" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-11 -right-7 h-40 w-40 rounded-full border border-tech-light/10" />
        <span className="relative mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-tech-light/20 bg-white/10 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tech-light" />
          Technology
        </span>

        <h3 className="relative max-w-[17rem] font-display text-[clamp(1.25rem,2.4vw,1.65rem)] font-bold leading-tight tracking-tight text-white">
          Technology & Design
        </h3>
        <p className="relative mt-2 max-w-[28ch] text-sm leading-relaxed text-tech-light sm:max-w-none">
          Ideas turned into digital experiences through code and design.
        </p>

        <div className="relative mt-3 max-w-[19rem] rounded-2xl bg-white/5 p-1 ring-1 ring-white/10 transition duration-500 group-hover:bg-white/10 group-hover:ring-white/20">
          <CodeArt lines={techCode} label="typing preview" autoPlay compact />
        </div>

        <span
          aria-hidden="true"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-tech text-white shadow-lg transition duration-500 group-hover:rotate-45 group-focus-visible:rotate-45 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
        >
          <Arrow />
        </span>
      </Link>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-[43%] z-40 flex animate-toast-enter items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-3 py-2.5 shadow-[0_16px_40px_-16px_rgba(20,30,24,0.5)] backdrop-blur-xl motion-reduce:animate-none sm:-right-5 sm:px-4"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#edfad7] text-[#47612e]">
          <Check />
        </span>
        <span className="block">
          <span className="block font-display text-xs font-bold text-[#20251c] sm:text-sm">One portfolio</span>
          <span className="mt-0.5 block font-mono text-[0.55rem] uppercase tracking-wider text-[#6e7667]">
            Two distinct pathways
          </span>
        </span>
        <span className="relative ml-1 h-2 w-2 shrink-0 rounded-full bg-brand">
          <span className="absolute inset-0 animate-ping rounded-full bg-brand/70 motion-reduce:animate-none" />
        </span>
      </div>
    </div>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
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