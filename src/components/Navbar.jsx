import { useState } from 'react'

const navItems = [
  { id: 'home',      icon: 'fa-home',         label: 'Home' },
  { id: 'about',     icon: 'fa-user',          label: 'About' },
  { id: 'portfolio', icon: 'fa-briefcase',     label: 'Projects' },
  { id: 'contact',   icon: 'fa-envelope-open', label: 'Contact' },
  { id: 'github',    icon: 'fa-github',        label: 'Github', external: 'https://github.com/rimshasajid436' },
]

export default function Navbar({ active, onNav }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = (item) => {
    if (item.external) {
      window.open(item.external, '_blank')
      return
    }
    onNav(item.id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop sidebar */}
      <header style={{
        position: 'fixed', right: 30, top: '50%',
        transform: 'translateY(-50%)', zIndex: 30,
      }} className="hidden-mobile">
        <style>{`
          @media (max-width: 991px) { .hidden-mobile { display: none !important; } }
          @media (min-width: 992px) { .show-mobile-btn { display: none !important; } }
        `}</style>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {navItems.map(item => (
            <li key={item.id}
              onClick={() => handleClick(item)}
              className={`nav-item ${active === item.id ? 'active' : ''}`}
              style={{
                width: 50, height: 50, borderRadius: '50%',
                background: active === item.id ? 'var(--accent)' : 'var(--bg3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '18px 0', position: 'relative', transition: 'background 0.3s',
                border: 'none',
              }}
              data-cursor-hover
            >
              <i className={`fa ${item.icon}`} style={{ fontSize: 18, color: '#fff', pointerEvents: 'none' }} />
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </header>

      {/* Mobile hamburger */}
      <div className="show-mobile-btn" style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
        <button onClick={() => setMobileOpen(!mobileOpen)} data-cursor-hover
          style={{ width: 50, height: 50, background: 'var(--bg3)', border: 'none',
            borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, borderRadius: 2, background: '#fff',
              transition: 'all 0.3s',
              transform: mobileOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              opacity: mobileOpen && i===1 ? 0 : 1,
            }} />
          ))}
        </button>

        <ul className={`mobile-menu${mobileOpen ? ' open' : ''}`} style={{ listStyle: 'none', padding: 0 }}>
          {navItems.map(item => (
            <li key={item.id}
              className={active === item.id ? 'active-m' : ''}
              onClick={() => handleClick(item)}
              data-cursor-hover
            >
              <div>
                <i className={`fa ${item.icon}`} style={{ width: 24, textAlign: 'center', color: active === item.id ? 'var(--accent)' : '#fff' }} />
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}