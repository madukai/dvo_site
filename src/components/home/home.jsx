import React from "react";
import ReactDOM from "react-dom/client";
import "./home.css";

const Home = () => {
  return (
    <div className="main-content">
      <header id="header">
        <a href="#" className="title">
          Welcome to Davaoeno
        </a>
      </header>
      <div id="wrapper">
        <section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">Davaoenos of California</h1>
            <h2>VISION</h2>
            <p>
              A prosperous and bountiful Davao Provinces that promotes an
              atmosphere of love and peace.
            </p>
            <h2>MISSION</h2>
            <p>
              To advocate a spirit of volunteerism and generosity through
              social, cultural and development programs and activities. To
              provide education and assistance to the community through special
              projects.
            </p>
            <h3>OBJECTIVES</h3>
            <span>The objectives of the association are:</span>
            <ul>
              <li>
                To promote unity and camaraderie among former residents of the
                Provinces of Davao, Philippines who are residing in California.
              </li>
              <li>
                To undertake projects that will benefit the association and of
                the residents of Davao Provinces, Philippines.
              </li>
            </ul>
            <h4>Social Media:</h4>
            <ul className="menu">
              <li>FB: <a href="https://www.facebook.com/davaoenosofcalifornia/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/davaoenosofcalifornia/</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div id="footer" className="wrapper alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Untitled. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
