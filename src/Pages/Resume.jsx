import React from 'react';
import resume from '../image/resume.pdf';
import slim_resume from '../image/slim_resume.png';
 

const Resume = () => {
  return (
    <div>



<h1 className='slim-download'><a className='resume-download-link' href="https://drive.google.com/uc?id=1ufQvJ29uoXruMvsc24--fecJ7qfOMdE8&export=download">DOWNLOAD RESUME BELOW</a></h1>
<h1 className='slim-download'><a className='resume-download-link' href="https://drive.google.com/uc?id=1YbAkLi3XfedXWGVJC0HTE3tCL2lXt-Bm&export=download">DOWNLOAD EXTENDED RESUME</a></h1>

         <img className="slim-resume" src={slim_resume} alt="slim-resume" />
         <h1 className="extended-resume">Click on download link for extended resume〰️〰️⤵️</h1>
         <iframe 
         src={resume} width="100%" height="2000px" title = 'resume'>
        </iframe>

    </div>
  )
}

export default Resume