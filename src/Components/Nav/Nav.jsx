import React from 'react';
import "./style.css"

import image_1 from "../../image/IMG_0250.jpg";

const Nav = () => {
  return (
    <div className="nav-container">
    <nav>
    <div className="portfolio-image-container">
      <a className="navy-link"aria-label="Home" href="/">
        <img
          className="portfolio_image"
          alt="portfolio_image"
          src={image_1}
        />
      </a>
    </div>
    <div className="nav-links">
      <a className="navy-link"aria-label="About" href="/about">
        <span>About</span>
      </a>
      <a className="navy-link"aria-label="Projects" href="/projects">
        <span>Projects</span>
      </a>
      <a className="navy-link"aria-label="Resume" href="/resume">
        <span >Resume</span>
      </a>
    </div>
  </nav>
  </div>
  )
}

export default Nav