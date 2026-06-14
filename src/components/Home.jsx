import { useState, useEffect } from 'react'

export default function Home({ onNav, visible }) {
  const [isLg, setIsLg] = useState(window.innerWidth >= 992)

  useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 992)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div id="home" style={{
      display: visible ? 'flex' : 'none', minHeight: '100vh',
      alignItems: 'center', position: 'relative', background: 'var(--bg)'
    }}>
      <div className="diagonal-bg" />

      {/* Side portrait desktop */}
      {isLg && (
        <img src="assets/img/rim.png" alt="Profile"
          style={{
            position: 'fixed', width: '30.389%', left: 40, top: 40,
            height: 'calc(100vh - 80px)', borderRadius: 30, objectFit: 'cover',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
          }} />
      )}

      <div style={{
        marginLeft: isLg ? '33.333%' : 0,
        width: isLg ? '66.666%' : '100%',
        display: 'flex', justifyContent: 'center'
      }}>
        <div style={{ maxWidth: 550, padding: '0 24px', textAlign: !isLg ? 'center' : 'left' }}>
          {!isLg && (
            <img src="assets/img/mb.png" alt="Profile"
              style={{
                borderRadius: '50%', width: 180, height: 180, objectFit: 'cover',
                margin: '0 auto 25px', display: 'block', border: '4px solid var(--bg3)'
              }} />
          )}
          <h1 style={{
            fontSize: 'clamp(28px,5vw,51px)', fontWeight: 900,
            textTransform: 'uppercase', lineHeight: 1.2, color: 'var(--accent)',
            position: 'relative', paddingLeft: isLg ? 70 : 0, marginBottom: 20
          }}>
            {isLg && (
              <span style={{
                position: 'absolute', left: 0, top: 29,
                height: 4, width: 40, borderRadius: 10, background: 'var(--accent)'
              }} />
            )}
            I'm Rimsha Sajid.
            <span style={{ display: 'block', color: '#fff' }}>Full Stack Developer</span>
          </h1>
          <p style={{
            fontFamily: "'Open Sans',sans-serif", fontSize: 15,
            lineHeight: 1.85, color: '#aaa', marginBottom: 32
          }}>
            I'm a Karachi based Full Stack Developer focused on crafting
            clean &amp; user‑friendly experiences. I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
          <button onClick={() => onNav('about')} className="btn-primary" data-cursor-hover>
            <span style={{ position: 'relative', zIndex: 20, color: '#fff' }}>more about me</span>
            <span className="btn-icon"><i className="fa fa-arrow-right" /></span>
          </button>
        </div>
      </div>
    </div>
  )
}