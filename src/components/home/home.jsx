import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./home.css";

const Home = () => {
  const handleEmailClick = () => {
    const email = "hello@davaoenos.org";

    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="page-wrapper">
      <header id="header" className="headernav">
        <div className="logo">
          <img
            style={{ height: "70px", width: "280px" }}
            src={require("../../images/dvologo.jpg")}
            alt="Davaoeños community"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="button" className="home-button" onClick={handleEmailClick}>
            Contact US
          </button>
        </div>
      </header>
      <section id="banner">
        <img
          id="hero-image"
          src={require("../../images/Hero_one.jpg")}
          alt="Hero Image"
        />
        <div className="banner-overlay">
          <h1>
            Celebrating Davao Heritage. <br /> Empowering the Next Generation.
          </h1>
        </div>
      </section>
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <p>
            <br />
            A global Filipino‑American nonprofit uniting Davaoeños in
            California, honoring our roots in the Philippines, and uplifting the
            next generation—wherever in the world they call home. <br /> <br />
            Whether you live in Davao, recently moved to California, grew up
            Filipino‑American, or simply believe in the beauty of Filipino
            culture, you belong to this community. Together, we carry forward
            the resilience, generosity, and vibrant spirit of the Davao
            Provinces.
          </p>
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <button
              type="button"
              className="home-button"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdVnJlTapW5AdQvFaOyf8jdxu-0iiSUBolPDWt4EkAnPe1_dA/viewform?pli=1",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Join Us
            </button>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper alt style2">
        <div className="inner split-row">
          <div className="split-image">
            <img
              src={require("../../images/WhoWeAre.jpg")}
              alt="Davaoeños community"
            />
          </div>
          <div className="split-text">
            <header className="major-alt">
              <h2>Who We Are</h2>
            </header>
            <p>
              Davaoeños of California is a welcoming, multi‑generational
              community that brings together Davaoeños from every part of our
              shared story—those still in the Philippines, those beginning new
              chapters in California, and those raised Filipino‑American who
              proudly carry their heritage into the future.
            </p>
            <p>
              We honor the wisdom of our elders, celebrate the courage of
              migrants, and uplift the identity of Filipino‑American youth who
              continue our legacy with pride and purpose.
            </p>
            <div style={{ marginTop: "2em" }}>
              <h3>Values</h3>
              <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
                Community • Heritage • Education • Service • Filipino‑American
                Pride • Global Davaoeño Unity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper style3 special">
        <div className="inner">
          <header>
            <h2>Our Impact</h2>
          </header>
          <p>
            Your support strengthens a global Davaoeño community—one that
            preserves culture in the Philippines, builds belonging for newcomers
            in California, and empowers Filipino‑American youth to embrace their
            identity with confidence.
          </p>
          <div style={{ marginTop: "2em" }}>
            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "#000000",
                width: "50%",
                margin: "0 auto",
              }}
            ></hr>
            <ul
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                listStyleType: "none",
                paddingLeft: "1em",
                marginTop: "1em",
              }}
            >
              <li>
                12+ scholarships awarded annually to High School graduates
              </li>
              <li>150+ attendees at cultural celebrations</li>
              <li>200+ families engaged through community outreach</li>
              <li>26+ years connecting Davao and California communities</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="five" className="wrapper alt style2">
        <div className="inner split-row">
          <div className="split-text">
            <header>
              <h2>Our Story</h2>
            </header>
            <p>Our story stretches across oceans and generations.</p>
            <p>
              It begins in the Davao Provinces—where our traditions, values, and
              sense of community were born. It continues with families who
              journeyed to California, carrying their culture with them. And it
              lives on in Filipino‑Americans who honor their heritage while
              shaping a new future in the United States.
            </p>
            <div
              style={{
                marginTop: "2em",
                marginBottom: "2em",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              <h3>Davaoeños of California exists to keep us connected</h3>
              <ul
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  listStyleType: "none",
                  paddingLeft: "1em",
                }}
              >
                <li>To home.</li>
                <li>To each other.</li>
                <li>To the generations who will follow.</li>
              </ul>
            </div>
          </div>
          <div className="split-image">
            <img
              src={require("../../images/OurStory.jpg")}
              alt="Davaoeños community"
            />
          </div>
        </div>
      </section>

      <section id="six" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2>Why We Need Your Support</h2>
          </header>
          <p>
            Our community spans continents, generations, and life journeys. Your
            support ensures:
          </p>
          <ul
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              listStyleType: "none",
              paddingLeft: "1em",
            }}
          >
            <li>Filipino‑American youth stay connected to their heritage</li>
            <li>New immigrants from Davao find community and belonging</li>
            <li>
              Families in the Philippines feel the support of their global
              kababayans
            </li>
            <li>Cultural traditions remain alive, celebrated, and passed on</li>
          </ul>
          <p style={{ marginTop: "1.5em" }}>
            Your generosity strengthens the bridge between Davao and
            California—and keeps our shared legacy thriving.
          </p>
        </div>
      </section>

      <section id="seven" className="wrapper alt style2">
        <div className="inner">
          <header>
            <h2>Get Involved</h2>
          </header>
          <p>
            Whether you volunteer, become a member, or sponsor an event, your
            involvement strengthens our shared legacy and keeps our culture
            alive for future generations.
          </p>
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <button
              type="button"
              className="home-button"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdVnJlTapW5AdQvFaOyf8jdxu-0iiSUBolPDWt4EkAnPe1_dA/viewform?pli=1",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Join Us
            </button>
          </div>
        </div>
      </section>

      <section id="eight" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2>News & Updates</h2>
          </header>
          <p>
            Stay connected with our global Davaoeño community through event
            announcements, scholarship updates, and cultural highlights.
          </p>
          <div className="container-events-image">
              <img className="centered-events-image"
              src={require("../../images/davaoKadayawan.jpg")}
              alt="Davaoeños community"
              />
          </div>
        </div>
      </section>

      <section id="nine" className="wrapper alt style3">
        <div className="inner">
          <header>
            <h2>Email Sign-Up</h2>
          </header>
          <p>
            Stay connected with Davao culture, Filipino‑American stories, and
            community events. Join our mailing list for updates that inspire,
            uplift, and unite.
          </p>
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://facebook.us8.list-manage.com/subscribe?u=9de8117e4a585a796d333bd9a&id=16add14819",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="home-button"
            >
              Subscribe to Our Newsletter
            </button>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div style={{ textAlign: "center", marginBottom: "2em" }}>
          <img
            style={{ height: "70px", width: "280px" }}
            src={require("../../images/dvologo.jpg")}
            alt="Davaoeños community"
          />
          <p style={{ fontWeight: "600" }}>501(c)(3) nonprofit organization</p>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "18px",
              fontWeight: "600",
              color: "#000000",
            }}
          >
            <a
              href="mailto:hello@davaoenos.org"
              style={{ color: "#000000", borderBottom: "none" }}
            >
              &#128231; hello@davaoenos.org
            </a>
          </p>
        </div>
        <a
          className="fb-inline-link"
          href="https://www.facebook.com/davaoenosofcalifornia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            alt="Facebook"
            className="fb-inline-img"
          />
        </a>
        <ul className="copyright">
          <li>&copy; 2026 Davaoeños of California</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
