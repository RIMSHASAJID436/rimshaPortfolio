import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    // Hide default cursor everywhere
    document.body.style.cursor = 'none'

    // Mouse move — both follow instantly (original uses transform translate)
    const onMove = (e) => {
      outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    // Hover on links/buttons — outer fades, inner grows
    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    const onEnter = () => {
      outer.classList.add('cursor-hover')
      inner.classList.add('cursor-hover')
    }
    const onLeave = () => {
      outer.classList.remove('cursor-hover')
      inner.classList.remove('cursor-hover')
    }

    window.addEventListener('mousemove', onMove)
    addHover()

    // Re-add hover listeners when DOM changes
    const obs = new MutationObserver(addHover)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      obs.disconnect()
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={outerRef} className="mouse-cursor cursor-outer" />
      <div ref={innerRef} className="mouse-cursor cursor-inner" />
    </>
  )
}
