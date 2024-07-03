import React from 'react';
import samsung from '../../assets/samsung.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='flex flex-col gap-[20px] max-h-[450px] overflow-scroll'>
            <div className='
        bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 
        border-[2px] border-white rounded-[30px] 
        md:h-[400px] w-[330px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]
        flex 
        flex-col md:flex-row
        h-auto
        items-center justify-center
        gap-[10px] md:gap-[80px] lg:gap-[150px]
        p-[20px]
        '>
                <Link to='https://www.youtube.com/' target='_blank'>
                    <div className='h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px]'>
                        <img src={samsung} alt="" />
                    </div>
                </Link>
                <div className='flex flex-col items-center justify-center text-[1.3rem] lg:text-[1.5rem]'>
                    <p>Description:</p>
                    <p>
                        <b>Unveil India's treks!</b> This web app guides you through incredible hikes across India. Discover detailed descriptions, difficulty ratings, and captivating photos to plan your dream adventure.
                    </p>
                    <br />
                    <p>TECH STACK:</p>
                    <p>MongoDB, ExpressJs, NodeJs</p>
                </div>

            </div>

            <div className='
        bg-gradient-to-r from-[#a17fe0] to-[#5D26C1] 
        border-[2px] border-white rounded-[30px] 
        md:h-[400px] w-[330px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]
        flex 
        flex-col md:flex-row
        h-auto
        items-center justify-center
        gap-[10px] md:gap-[80px] lg:gap-[150px]
        p-[20px]
        '>
                <Link to='https://www.youtube.com/' target='_blank'>
                    <div className='h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px]'>
                        <img src={samsung} alt="" />
                    </div>
                </Link>
                <div className='flex flex-col items-center justify-center text-[1.3rem] lg:text-[1.5rem]'>
                    <p>Description:</p>
                    <p> This E-Commerce platform offers a smooth shopping experience for customers and management tools for businesses, all within a scalable and modern tech environment.</p>
                    <br />
                    <p>TECH STACK:</p>
                    <p>MongoDB, ExpressJs, ReactJs, NodeJs</p>
                </div>

            </div>
        </div>
    )
}

export default Projects;