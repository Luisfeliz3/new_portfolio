import React from 'react';
import WorkCard from '../Components/WorkCard';
import Details from '../Components/Details';
import HomeCardGroup from '../Components/HomeCardGroup';


const HomePage = () => {
  return (
    <div className="container">
        <Details/>
        <HomeCardGroup/>  
        <WorkCard/>
    </div>
  )
}

export default HomePage