import React from 'react';
import { ReactTyped } from "react-typed";
import MoveAhead from '../MoveAhead/MoveAhead';


// import './Introduction.css';


const Introduction = () => {
  return (
    <div>
        <div className="mx-0 w-full border-3 border-white relative ">
            <div className="background-text flex flex-col items-center justify-center py-[20px] sm:py-[40px] text-[#E7E0E0] text-[1.4rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
                <div className='text-[2rem] text-[#b91d73]'><i>Hola, Amigo</i></div>
                <div>I am Ankush Tyagi!!!</div>
                <div>
                    <ReactTyped 
                        className='text-[#f1f1af]'
                        strings={[
                            "A Budding Web Developer...",
                            "Passionate Problem Solver...",
                            "And a Tech Enthusiast...",
                        ]}
                        typeSpeed={70}
                        backSpeed={110}
                        loop
                    />
                </div>
            </div>
            <MoveAhead/>
        </div>
    </div>
  )
}

export default Introduction