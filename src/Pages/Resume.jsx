import React from 'react'
import resume from '../image/resume.pdf'

const Resume = () => {
  return (
    <div>
         <iframe src={resume} width="100%" height="500px" title = 'resume'>
        </iframe>
    </div>
  )
}

export default Resume