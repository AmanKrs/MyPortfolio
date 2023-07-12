import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

export default function Navigation({ Children }) {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-ul">
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/project">
            <li>Project</li>
          </Link>
          <Link to="/resume">
            <li>Resume</li>
          </Link>
        </ul>
      </nav>
      <Children />
    </div>
  );
}
