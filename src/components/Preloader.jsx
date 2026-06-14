import { useEffect, useState } from 'react'

export default function Preloader() {
  const [preloaded, setPreloaded] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPreloaded(true), 1500)
    const t2 = setTimeout(() => setHidden(true), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null

  return (
    <div id="preloader" className={preloaded ? 'preloaded' : ''}>
      <div className="preloader-line" />
    </div>
  )
}
