import React from 'react';
import Introduction from '../Components/Introduction/Introduction';
import KnowMore from '../Components/KnowMore/KnowMore';



const About = () => {
  return (
    <div className=' bg-gradient-to-b from-[#111] at-10 to-[#240b36] pt-[100px] pb-[7vw]'>
        <Introduction />
        <KnowMore />
    </div>
  )
}

export default About;