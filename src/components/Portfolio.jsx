const posts = [
  {
    img: 'assets/img/blog/work-1.png',
    title: 'Printify - Digital Printing Store',
    link: 'http://www.printify.somee.com/',
    desc: "Online digital printing store where customers can place orders from home. Built with ASP.NET Core & SQL Server, featuring product management, order processing, and secure user authentication."
  },
  {
    img: 'assets/img/blog/work-3.png',
    title: 'Media Finder - Images, GIFs & Videos in One Click',
    link: 'https://media-search-app-tau.vercel.app/',
    desc: 'A React & Redux powered media search app that fetches real-time images, GIFs, and videos using Unsplash, Tenor, and Pixel APIs — all in one place with a clean and fast search experience.'
  },
  {
    img: 'assets/img/blog/work-4.png',
    title: 'Sparklegem - The Glam Lounge',
    link: 'https://github.com/RIMSHASAJID436/cosmetics-jewellery',
    desc: 'A full-featured eCommerce website for cosmetics and jewellery built with Laravel & MySQL. Users can browse products, add to cart, and place orders — designed with a stylish, glamorous UI.'
  },
  {
    img: 'assets/img/blog/work-2.png',
    title: 'QuickNotes - Never Let a Thought Slip Away',
    link: 'https://notes-app-theta-sepia.vercel.app/',
    desc: "A React-based personal notes app that helps users capture daily tasks and thoughts they can't afford to forget. Simple, fast, and always accessible — your life's little reminders, saved in one place."
  },
  {
    img: 'assets/img/blog/work-5.png',
    title: 'ASP.NET API Project - Create Custom API',
    link: 'https://github.com/RIMSHASAJID436/dotnetapiproject',
    desc: 'A custom RESTful API built with ASP.NET Core supporting full CRUD operations — GET, POST, PUT, and DELETE. Integrated with Swagger UI for interactive API documentation and easy endpoint testing.'
  },
]

export default function Portfolio({ visible }) {
  return (
    <div id="portfolio" style={{ display: visible ? 'block' : 'none', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="section-header">
        <h2 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
          my <span style={{ color: 'var(--accent)' }}>projects</span>
        </h2>
        <div className="section-bg-text">Works</div>
      </div>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -12px' }}>
          {posts.map((post, i) => (
            <div key={i} style={{ width: '33.333%', minWidth: 260, padding: '0 12px', marginBottom: 26 }}>
              <div style={{ height: '100%', background: 'var(--bg3)', borderRadius: 5, overflow: 'hidden' }}>
                <div className="post-thumb" data-cursor-hover>
                  <a href={post.link} target="_blank" rel="noreferrer">
                    <img src={post.img} alt={post.title} />
                  </a>
                </div>
                <div style={{ padding: '18px 22px 22px' }}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    style={{
                      fontSize: 17, fontWeight: 600, color: '#fff', textDecoration: 'none',
                      lineHeight: 1.4, display: 'block', marginBottom: 10, transition: 'color 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                  >
                    {post.title}
                    <span style={{ marginLeft: 6, fontSize: 11, opacity: 0.5 }}>
                      <i className="fa fa-external-link" />
                    </span>
                  </a>
                  <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#666', lineHeight: 1.7 }}>
                    {post.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}