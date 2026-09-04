import React from 'react';
import './membership.css';

const Membership = ({ onBack }) => {
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
    <div id="membership-page">
      {/* Hero Section */}
      <section id="mem-one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🌺 Davaoeños of California — Membership</h2>
            <p>Uniting Davaoeños in the Philippines, new immigrants in California, and Filipino‑Americans across generations</p>
          </header>
        </div>
      </section>

      {/* Why Become a Member */}
      <section id="mem-two" className="wrapper alt style2">
        <div className="inner">
          <header className="major">
            <h2>🌅 Why Become a Member?</h2>
          </header>
          <p>Wherever you are on your Davaoeño journey—living in the Philippines, newly settling into California, or proudly Filipino‑American—you belong here.</p>
          <p>Membership strengthens the bridge between our homelands and our diaspora. It helps us:</p>
          <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
            <li>✓ Support Filipino‑American and Filipino youth through scholarships</li>
            <li>✓ Welcome and guide new immigrants from Davao</li>
            <li>✓ Celebrate cultural traditions that keep our heritage alive</li>
            <li>✓ Stay connected to families and communities in the Davao Provinces</li>
            <li>✓ Build a global network of Davaoeños who uplift one another</li>
          </ul>
          <p style={{ marginTop: '1.5em', fontStyle: 'italic' }}>Your membership is more than a sign‑up. It's a commitment to culture, community, and the next generation.</p>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Become a Member Today</button>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section id="mem-three" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🌈 Who Can Join?</h2>
          </header>
          <p>Membership is open to anyone who feels connected to the Davao spirit:</p>
          <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
            <li>✓ Filipinos currently living in the Davao Provinces</li>
            <li>✓ Filipinos who recently moved from Davao to California</li>
            <li>✓ Filipino‑Americans born or raised in the U.S.</li>
            <li>✓ Immediate and extended family members living in the same household</li>
            <li>✓ Supporters of any background who believe in preserving Davao culture</li>
          </ul>
          <p style={{ marginTop: '1.5em', fontWeight: '600' }}>If Davao is part of your story—or your heart—you are welcome here.</p>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Check Your Eligibility</button>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section id="mem-four" className="wrapper alt style3">
        <div className="inner">
          <header className="major">
            <h2>👨‍👩‍👧 Membership Options</h2>
          </header>
          <p>We offer two membership types designed to embrace the diversity of our global community.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2em', marginTop: '2em' }}>
            <div style={{ padding: '1.5em', border: '1px solid #ddd', borderRadius: '6px' }}>
              <h3>Individual Membership</h3>
              <p>Perfect for individuals—whether in Davao, newly arrived in California, or Filipino‑American—who want to stay connected, participate in events, and support our mission.</p>
            </div>
            <div style={{ padding: '1.5em', border: '1px solid #ddd', borderRadius: '6px' }}>
              <h3>Family Membership</h3>
              <p>Covers two adults and up to three children under 18, all residing in the same household. Ideal for families who want to celebrate culture together and raise children with strong Filipino‑American identity and Davaoeño pride.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Choose Your Membership Type</button>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="mem-five" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🌱 Membership Benefits</h2>
          </header>
          <p>Membership gives you access to programs, events, and opportunities that strengthen cultural identity and community connection.</p>
          
          <div style={{ marginTop: '2em' }}>
            <h3>All Members Receive:</h3>
            <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
              <li>✓ Invitations to cultural celebrations like Kadayawan and the Parol Festival</li>
              <li>✓ Access to community support resources for new immigrants</li>
              <li>✓ Updates on scholarship opportunities and youth programs</li>
              <li>✓ Member‑only newsletters featuring stories from Davao and the diaspora</li>
              <li>✓ Voting rights in organizational decisions</li>
              <li>✓ Opportunities to volunteer, lead, and shape the future of our community</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '2em' }}>
            <h3>Family Members Also Receive:</h3>
            <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
              <li>✓ Youth‑focused cultural workshops</li>
              <li>✓ Family‑friendly event perks</li>
              <li>✓ Early access to scholarship announcements</li>
            </ul>
          </div>

          <p style={{ marginTop: '2em', fontStyle: 'italic' }}>Your membership helps keep our traditions alive—across oceans and generations.</p>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>See Full Member Benefits</button>
          </div>
        </div>
      </section>

      {/* What Your Membership Supports */}
      <section id="mem-six" className="wrapper alt style2">
        <div className="inner">
          <header className="major">
            <h2>🎉 What Your Membership Supports</h2>
          </header>
          <p>Your membership directly fuels programs that uplift Davaoeños everywhere:</p>
          <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
            <li>✓ Scholarships for Filipino‑American and Filipino students</li>
            <li>✓ Cultural celebrations that honor our heritage</li>
            <li>✓ Community outreach for families in Davao and California</li>
            <li>✓ Leadership development for the next generation</li>
            <li>✓ Support for new immigrants adjusting to life in California</li>
          </ul>
          <p style={{ marginTop: '1.5em', fontWeight: '600' }}>You help ensure that our culture thrives, our youth succeed, and our global community stays connected.</p>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Support Our Mission Through Membership</button>
          </div>
        </div>
      </section>

      {/* Member Involvement Opportunities */}
      <section id="mem-seven" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🤝 Member Involvement Opportunities</h2>
          </header>
          <p>Members can take part in shaping the future of Davaoeños of California through:</p>
          <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
            <li>✓ Volunteer roles at events</li>
            <li>✓ Committee and leadership opportunities</li>
            <li>✓ Cultural program planning</li>
            <li>✓ Scholarship mentorship</li>
            <li>✓ Community outreach initiatives</li>
          </ul>
          <p style={{ marginTop: '1.5em' }}>Whether you're in Davao, Daly City, or anywhere in between, there's a place for your voice and your talents.</p>
          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Get Involved as a Member</button>
          </div>
        </div>
      </section>

      {/* Community That Feels Like Home */}
      <section id="mem-eight" className="wrapper alt style3">
        <div className="inner">
          <header className="major">
            <h2>💛 A Community That Feels Like Home</h2>
          </header>
          <p>Our members come from different places and life journeys, but we share one heart: Davao.</p>
          <p style={{ marginTop: '1.5em', fontStyle: 'italic' }}>Membership is your way of staying connected—to home, to culture, and to a global family that celebrates who we are and who we're becoming.</p>
          <div style={{ textAlign: 'center', marginTop: '2em', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" style={buttonStyle}>Become a Member</button>
            <button type="button" style={{...buttonStyle, background: 'transparent', color: '#21b2a6', border: '2px solid #21b2a6'}}>Contact Us for More Information</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="mem-faq" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>🌺 Membership FAQ</h2>
            <p>Clear answers for Filipinos in Davao, new immigrants in California, and Filipino‑Americans</p>
          </header>
          
          <div style={{ marginTop: '2em' }}>
            <div style={{ marginBottom: '2em' }}>
              <h3>Who can become a member?</h3>
              <p>Anyone who feels connected to the Davao Provinces—whether you live in the Philippines, recently moved to California, or grew up Filipino‑American.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>Do I need to live in California to join?</h3>
              <p>No. Members from the Philippines and across the U.S. are welcome. We are a global Davaoeño community.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>What are the membership types?</h3>
              <ul style={{ paddingLeft: '1.5em' }}>
                <li><strong>Individual Membership</strong></li>
                <li><strong>Family Membership</strong> (two adults + up to three children under 18)</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>What are the benefits of membership?</h3>
              <p>Members receive access to cultural events, community support, youth programs, newsletters, voting rights, and leadership opportunities.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>How long does membership last?</h3>
              <p>Membership is valid for one year from the date of registration.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>How do I renew?</h3>
              <p>You can renew online through our Membership Renewal Page.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>Is my membership fee tax‑deductible?</h3>
              <p>Yes. Davaoeños of California is a 501(c)(3) nonprofit organization.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>Can I volunteer as a member?</h3>
              <p>Absolutely. Members are encouraged to volunteer at events, join committees, and support community outreach.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>Can families in the Philippines join?</h3>
              <p>Yes. Many of our members live in Davao and stay connected through cultural programs and community updates.</p>
            </div>

            <div style={{ marginBottom: '2em' }}>
              <h3>How does my membership support the mission?</h3>
              <p>Your membership helps fund scholarships, cultural celebrations, community outreach, and support for new immigrants.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Become a Member</button>
          </div>
        </div>
      </section>

      {/* Membership Renewal Section */}
      <section id="mem-renewal" className="wrapper alt style2">
        <div className="inner">
          <header className="major">
            <h2>🌅 Membership Renewal</h2>
            <p>Continue your journey with the global Davaoeño community</p>
          </header>

          <div style={{ marginTop: '2em' }}>
            <h3>💛 Thank You for Being Part of Our Community</h3>
            <p>Your membership keeps our culture alive—from the Philippines to California and beyond. Renewing ensures:</p>
            <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em', marginTop: '1em' }}>
              <li>✓ Filipino‑American youth stay connected to their heritage</li>
              <li>✓ New immigrants from Davao find support and belonging</li>
              <li>✓ Families in the Philippines feel the strength of their global kababayans</li>
              <li>✓ Cultural traditions continue to thrive</li>
            </ul>
          </div>

          <div style={{ marginTop: '2em' }}>
            <h3>🔄 Renew Your Membership</h3>
            <p>Choose your renewal option:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2em', marginTop: '1.5em' }}>
              <div style={{ padding: '1.5em', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h4>Individual Membership Renewal</h4>
                <p>Perfect for individuals in Davao, California, or anywhere in the diaspora.</p>
              </div>
              <div style={{ padding: '1.5em', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h4>Family Membership Renewal</h4>
                <p>For households raising the next generation of proud Filipino‑American and Davaoeño youth.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2em' }}>
            <h3>🎁 Renewal Benefits</h3>
            <ul style={{ fontSize: '1.05em', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '1em' }}>
              <li>✓ Continued access to cultural events</li>
              <li>✓ Member‑only newsletters</li>
              <li>✓ Voting rights</li>
              <li>✓ Leadership and volunteer opportunities</li>
              <li>✓ Early access to scholarship announcements</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <button type="button" style={buttonStyle}>Renew My Membership</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
