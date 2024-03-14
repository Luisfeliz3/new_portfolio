import React from 'react';
import { FaGithub,FaLinkedin } from "react-icons/fa";


const Details = () => {
  return (
    <div className="detail">
    <h1 className='details-title'>Engineer, music, and Fullstack enthusiast in New York.</h1>
    <p className='details-paragraph'>
    I'm Luis, holding a Bachelor's in Computer and Technology. 
    My expertise lies in frontend engineering, where I'm dedicated 
    to empowering communities and expressing creativity through 
    music and software development.
    </p>
    <div className="sm-icons">
    <a className="gh-icon" href='https://github.com/Luisfeliz3' ><FaGithub /></a>
    <a className="li-icon" href="https://www.linkedin.com/in/luis-feliz-465b14192/"><FaLinkedin /></a>
    </div>
  </div>
  )
}

export default Details