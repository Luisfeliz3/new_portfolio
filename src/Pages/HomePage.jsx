import React from 'react';
import WorkCard from '../Components/WorkCard';
import Details from '../Components/Details';
import HomeCardGroup from '../Components/HomeCardGroup';


const HomePage = () => {
  return (
    <div className="container">
    
        <Details/>
        <HomeCardGroup/>

      {/* <div className="absolute flex gap-5 overflow-hidden py-4 sm:gap-8 top-[346px] right-[180px]">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            
            <img alt="code_1" src={image_2} className="max-w-[200%] max-h-[100%]"/>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <img  className="max-w-[200%] max-h-[100%]" alt="code_1" src={image_2}/>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <img alt="code_1" src={image_3} className="max-w-[250%] max-h-[100%]"/>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <img alt="code_1" src={image_3} className="max-w-[250%] max-h-[100%]"/>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <img alt="code_1" src={image_4}className="max-w-[200%] max-h-[100%]"/>
          </div>
        </div>   */}
  
    <WorkCard/>
    </div>
  )
}

export default HomePage