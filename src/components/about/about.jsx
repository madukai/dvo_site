import React from 'react';
import './about.css';

const About = () => {
  const buttonStyle = {
    background: '#21b2a6',
    color: '#fff',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
  };

  return (
    <div id="about-page">
      {/* Hero Section */}
      <section id="about-one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>� Davaoeños of California</h2>
            <p>A global community rooted in Davao, thriving in California, and united across generations</p>
          </header>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about-two" className="wrapper alt style2">
        <div className="inner">
          <header className="major">
            <h2>💛 Who We Are</h2>
          </header>
          <p>Davaoeños of California is a Filipino‑American nonprofit organization dedicated to uplifting Davaoeños—wherever they live, whatever chapter of life they're in, and however they connect to our shared heritage.</p>
          
          <p style={{ marginTop: '1.5em', fontWeight: '600' }}>We bring together:</p>
          <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
            <li>✓ Filipinos currently living in the Davao Provinces</li>
            <li>✓ Filipinos who recently moved from Davao to California</li>
            <li>✓ Filipino‑Americans born or raised in the United States</li>
            <li>✓ Supporters of all backgrounds who celebrate Filipino culture</li>
          </ul>

          <p style={{ marginTop: '1.5em' }}>Our community spans oceans, generations, and life journeys. What unites us is simple and powerful: the pride of being Davaoeño and the desire to keep our culture alive.</p>
        </div>
      </section>

      {/* Our Mission */}
      <section id="about-three" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🌺 Our Mission</h2>
          </header>
          <p style={{ fontSize: '1.2em', fontWeight: '600', lineHeight: '1.8' }}>To preserve Davao culture, empower Filipino and Filipino‑American youth, support new immigrants, and strengthen the global Davaoeño community through education, cultural celebration, and service.</p>
          <p style={{ marginTop: '1.5em', fontStyle: 'italic' }}>We honor our past, uplift our present, and invest in our future.</p>
        </div>
      </section>

      {/* Our Vision */}
      <section id="about-four" className="wrapper alt style3">
        <div className="inner">
          <header className="major">
            <h2>🌱 Our Vision</h2>
          </header>
          <p style={{ fontSize: '1.15em', lineHeight: '1.8' }}>A world where every Davaoeño—whether in the Philippines, California, or anywhere in the diaspora—feels connected, supported, and proud of their heritage.</p>
        </div>
      </section>

      {/* Our Purpose */}
      <section id="about-five" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🎓 Our Purpose</h2>
          </header>
          <p>We exist to:</p>
          <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em', marginTop: '1em' }}>
            <li>✓ Support Filipino and Filipino‑American youth through scholarships and leadership development</li>
            <li>✓ Celebrate Davao traditions through cultural events like Kadayawan and the Parol Festival</li>
            <li>✓ Welcome and guide new immigrants as they build new lives in California</li>
            <li>✓ Stay connected to families in the Philippines through outreach and community support</li>
            <li>✓ Build a global network of Davaoeños who uplift one another</li>
          </ul>
          <p style={{ marginTop: '1.5em', fontStyle: 'italic' }}>Our work is rooted in gratitude, service, and the belief that culture is a bridge—not a boundary.</p>
        </div>
      </section>

      {/* Our Story */}
      <section id="about-six" className="wrapper alt style2">
        <div className="inner">
          <header className="major">
            <h2>🌏 Our Story</h2>
          </header>
          <p>Our story begins in the Davao Provinces—where our values, traditions, and sense of community were born. It continues with families who migrated to California, carrying their culture in their hearts. And it lives on in Filipino‑Americans who honor their roots while shaping a new future in the United States.</p>
          <p style={{ marginTop: '1.5em' }}>Davaoeños of California was founded to keep these stories connected. To ensure that no matter where life takes us, Davao remains home.</p>
        </div>
      </section>

      {/* Our Values */}
      <section id="about-seven" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🤝 Our Values</h2>
          </header>
          <p style={{ fontSize: '1.1em', lineHeight: '2', textAlign: 'center' }}>
            <strong>Community • Heritage • Education • Service • Filipino‑American Pride • Global Davaoeño Unity</strong>
          </p>
          <p style={{ marginTop: '2em', textAlign: 'center', fontStyle: 'italic' }}>These values guide every program, every celebration, and every act of service.</p>
        </div>
      </section>

      {/* A Bridge Between Homelands */}
      <section id="about-eight" className="wrapper alt style3">
        <div className="inner">
          <header className="major">
            <h2>🌉 A Bridge Between Homelands</h2>
          </header>
          <p style={{ fontSize: '1.15em', lineHeight: '1.8' }}>We are more than an organization. We are a bridge—linking Davao and California, tradition and modern life, elders and youth, homeland and diaspora.</p>
          <p style={{ marginTop: '1.5em', fontStyle: 'italic' }}>Wherever you are in your journey, you have a place here.</p>
        </div>
      </section>

      {/* Join Us */}
      <section id="about-cta" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>✨ Join Us</h2>
          </header>
          <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>Be part of a community that celebrates who we are and who we're becoming.</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2em', flexWrap: 'wrap' }}>
            <button type="button" style={buttonStyle}>Become a Member</button>
            <button type="button" style={{...buttonStyle, background: 'transparent', color: '#21b2a6', border: '2px solid #21b2a6'}}>Support Our Mission</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
