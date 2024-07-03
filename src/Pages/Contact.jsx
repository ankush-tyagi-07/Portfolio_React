import React from 'react'
import Details from '../Components/Details/Details'
import ContactMeForm from '../Components/ContactMeForm/ContactMeForm'

const Contact = () => {
  return (
    <div className='
      flex gap-[40px]
      flex-col lg:flex-row
      bg-gradient-to-b from-[#111] at-10 to-[#240b36]
      p-[20px] pt-[160px] sm:p-[30px] sm:pt-[250px] md:p-[50px] md:pt-[250px] lg:pt-[250px] xl:p-[120px] xl:pt-[250px] pb-[50px]
    '>  
        <div className='w-full'><Details/></div>
        <div className='w-full'><ContactMeForm/></div>
    </div>
  )
}

export default Contact