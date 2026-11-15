// Decorative code window. Lines "type" one by one (clip-path + steps easing,
// 450ms per line, staggered) when an ancestor LiveCard has data-live="true".
// It is only an illustration, so it is aria-hidden and labelled "illustration".

export default function CodeArt({ lines, label = 'illustration', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-2xl border border-tech-light/20 bg-[#10171D] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="ml-2 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-tech-light/70">
          {label}
        </span>
      </div>
      <div className="px-4 py-3 font-mono text-[0.75rem] font-medium leading-6 text-tech-ond">
        {lines.map((line, i) => {
          const isComment = line.trim().startsWith('//') || line.trim().startsWith('<!--')
          return (
            <div
              key={i}
              style={{ animationDelay: `${i * 450}ms` }}
              className={`w-fit max-w-full overflow-hidden whitespace-pre [clip-path:inset(0_100%_0_0)] group-data-[live=true]:animate-type-line motion-reduce:animate-none motion-reduce:[clip-path:none] ${
                isComment ? 'text-tech-light/60' : ''
              }`}
            >
              {line}
            </div>
          )
        })}
      </div>
    </div>
  )
}
