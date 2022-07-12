import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>
          You can get in touch with me at:
          <br />
          Email: ryan.dewick@outlook.com
        </p>

        <div>
          <a
            href="https://www.linkedin.com/in/ryan-dewick-233753193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://twitter.com/kryan_d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="https://github.com/ryandewick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
