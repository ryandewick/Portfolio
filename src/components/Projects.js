import React from "react";
import "./Projects.css";

function Projects() {
  function personalLI(e) {
    e.preventDefault();
    document.querySelector(".personal").style.display = "block";
    document.querySelector(".work").style.display = "none";
  }

  function workLI(e) {
    e.preventDefault();
    document.querySelector(".personal").style.display = "none";
    document.querySelector(".work").style.display = "block";
  }

  return (
    <div className="project-container" id="projects">
      <div className="project-inner-container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <h3>
          THE
          <br />
          <span>PROJECTS</span>
        </h3>

        {/* Personal */}
        <div className="personal">
          <ul className="projects-ul">
            <li className="li-active" id="#personal-li" onClick={personalLI}>
              PERSONAL
            </li>
            <li id="#work-li" onClick={workLI}>
              WORK
            </li>
          </ul>
          <div>
            <img src="./images/EdgeLedger.webp" alt="EdgeLedger" />
            <div className="personal-info">
              <h4>EdgeLedger</h4>
              <p>
                This is a mock up of a potential financial assistance website.
              </p>
              <div className="tech-icons">
                <i className="fa-brands fa-html5" />
                <i className="fa-brands fa-css3-alt" />
              </div>
              <a
                href="https://cheery-palmier-da210f.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site &gt;
              </a>
            </div>
          </div>

          <div className="reverse">
            <img src="./images/Space.webp" alt="Space Travel Project" />
            <div className="personal-info">
              <h4>Space</h4>
              <p>
                This was a front-end development challenge to do with space
                travel.
              </p>
              <div className="tech-icons">
                <i class="fa-brands fa-html5" />
                <i class="fa-brands fa-css3-alt" />
                <i class="fa-brands fa-js" />
              </div>
              <a
                href="https://polite-gumption-f6b1a2.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site &gt;
              </a>
            </div>
          </div>

          <div>
            <img
              src="./images/Lydia.webp"
              alt="Social Media Marketing Manager Portfolio"
            />
            <div className="personal-info">
              <h4>Portfolio</h4>
              <p>
                This is a portfolio I developed for a social media manager while
                trying out bootstrap.
              </p>
              <div className="tech-icons">
                <i className="fa-brands fa-html5" />
                <i className="fa-brands fa-css3-alt" />
                <i className="fa-brands fa-js" />
                <i className="fa-brands fa-bootstrap" />
              </div>
              <a href="/blog">Coming Soon &gt;</a>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="work">
          <ul className="projects-ul">
            <li id="#personal-li" onClick={personalLI}>
              PERSONAL
            </li>
            <li className="li-active" id="#work-li" onClick={workLI}>
              WORK
            </li>
          </ul>
          <div>
            <img src="./images/TaylorTaylor.webp" alt="EdgeLedger" />
            <div className="personal-info">
              <h4>TaylorTaylor</h4>
              <p>
                This was my first ever project for a client! A barbers /
                hairdressers here in Sheffield. My plan is to convert this site
                into React at a later stage.
              </p>
              <div className="tech-icons">
                <i className="fa-brands fa-html5" />
                <i className="fa-brands fa-css3-alt" />
              </div>

              <a
                href="https://taylortaylorhair.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site &gt;
              </a>
            </div>
          </div>

          <div className="reverse">
            <img
              src="./images/Doodlebag.webp"
              alt="Doodlebag, an ecommerce site"
            />
            <div className="personal-info">
              <h4>Doodlebag</h4>
              <p>
                Doodlebag is an E-Commerce site that sells printed products,
                fully customisable!
              </p>
              <div className="tech-icons">
                <i className="fa-brands fa-html5" />
                <i className="fa-brands fa-css3-alt" />
                <i className="fa-brands fa-js" />
              </div>
              <a
                href="https://doodle-bag.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site &gt;
              </a>
            </div>
          </div>

          <div>
            <img
              src="./images/Keltex.webp"
              alt="Business to business e-commerce website"
            />
            <div className="personal-info">
              <h4>Keltex</h4>
              <p>
                Keltex is a business to business (wholesale) E-Commerce site
                that has individual prices for each customer.
              </p>
              <div className="tech-icons">
                <i className="fa-brands fa-html5" />
                <i className="fa-brands fa-css3-alt" />
                <i className="fa-brands fa-js" />
              </div>
              <a
                href="https://keltex.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
