import { useState, useRef } from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Revealer from './components/Revealer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Blog from './components/Blog'

// Default direction: cornertopright (top-right → bottom-left) as requested
const DIRECTION = 'cornertopright'

export default function App() {
  const [active, setActive] = useState('home')
  const [display, setDisplay] = useState('home')
  const [revealTrigger, setRevealTrigger] = useState(0)
  const busy = useRef(false)

  const goTo = (id) => {
    if (id === display || busy.current) return
    busy.current = true
    // Trigger revealer
    setRevealTrigger(t => t + 1)
    setActive(id)
    // Switch page at halfway point (750ms into 1500ms animation)
    setTimeout(() => {
      setDisplay(id)
      window.scrollTo(0, 0)
    }, 750)
    // Done
    setTimeout(() => { busy.current = false }, 1600)
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Preloader />
      <CustomCursor />
      <Revealer trigger={revealTrigger} direction={DIRECTION} />
      <Navbar active={active} onNav={goTo} />
      <Home      onNav={goTo} visible={display === 'home'} />
      <About     visible={display === 'about'} />
      <Portfolio visible={display === 'portfolio'} />
      <Contact   visible={display === 'contact'} />
      <Blog      visible={display === 'blog'} />
    </div>
  )
}
