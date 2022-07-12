import React from "react";
import "./ComingSoon.css";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="coming-soon">
      <h3>In Development...</h3>
      <Link to="/">
        <button className="btn btn--primary">Return to home</button>
      </Link>
    </div>
  );
}

export default ComingSoon;
