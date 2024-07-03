import React from 'react'

const Details = () => {
  return (
    <div className='
    text-white
      border-[2px] rounded-[20px]
      p-[20px]  md:p-[40px] lg:pt-[10px] lg:pb-[55px]
      bg-gradient-to-r from-[#a17fe0] to-[#5D26C1]
      h-full
    '>
      <div>
        <h1 className='
        text-[#111] font-bold text-[2.5rem] sm:text-[3.5rem]
          flex justify-center
        '>
          My Details
        </h1>
        <br />
        <div className='text-[1rem] sm:text-[1.1rem]'>
          <p>Get in touch with me:</p>
          <p>These are my personal details you can use in order to get in touch with me.</p>
          <br />
          <p>Drop me a mail for commission or collaborative work.</p>
          <br />
        </div>
      </div>

      <div className='flex flex-col gap-[20px]'>
        <div className='flex justify-between items-center'>
          <div className='text-[#333] font-bold text-[1.2rem] sm:text-[1.3rem]'>
            Location:
          </div>
          <div className='text-[1rem] sm:text-[1.1rem] text-[#f1f1af]'>
            Delhi, India
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='text-[#333] font-bold text-[1.2rem] sm:text-[1.3rem]'>
            Email:
          </div>
          <div className='text-[1rem] sm:text-[1.1rem] text-[#f1f1af]'>
            ankushtyagi098@gmail.com
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='text-[#333] font-bold text-[1.2rem] sm:text-[1.3rem]'>
            Education:
          </div>
          <div className='text-[1rem] sm:text-[1.1rem] text-[#f1f1af]'>
            DTU
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='text-[#333] font-bold text-[1.2rem] sm:text-[1.3rem]'>
            Mobile:
          </div>
          <div className='text-[1rem] sm:text-[1.1rem] text-[#f1f1af]'>
            +91 9711401409
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='text-[#333] font-bold text-[1.2rem] sm:text-[1.3rem]'>
            Languages:
          </div>
          <div className='text-[1rem] sm:text-[1.1rem] text-[#f1f1af]'>
            English, Hindi
          </div>
        </div>
        
      </div>

        
    </div>
  )
}

export default Details