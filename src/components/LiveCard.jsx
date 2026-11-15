import { useEffect, useRef, useState } from 'react'

// LiveCard = behaviour only. It sets data-live="true|false" on the card and
// children react with Tailwind `group-data-[live=true]:` utilities.
// The card's look (ring, shadow, colours) is passed in through className
// at the place where the card is used, so text and classes stay together.
//
// Modes
//  - reduced : prefers-reduced-motion → always live, no tilt
//  - hover   : mouse devices → pointer enter/focus = live, tilt + spotlight
//  - touch   : touch devices → live while card is in the middle of viewport

function getMode() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'hover'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'reduced'
  if (window.matchMedia('(hover: hover)').matches) return 'hover'
  return 'touch'
}

export default function LiveCard({
  className = '',
  spot = 'rgba(157,184,122,0.28)', // spotlight colour = the card's own theme colour
  children,
}) {
  const ref = useRef(null)
  const [mode] = useState(getMode)
  const [live, setLive] = useState(mode === 'reduced')

  // Touch devices: live while the card sits in the middle band of the viewport
  useEffect(() => {
    if (mode !== 'touch') return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting), {
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [mode])

  const resetTilt = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  const onPointerEnter = (e) => {
    if (mode === 'hover' && e.pointerType !== 'touch') setLive(true)
  }

  const onPointerLeave = () => {
    if (mode !== 'hover') return
    setLive(false)
    resetTilt()
  }

  const onPointerMove = (e) => {
    if (mode !== 'hover' || e.pointerType === 'touch') return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = -(py - 0.5) * 2 * 6 // max ~6deg
    const ry = (px - 0.5) * 2 * 8 // max ~8deg
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`
  }

  const onFocus = () => {
    if (mode === 'hover') setLive(true)
  }

  const onBlur = (e) => {
    if (mode !== 'hover') return
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setLive(false)
      resetTilt()
    }
  }

  return (
    <div
      ref={ref}
      data-live={live ? 'true' : 'false'}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`group relative overflow-hidden transition-[transform,box-shadow] duration-200 ease-out will-change-transform ${className}`}
    >
      {/* coloured spotlight that follows the cursor */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), ${spot}, transparent 70%)`,
        }}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-data-[live=true]:opacity-100"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  )
}
