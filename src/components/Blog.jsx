const posts = [
  { img: 'assets/img/blog/blog-post-1.jpg', title: 'How to Own Your Audience by Creating an Email List' },
  { img: 'assets/img/blog/blog-post-2.jpg', title: 'Top 10 Toolkits for Deep Learning in 2020' },
  { img: 'assets/img/blog/blog-post-3.jpg', title: 'Everything You Need to Know About Web Accessibility' },
  { img: 'assets/img/blog/blog-post-4.jpg', title: 'How to Inject Humor & Comedy Into Your Brand' },
  { img: 'assets/img/blog/blog-post-5.jpg', title: 'Women in Web Design: How To Achieve Success' },
  { img: 'assets/img/blog/blog-post-6.jpg', title: 'Evergreen versus topical content: An overview' },
]
export default function Blog({ visible }) {
  return (
    <div id="blog" style={{ display: visible ? 'block' : 'none', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="section-header">
        <h2 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
          my <span style={{ color: 'var(--accent)' }}>blog</span>
        </h2>
        <div className="section-bg-text">posts</div>
      </div>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -12px' }}>
          {posts.map((post, i) => (
            <div key={i} style={{ width: '33.333%', minWidth: 260, padding: '0 12px', marginBottom: 26 }}>
              <div style={{ height: '100%', background: 'var(--bg3)', borderRadius: 5, overflow: 'hidden' }}>
                <div className="post-thumb" data-cursor-hover>
                  <a href="#" onClick={e=>e.preventDefault()}><img src={post.img} alt={post.title} /></a>
                </div>
                <div style={{ padding: '18px 22px 22px' }}>
                  <a href="#" onClick={e=>e.preventDefault()} data-cursor-hover
                    style={{ fontSize: 17, fontWeight: 600, color: '#fff', textDecoration: 'none',
                      lineHeight: 1.4, display: 'block', marginBottom: 10, transition: 'color 0.3s' }}
                    onMouseEnter={e=>e.target.style.color='var(--accent)'}
                    onMouseLeave={e=>e.target.style.color='#fff'}>
                    {post.title}
                  </a>
                  <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 13, color: '#555', lineHeight: 1.7 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
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
