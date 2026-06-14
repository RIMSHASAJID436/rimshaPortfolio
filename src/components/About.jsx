import { useState, useEffect } from 'react'
import SkillCircle from './SkillCircle'

const skills = [
  { name: 'Laravel', p: 75 }, { name: 'JavaScript', p: 89 },
  { name: 'ASP.NET Core', p: 79 }, { name: 'PHP', p: 68 },
  { name: 'MongoDB', p: 85 }, { name: 'C#', p: 65 },
  { name: 'Angular', p: 74 }, { name: 'React', p: 95 },
]
const stats = [
  { n: 30, label: 'Skills' },
  { n: 15, label: 'Completed Projects' },
  { n: 100, label: 'Learning Dedication' },
  { n: 4, label: 'Major Stack Expertise' },
]
const exp = [
  {
    period: '2026 - Present',
    title: 'MERN Stack Development',
    company: 'Self Learning',
    icon: 'fa-briefcase',
    p: 'Built multiple MERN stack projects to strengthen frontend and backend development skills. Learned REST APIs, authentication, database management, and state management using Redux Toolkit.'
  },
  {
    period: 'Jan 2025 - Present',
    title: 'Junior Full Stack Developer',
    company: 'Academic Projects',
    icon: 'fa-briefcase',
    p: 'Developed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Worked on personal projects while implementing modern development practices and deployment workflows.'
  }
]
const edu = [
  {
    period: '2024 - 2027',
    title: 'Diploma in Software Engineering',
    company: 'Aptech Pakistan',
    icon: 'fa-graduation-cap',
    p: 'Currently pursuing a Diploma in Software Engineering with a focus on Full Stack Web Development, Database Management, Software Design Principles, and modern development technologies.'
  },
  {
    period: '2020 - 2022',
    title: 'Bachelor of Arts in Political Science',
    company: 'University of Karachi',
    icon: 'fa-graduation-cap',
    p: 'Completed Bachelor of Arts in Political Science while developing analytical, research, communication, and problem-solving skills that support professional growth in the technology field.'
  },
]

function TItem({ period, title, company, icon, p }) {
  return (
    <li className="timeline-item">
      <div style={{
        position: 'absolute', left: 0, top: 0, zIndex: 10, width: 40, height: 40,
        background: 'var(--accent)', borderRadius: '50%', display: 'flex',
        alignItems: 'center', justifyContent: 'center', color: '#fff'
      }}>
        <i className={`fa ${icon}`} />
      </div>
      <span style={{
        display: 'inline-block', fontSize: 12, padding: '2px 10px',
        borderRadius: 20, background: 'var(--bg3)', color: '#fff', marginBottom: 10,
        fontFamily: "'Open Sans',sans-serif", textTransform: 'uppercase'
      }}>{period}</span>
      <h5 style={{ textTransform: 'uppercase', fontSize: 15, margin: '6px 0 8px', lineHeight: 1.4 }}>
        {title}
        <span style={{ opacity: 0.7, fontSize: 12, marginLeft: 6, fontFamily: "'Open Sans',sans-serif", display: 'block', textTransform: 'none', marginTop: 2 }}>— {company}</span>
      </h5>
      <p style={{ fontFamily: "'Open Sans',sans-serif", color: '#666', fontSize: 13, lineHeight: 1.6 }}>
        {p}
      </p>
    </li>
  )
}

export default function About({ visible }) {
  // Fix: use state + resize listener instead of window.innerWidth at render time
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)
  const [isTablet, setIsTablet] = useState(window.innerWidth < 900)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
      setIsTablet(window.innerWidth < 900)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div id="about" style={{ display: visible ? 'block' : 'none', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="section-header">
        <h2 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
          about <span style={{ color: 'var(--accent)' }}>me</span>
        </h2>
        <div className="section-bg-text">resume</div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* ── Personal Info + Stats ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>

          {/* Personal Info */}
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <h3 style={{ textTransform: 'uppercase', fontSize: 20, marginBottom: 24, fontWeight: 600 }}>personal infos</h3>
            <div style={{ display: 'flex', gap: 12, fontFamily: "'Open Sans',sans-serif", fontSize: 13,
              flexDirection: isMobile ? 'column' : 'row' }}>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[['First Name','Rimsha'],['Last Name','Sajid'],['Age','25 Years'],['Nationality','Pakistani']].map(([l,v]) => (
                  <div key={l} style={{ wordBreak: 'break-word' }}>
                    <span style={{ opacity: 0.6 }}>{l}: </span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[['Address','Sheldon Road, Karachi'],['Phone','+92 332 1028741'],['Email','rimshasajid612@mail.com'],['Languages','Urdu, English']].map(([l,v]) => (
                  <div key={l} style={{ wordBreak: 'break-word' }}>
                    <span style={{ opacity: 0.6 }}>{l}: </span>
                    <strong style={{ wordBreak: 'break-all' }}>{v}</strong>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/Rimsha_Sajid.pdf"
              download="Rimsha-Sajid-CV.pdf"
              className="btn-primary"
              style={{ marginTop: 28, display: 'inline-block' }}
              data-cursor-hover
            >
              <span style={{ position: 'relative', zIndex: 20, color: '#fff' }}>Download CV</span>
              <span className="btn-icon"><i className="fa fa-download" /></span>
            </a>
          </div>

          {/* Stats */}
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -8px' }}>
              {stats.map(s => (
                <div key={s.label} style={{ width: '50%', padding: '0 8px', minWidth: 0 }}>
                  <div style={{
                    border: '1px solid var(--border)', borderRadius: 5,
                    padding: '16px 12px 16px 20px', marginBottom: 16, background: 'var(--bg2)',
                    minWidth: 0, overflow: 'hidden'
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? 32 : 40, fontWeight: 900, color: 'var(--accent)',
                      lineHeight: 1.1, position: 'relative', display: 'inline-block'
                    }}>
                      {s.n}
                      <span style={{ position: 'absolute', right: -16, top: 2, fontSize: 20, fontWeight: 300 }}>+</span>
                    </h3>
                    <p style={{
                      textTransform: 'uppercase', fontSize: 10, fontFamily: "'Open Sans',sans-serif",
                      marginTop: 8, paddingLeft: 24, position: 'relative',
                      lineHeight: 1.4, wordBreak: 'break-word', color: '#aaa'
                    }}>
                      <span style={{ position: 'absolute', left: 0, top: 6, width: 18, height: 1, background: '#333' }} />
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Skills ── */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '55px auto', maxWidth: '40%' }} />
        <h3 style={{ textTransform: 'uppercase', fontSize: 20, marginBottom: 40, fontWeight: 600, textAlign: 'center' }}>my skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {skills.map(s => (
            <SkillCircle key={s.name} name={s.name} percent={s.p} />
          ))}
        </div>

        {/* ── Experience & Education ── */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '40px auto 55px', maxWidth: '40%' }} />
        <h3 style={{ textTransform: 'uppercase', fontSize: 20, marginBottom: 40, fontWeight: 600, textAlign: 'center' }}>
          experience &amp; education
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: isTablet ? 0 : 20 }}>
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <ul style={{ listStyle: 'none' }}>
              {exp.map(e => <TItem key={e.title} {...e} />)}
            </ul>
          </div>
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <ul style={{ listStyle: 'none' }}>
              {edu.map(e => <TItem key={e.title} {...e} />)}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}