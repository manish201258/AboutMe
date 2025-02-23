import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Contact from './Contact'
import Projects from './Projects'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
 
const Home = () => {

    // Coding Profile Data
    const [easy,setEasy] = useState(0);
    const [medium,setMedium] = useState(0);
    const [hard,setHard] = useState(0);

useEffect(()=>{

  const codingProfile= async()=>{
    const res = await fetch("https://alfa-leetcode-api.onrender.com/manish201258/solved",
      {
        method:"GET"
      }
    )
    const data = await res.json()
    console.log(data)
  }
  codingProfile();
},[])


  return (
    <>
    <div className='home'>

    <Navbar />
          <Profile />
        
          <AboutMe />
        
          <Skills />
          
          <Education />
        
          <Experience />
        
          <Projects />
        
          <Contact />
        <Footer />
    </div>
    <div>
      <MobileMenu/>
    </div>
    <div className='codingData'>
    <img src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000" alt="" />
    <div>
      <p className='m-0 fw-bold ' style={{color:"#22c55e"}}>Easy <span>
        {easy}
        </span></p>
      <p className='m-0 fw-bold'style={{color:"#eab308"}}>Medium <span>
        {medium}
        </span></p>
      <p className='m-0 fw-bold'style={{color:"#f43f5e"}}>Hard <span>
        {hard}
        </span></p>
    </div>
</div>
    </>
  )
}

export default Home