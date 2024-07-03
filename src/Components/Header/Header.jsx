import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=' bg-[#111] ml-[-40px] mt-[-50px] sm:mt-[-55px] md:mt-[-70px] absolute h-[200px] w-[200px] sm:h-[230px] sm:w-[230px] md:h-[300px] md:w-[300px] '>
        <Link to='/'>
            <dotlottie-player src="https://lottie.host/a0022621-b7ff-4335-bb79-026a4007caa3/cHHnBXfxm2.json" 
            background="transparent" speed="1"   loop autoplay>
            </dotlottie-player>
        </Link>
    </div>
  )
}
export default Header;
