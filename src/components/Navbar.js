import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Button.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="./" className="navbar-logo">
            {/* <h1>RyanDewick</h1> */}
          </Link>
          <Link to="/blog">
            <button className="btn btn--outline blog-btn">My Blog</button>
          </Link>
          <Link
            to="#"
            onClick={() => (window.location = "mailto:ryan.dewick@outlook.com")}
          >
            <button className="btn btn--primary">
              <i className="fa-solid fa-envelope" /> Contact Me
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
