// Infinite horizontal strip. Pauses on hover. Decorative → aria-hidden.
// Two identical halves; the animation moves -50% so the loop is seamless.
// After every word: slate square, sage circle, slate square, ...

export default function Marquee({ words }) {
  const run = [...words, ...words] // even length keeps the square/circle rhythm across halves

  const half = (hidden) => (
    <div
      className={`flex shrink-0 items-center gap-6 pr-6 motion-reduce:flex-wrap ${
        hidden ? 'motion-reduce:hidden' : ''
      }`}
    >
      {run.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center gap-6">
          <span className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">{word}</span>
          {i % 2 === 0 ? (
            <span className="h-2.5 w-2.5 bg-tech dark:bg-tech-light" />
          ) : (
            <span className="h-2.5 w-2.5 rounded-full bg-admin" />
          )}
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-full border border-line bg-card py-4"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:justify-center">
        {half(false)}
        {half(true)}
      </div>
    </div>
  )
}
