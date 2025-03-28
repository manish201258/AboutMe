import React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
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
      <MobileMenu />
      <Analytics />
    </>
  );
};

export default Home;