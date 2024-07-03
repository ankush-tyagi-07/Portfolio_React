import React from 'react';
import samsung from '../../assets/samsung.png';

const Experience = () => {
  return (
    <div className='
    bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 
    border-[2px] border-white rounded-[30px] 
    md:h-[400px] w-[320px] sm:w-[800px] lg:w-[1300px]
    flex 
    flex-col md:flex-row
    h-auto
    items-center justify-center
    gap-[-10px] md:gap-[80px] lg:gap-[150px]
    px-[20px]
    '>
        <div className='h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px]'>
            <img src={samsung} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[2.5rem] sm:text-[3.2rem] md:text-[2.5rem] lg:text-[3.2rem]'>MAGPIE</h1>
            <h1 className='text-[2.5rem] sm:text-[3.2rem] md:text-[2.5rem] lg:text-[3.2rem]'>INTERN'24</h1>
            <p className='text-[1.8rem] sm:text-[2.5rem] md:text-[1.8rem] lg:text-[2.5rem]'>Company: <span className='text-[#111]'>Samsung</span></p>
            <p className='text-[1.8rem] sm:text-[2.5rem] md:text-[1.8rem] lg:text-[2.5rem]'>Duration: <span className='text-[#111]'>2 Months (Jun 2024 - Jul 2024)</span></p>
        </div>
        
    </div>
  )
}

export default Experience;