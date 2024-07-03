import React from 'react'
import Experience from '../Components/Experience/Experience';
import Education from '../Components/Education/Education';

const EduExp = () => {
  return (
    <div className='bg-gradient-to-b from-[#111] at-10 to-[#240b36] p-[7vw] text-white
    flex flex-col justify-center items-center
    gap-[50px]
    pt-[150px]
    
    '>
        <h1 className='text-[3.5rem]'>Education</h1>
        <div className='flex items-center justify-center gap-[50px] w-full border-white border-2px'>
            <div className='width-[300px] height-[300px] hidden xl:block'>
              <dotlottie-player src="https://lottie.host/1285be79-b359-4fff-8853-c6bb212cdd74/SJhxuy0AiB.json" 
              background="transparent" speed="1" style={{"height":"260px", "width": "260px"}}  loop autoplay>
              </dotlottie-player>
            </div>
            <Education/>
            <div className='width-[300px] height-[300px] hidden xl:block'>
                <dotlottie-player src="https://lottie.host/9ccfcd22-96e4-4a55-be61-eeda8a6bfa9d/wngB8naJux.json" 
                background="transparent" speed="1" style={{"height":"250px", "width": "250px"}} loop autoplay>
                </dotlottie-player>
            </div>
        </div>

        <h1 className='text-[3.5rem]'>Experience</h1>
        <div className='flex items-center justify-center gap-[50px] w-full border-white border-2px'>
          <Experience />
        </div>

    </div>
  )
}

export default EduExp;
