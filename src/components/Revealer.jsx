import { useEffect, useState } from 'react'

// Exact same transform logic as original JS source
function getRevealerStyle(direction, w, h) {
  const diag = Math.sqrt(w * w + h * h)
  switch (direction) {
    case 'cornertopleft':
      return { width: diag, height: diag, transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 135deg) translate3d(0px, ${diag}px, 0px)` }
    case 'cornertopright':
      return { width: diag, height: diag, transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, -135deg) translate3d(0px, ${diag}px, 0px)` }
    case 'cornerbottomleft':
      return { width: diag, height: diag, transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 45deg) translate3d(0px, ${diag}px, 0px)` }
    case 'cornerbottomright':
      return { width: diag, height: diag, transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, -45deg) translate3d(0px, ${diag}px, 0px)` }
    case 'left':
      return { width: h, height: w, transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 90deg) translate3d(0px, 100%, 0px)` }
    case 'right':
      return { width: h, height: w, transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, -90deg) translate3d(0px, 100%, 0px)` }
    case 'bottom':
      return { width: '100vw', height: '100vh', transform: 'none' }
    case 'top':
    default:
      return { width: '100vw', height: '100vh', transform: 'rotate3d(0, 0, 1, 180deg)' }
  }
}

export default function Revealer({ trigger, direction = 'cornertopright' }) {
  const [cls, setCls] = useState('')
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!trigger) return
    // Small delay then animate
    const t1 = setTimeout(() => setCls(`revealer--${direction} revealer--animate opacity-100`), 50)
    const t2 = setTimeout(() => setCls(''), 1600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [trigger])

  const revStyle = getRevealerStyle(direction, size.w, size.h)

  return (
    <div className={`revealer ${cls}`} style={revStyle}>
      <div className="revealer__layer" />
      <div className="revealer__layer" />
      <div className="revealer__layer" />
    </div>
  )
}
