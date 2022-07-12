import React from "react";
import { HashLink } from "react-router-hash-link";
import "./ShowcaseSection.css";

function ShowcaseSection() {
  return (
    <div className="showcase-container">
      <div className="showcase-inner">
        <img src="./images/Showcaseimageedited.webp" alt="Ryan Dewick" />
        <div className="showcase-info">
          <h1>
            Front-End
            <br />
            <span>Developer</span>
          </h1>
          <p>Thanks for checking out my portfolio.</p>
          <div className="showcase-buttons">
            <HashLink to="#projects" smooth>
              <button className="btn btn--primary">PROJECTS</button>
            </HashLink>
            <a href="CV.docx" download>
              <button className="btn btn--outline showcase-btn">
                Download My CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
