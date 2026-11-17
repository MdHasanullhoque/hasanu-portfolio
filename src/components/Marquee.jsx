// Two identical halves keep the ticker loop seamless.

export default function Marquee({ words }) {
  const run = [...words, ...words] // even length keeps the square/circle rhythm across halves

  const half = (hidden) => (
    <div
      className={`flex shrink-0 items-center gap-4 pr-4 motion-reduce:flex-wrap ${
        hidden ? 'motion-reduce:hidden' : ''
      }`}
    >
      {run.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg/80 px-4 py-2">
            <span className="relative h-2 w-2 shrink-0 rounded-full bg-admin">
              <span className="absolute inset-0 animate-ping rounded-full bg-admin/70 motion-reduce:animate-none" />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.12em] md:text-base">
              {word}
            </span>
          </span>
          <span className="relative h-px w-7 shrink-0 bg-line">
            <span
              className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${
                i % 2 === 0 ? 'left-0 bg-tech dark:bg-tech-light' : 'right-0 bg-admin'
              }`}
            />
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden rounded-2xl border border-line bg-card py-4 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.5)]"
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px overflow-hidden bg-line">
        <span className="absolute left-0 top-0 h-full w-1/4 animate-signal-sweep bg-gradient-to-r from-transparent via-brand to-transparent shadow-glow motion-reduce:animate-none" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card to-transparent sm:w-16" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:justify-center">
        {half(false)}
        {half(true)}
      </div>
    </div>
  )
}
