import { useEffect, useRef, useState } from 'react'

// Fade + rise 14px, once, when scrolled into view.
export default function Reveal({
  children,
  className = '',
  delay = 0,
  fromClassName = 'translate-y-[14px] opacity-0',
  shownClassName = 'translate-y-0 opacity-100',
  transitionClassName = 'transition-[opacity,transform] duration-700 ease-out',
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-revealed={shown ? 'true' : 'false'}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={`group/reveal ${transitionClassName} motion-reduce:transform-none motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? shownClassName : fromClassName
      } ${className}`}
    >
      {children}
    </div>
  )
}
