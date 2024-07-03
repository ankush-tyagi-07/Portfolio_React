import React from 'react';
// import './KnowMore.css';
import {Link} from "react-router-dom";
import MoveAhead from '../MoveAhead/MoveAhead';
import resumeImage from '../../assets/resume_image.png'
import tiltedArrow from '../../assets/tiltedArrow.png'

const handleClick = () => {
  window.scroll(0, 0);
};

const KnowMore = () => {
  return (
    <>
    <div className=' 
    mx-[20px] sm:mx-[65px]
    my-[-10px] sm:my-[65px] 
    text-[#E7E0E0] 
    flex flex-col gap-[30px]'>
        <div className="
        bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 
        col-span-1 
        leading-[1.8rem] sm:leading-[2.5rem] lg:leading-[3rem] 
        text-[1rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2.2rem] 
        p-[30px] sm:p-[60px] 
        border border-white rounded-[30px] 
        sm:text-justify">
           I am <span className='text-[#111]'>Ankush Tyagi</span>, a <span className='text-[#111]'>Computer Engineering student at 
           Delhi Technological University</span>, deeply involved in exploring algorithms and problem-solving. Recently, I completed an 
           internship at <span className='text-[#111]'>Samsung R&D Bangalore</span>, where I tackled real-world challenges firsthand. 
           Now, I'm eager to apply my skills and collaborate on exciting projects. <span className='text-[#a2ab58]'>Let's connect and 
          innovate together!</span>
        </div>
        <div className="bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 
        p-[30px] 
        border border-white rounded-[30px]">
            <div className='grid xl:grid-cols-2 
            gap-[15px] sm:gap-[50px] xl:gap-[30px]'>
              <div className='p:[20px] lg:p-[40px]'> 
                <div className='flex justify-center w-full'>
                  <img src={resumeImage} alt="Resume-Image" className='pl-[50px] pr-[20px]' />
                </div>
                <br/>
                <div className='w-full flex justify-center'>
                  <Link to="https://drive.google.com/file/d/1zqywf4DqgMTt1KqD_J15_SCTdzmIgFIX/view?usp=sharing" target="_blank">
                    <button className="
                    hover:bg-[#bbe6ff]
                    bg-[#d6f2ff]
                    flex justify-center 
                    text-[#222] font-bold
                    py-2 px-4 border-[2px]
                    border-[#222] 
                    rounded-[10px] 
                    ">
                      <span>Access My Resume</span>
                      &nbsp;
                      <img src={resumeImage} alt='resume-image' className='h-[25px]'/>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='
              p-[30px] sm:p-[60px] 
              flex flex-col justify-center 
              gap-[15px] sm:gap-[30px] md:gap-[50px] lg:gap-[70px] xl:gap[90px]'>
                <div>
                  <Link to='/eduexp' onClick={handleClick}>
                    <button className=" 
                    flex justify-center 
                    text-white font-bold  
                    py-2 px-4 border 
                    border-white-1000 
                    rounded-[10px] 
                    w-full
                    ">
                      <span>My Experience</span>
                      &nbsp;
                      <img src={tiltedArrow} alt="tilted-Arrow" className='h-[25px]' />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to='/achievementproject' onClick={handleClick}>
                    <button className=" 
                    flex justify-center 
                    text-white font-bold  
                    py-2 px-4 border 
                    border-white-1000 
                    rounded-[10px] 
                    w-full
                    ">
                      <span>My Projects</span>
                      &nbsp;
                      <img src={tiltedArrow} alt="tilted-Arrow" className='h-[25px]' />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to='/contact' onClick={handleClick}>
                    <button className=" 
                    flex justify-center 
                    text-white font-bold  
                    py-2 px-4 border 
                    border-white-1000 
                    rounded-[10px] 
                    w-full
                    ">
                      <span>Contact Me</span>
                      &nbsp;
                      <img src={tiltedArrow} alt="tilted-Arrow" className='h-[25px]' />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default KnowMore