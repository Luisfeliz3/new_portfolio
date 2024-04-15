import React from 'react';
import resume_1 from '../image/resume_1_1.png';
import resume_2 from '../image/resume_1_2.png';
import resume_3 from '../image/resume_1_3.png';
import resume_4 from '../image/resume_1_4.png';
import slim_resume from '../image/slim_resume.png';
 

const Resume = () => {
  return (
    <div>


<h1 className='slim-download'><a className='resume-download-link' href="https://drive.google.com/uc?export=download&id=1wzrDy-D8anLih2ZwpZIQVxGV4DHo5Of1">DOWNLOAD RESUME</a></h1>


         <img className="resume one" src={resume_1} alt="slim-resume" />
         <img className="resume two" src={resume_2} alt="slim-resume" />
         <img className="resume three" src={resume_3} alt="slim-resume" />
         <img className="resume four" src={resume_4} alt="slim-resume" />
      

    </div>
  )
}

export default Resume