import React from 'react'
import resume from '../image/resume.pdf'
import slim_resume from '../image/slim_resume.png'

const Resume = () => {
  return (
    <div>


<h1 className='resume-title'>Please Feel free to Download Extended Resume Below</h1>
         <img className="slim-resume" src={slim_resume} alt="slim-resume" />
         <iframe 
         src={resume} width="100%" height="2000px" title = 'resume'>
        </iframe>
    </div>
  )
}

export default Resume