import { useState } from 'react';

const inp = {
  width: '100%',
  background: 'var(--bg3)',
  color: '#fff',
  border: '1px solid var(--border)',
  borderRadius: 30,
  outline: 'none',
  padding: '11px 26px',
  marginBottom: 20,
  fontFamily: "'Open Sans',sans-serif",
  fontSize: 14
};

export default function Contact({ visible }) {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setStatus("pending");

    const formData = new FormData(event.target);
    // Aapki Web3Forms Access Key
    formData.append("access_key", "7ff90fb4-d3a4-4d29-a381-a1ea375adc1b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("✓ Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult("✗ " + data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("✗ Something went wrong. Try again.");
    }

    setTimeout(() => {
        setResult("");
        setStatus("");
    }, 4000);
  };

  return (
    <div id="contact" style={{ display: visible ? 'block' : 'none', minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="section-header">
        <h2 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 900, textTransform: 'uppercase', color: '#fff' }}>
          get in <span style={{ color: 'var(--accent)' }}>touch</span>
        </h2>
        <div className="section-bg-text">contact</div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
          
          {/* Left Side: Contact Info */}
          <div style={{ flex: '1 1 240px' }}>
            <h3 style={{ fontSize: 20, marginBottom: 14, fontWeight: 600, textTransform: 'uppercase' }}>don't be shy!</h3>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: 14, color: '#888', marginBottom: 22, lineHeight: 1.8 }}>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.
            </p>
            
            <div style={{ display: 'flex', gap: 14, marginBottom: 18, alignItems: 'flex-start' }}>
              <i className="fa fa-envelope-open" style={{ fontSize: 28, color: 'var(--accent)', marginTop: 4 }} />
              <div style={{ fontFamily: "'Open Sans',sans-serif" }}>
                <span style={{ display: 'block', opacity: 0.6, textTransform: 'uppercase', fontSize: 11, marginBottom: 2 }}>mail me</span>
                <strong style={{ fontSize: 14 }}>rimshasajid612@gmail.com</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, marginBottom: 24, alignItems: 'flex-start' }}>
              <i className="fa fa-phone-square" style={{ fontSize: 32, color: 'var(--accent)', marginTop: 4 }} />
              <div style={{ fontFamily: "'Open Sans',sans-serif" }}>
                <span style={{ display: 'block', opacity: 0.6, textTransform: 'uppercase', fontSize: 11, marginBottom: 2 }}>call me</span>
                <strong style={{ fontSize: 14 }}>+92 332 1028741</strong>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 8 }}>
              {["github", "facebook-f", "instagram", "linkedin-in"].map((icon, idx) => (
                <a key={idx} href="#" className="social-item" data-cursor-hover>
                  <i className={`fa-brands fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Web3Form */}
          <div style={{ flex: '2 1 360px' }}>
            <form onSubmit={onSubmit}>
              {/* Hidden Fields Web3Forms ke liye */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
              
              {/* Is line se aapki email ka subject custom set hoga */}
              <input type="hidden" name="subject" value="rimsha portfolio" />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 14px' }}>
                <div style={{ flex: '1 1 160px' }}>
                  <input name="name" className="field-form" style={inp} type="text" placeholder="YOUR NAME" required />
                </div>
                <div style={{ flex: '1 1 160px' }}>
                  <input name="email" className="field-form" style={inp} type="email" placeholder="YOUR EMAIL" required />
                </div>
                
                {/* User jo topic likhna chahta hai uske liye input field name "user_subject" kar diya hai taake main subject kharab na ho */}
                <div style={{ flex: '1 1 160px' }}>
                  <input name="user_subject" className="field-form" style={inp} type="text" placeholder="YOUR SUBJECT" />
                </div>
                
                <div style={{ width: '100%' }}>
                  <textarea name="message" className="field-form" 
                    style={{ ...inp, height: 160, borderRadius: 20, resize: 'none', marginBottom: 0 }}
                    placeholder="YOUR MESSAGE" required />
                </div>

                <div style={{ width: '100%', marginTop: 22 }}>
                  <button type="submit" className="btn-primary" data-cursor-hover disabled={status === "pending"}>
                    <span style={{ position: 'relative', zIndex: 20, color: '#fff' }}>
                        {status === "pending" ? "Sending..." : "send message"}
                    </span>
                    <span className="btn-icon"><i className="fa fa-send" /></span>
                  </button>
                </div>

                {/* Status Message */}
                {result && (
                  <div style={{ width: '100%', marginTop: 18 }}>
                    <span style={{
                      display: 'block', textAlign: 'center', borderRadius: 30, padding: '12px 0',
                      color: '#fff', 
                      background: status === 'success' ? '#2e7d32' : (status === 'error' ? '#c62828' : '#ffa000'), 
                      fontFamily: "'Open Sans',sans-serif", fontSize: 14
                    }}>
                      {result}
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}