import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../context/ContextHook';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const Profile = () => {
  const {mode} = useAuth()
  const skills = ["Web Developer","Web Designer","MERN Stack Developer","C++ Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkillIndex];
    const interval = setInterval(() => {
      if (!isRemoving) {
        if (animationStep < skill.length) {
          setDisplayedText(prev => prev + skill[animationStep]);
          setAnimationStep(prev => prev + 1);
        } else {
          setIsRemoving(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
        } else {
          setIsRemoving(false);
          setAnimationStep(0);
          setCurrentSkillIndex(prev => (prev + 1) % skills.length);  //tricky
        }
      }
    }, 100);    
    return () => clearInterval(interval);
  }, [animationStep, displayedText, isRemoving, currentSkillIndex, skills]);
  const handleResumeOpen=()=>{
    window.open('https://drive.google.com/file/d/1dxcMr6kCqnX32KtWkf1Vk0-L4QXI3VNl/view?usp=sharing','_blank')
  }

  
  return (
    <>
    <div className='main-profile-div d-flex align-items-center justify-content-center'>
    <div className=' main-prof-cont d-flex justify-content-evenly'style={{gap:"9rem"}}>
    <div className='Prof-about d-flex flex-column gap-3'>
      <div>
        <h3 className='fw-bold'>Hi There</h3>
        <h3 className='fw-bold'>I'm Manish <span className='text-warning'>Jangir</span></h3>
        <p className=' fw-bold '>I am a <span className='text-danger fs-5 ms-2'>{displayedText}</span></p>
      </div>
      <div className='about-text'>
        <p style={{width:"32rem"}}>I'm a passionate developer who thrives on creating innovative MERN stack projects and designing unique, visually appealing experiences.</p>
      </div>
      <div className='d-flex flex-column gap-4'>
        <div>
        <button onClick={handleResumeOpen} className='btn btn-warning btn-sm'>Resume</button>


        </div>
        <div className='social-handle d-flex gap-4'>
          <a href="https://www.linkedin.com/in/manish-jangir-4a46a324a/" target='_blank'>
          <img src="/linkdin.png" alt="" />
          </a>
          <a href="https://github.com/manish201258"target='_blank'>
          <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/manish_jangir16/"target='_blank'>
          <img src="/instagram.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/manish201258/"target='_blank'>
          <img src="/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div data-scroll data-scroll-speed="0.3"  className='position-relative main-scroll-box'>
    <div className='Prof-image' style={{backgroundColor:mode?'#ffc107':"rgb(13, 13, 37)"}}>
    </div>
    <div className='rotate-border'></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile
