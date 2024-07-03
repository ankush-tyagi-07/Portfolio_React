import React from 'react'
import Achievements from '../Components/Achievements/Achievements';
import Projects from '../Components/Projects/Projects';

const AchievementProject = () => {
  return (
    <div className='bg-gradient-to-b from-[#111] at-10 to-[#240b36] p-[7vw] text-white
    flex flex-col justify-center items-center
    gap-[50px]
    pt-[220px]
    '>
      <h1 className='text-[3.5rem]'>Projects</h1>
      <div className='flex items-center justify-center gap-[50px] w-full border-white border-2px my-10'>
        <Projects />
      </div>


      <h1 className='text-[3.2rem] mb-[80px] xl:mb-[0px]'>Achievements</h1>
      <div className='flex items-center justify-center gap-[10px] w-full border-white border-2px my-10'>
        <Achievements />
      </div>


    </div>
  )
}

export default AchievementProject;
