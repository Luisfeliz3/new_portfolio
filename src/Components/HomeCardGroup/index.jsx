import React from 'react'


import image_2 from "../../image/codeImg1.jpg";
import image_3 from "../../image/codeImg2.png"
import image_4 from "../../image/codeImg3.jpeg";
import vacay_pic from "../../image/el_moro.jpeg"
import music_pic from "../../image/music.jpg"

const HomeCardGroup = () => {
  return (
    <div className="absolute flex gap-5 overflow-hidden py-4 sm:gap-8 top-[346px] right-[180px]">
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      
      <img alt="code_1" src={image_2} className="max-w-[200%] max-h-[100%]"/>
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
    <img  className="max-w-[200%] max-h-[100%]" alt="code_1" src={music_pic}/>
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
    <img alt="code_1" src={image_3} className="image-3 max-w-[250%] max-h-[100%]"/>
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
    <img alt="code_1" src={vacay_pic} className="max-w-[250%] max-h-[100%]"/>
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
    <img alt="code_1" src={image_4}className="max-w-[200%] max-h-[100%]"/>
    </div>
  </div>  
  )
}

export default HomeCardGroup