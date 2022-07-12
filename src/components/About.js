import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-inner-container">
        <div>
          <h2>HI PEOPLE</h2>
          <p>
            My name is Ryan and I'm a Front-End Developer with an aim on
            building aesthetically pleasing websites without hindering the
            performance. I'm based in Sheffield but don't let that stop you
            getting in touch!
          </p>
          <div className="about-links">
            <a href="https://www.linkedin.com/in/ryan-dewick-233753193/">
              LINKEDIN
            </a>
            <a href="https://twitter.com/kryan_d">TWITTER</a>
            <a href="https://github.com/ryandewick">GITHUB</a>
          </div>
        </div>
      </div>

      <div className="pink-bar"></div>
    </div>
  );
}

export default About;
