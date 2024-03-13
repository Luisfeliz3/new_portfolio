import React from 'react'
import './style.css'

import image_2 from "../../image/codeImg1.jpg";
import image_3 from "../../image/codeImg2.png"
import image_4 from "../../image/codeImg3.jpeg";
import vacay_pic from "../../image/el_moro.jpeg"
import music_pic from "../../image/music.jpg"

const HomeCardGroup = () => {
  return (
    <div className='home-card-group' >
    <div className='home-card-1'>
      <img alt="code_1" src={image_2} className="image max-w-[200%] max-h-[100%]"/>
    </div>


    <div className='home-card-2'>
    <img  className= "image max-w-[200%] max-h-[100%]" alt="code_1" src={music_pic}/>
    </div>

    <div className='home-card-3'>
    <img alt="code_1" src={image_3} className="image max-w-[250%] max-h-[100%]"/>
    </div>

    <div className='home-card-4'>
    <img alt="code_1" src={vacay_pic} className="image max-w-[250%] max-h-[100%]"/>
    </div>

    <div className='home-card-5'>
    <img alt="code_1" src={image_4}className="image max-w-[200%] max-h-[100%]"/>
    </div>

  </div>  
  )
}

export default HomeCardGroup