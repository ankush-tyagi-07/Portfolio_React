import React from 'react';
import About from './Pages/About';
import {Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact';
import EduExp from './Pages/EduExp';
import Header from './Components/Header/Header';
import AchievementProject from './Pages/AchievementProject';


const App = () => {
  return (
    <div className='relative'>
      <Header/>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/eduexp' element={<EduExp />} />
        <Route path='/achievementproject' element={<AchievementProject />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App