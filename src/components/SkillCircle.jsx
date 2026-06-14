export default function SkillCircle({ name, percent }) {
  const size = 100
  const stroke = 12
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div style={{ width: '25%', minWidth: 110, marginBottom: 40, textAlign: 'center' }}>
      <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
        {/* Background circle */}
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Track */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth={stroke}
          />
          {/* Progress */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke="#ffb400"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
        </svg>
        {/* Inner dark circle + text */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 76, height: 76, borderRadius: '50%',
            background: '#0d0d0d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{percent}%</span>
          </div>
        </div>
      </div>
      <h6 style={{
        fontFamily: "'Open Sans', sans-serif",
        textTransform: 'uppercase',
        marginTop: 16, fontSize: 12, color: '#fff',
      }}>{name}</h6>
    </div>
  )
}