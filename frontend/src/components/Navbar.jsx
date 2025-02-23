import React, { useEffect } from 'react';
import { useAuth } from '../context/ContextHook';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const { mode, changeMode } = useAuth();

  useEffect(() => {
    const changeBg = () => {
      if (mode) {
        document.getElementById("root").style.backgroundColor = "#fcfefe";
        document.getElementById("root").style.color = "black";
      } else {
        document.getElementById("root").style.backgroundColor = "rgba(3, 3, 20, 0.929)";
        document.getElementById("root").style.color = "white";
      }
    };
    changeBg();
  }, [mode]);

  return (
    <div className='navbar d-flex justify-content-around align-items-center pt-4'>
      <div className='navbar-logo d-flex justify-content-between'>
      <h5 className='m-0'>About <span className='text-danger'>Me.</span></h5>
      <a className='link-icon-mobile' href="https://www.linkedin.com/in/manish-jangir-4a46a324a/" target='_blank'></a>
      </div>
      <div className='nav-links '>
        <li className='d-flex align-items-center gap-4'>
          <Link to="home" spy={true} smooth={true} duration={500} style={{ color: mode ? "black" : "white", cursor: 'pointer' }}>
            Home
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={1200} style={{ color: mode ? "black" : "white", cursor: 'pointer' }}>
            Experience
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={1200} style={{ color: mode ? "black" : "white", cursor: 'pointer' }}>
            Skills
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={1200} style={{ color: mode ? "black" : "white", cursor: 'pointer' }}>
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={1200} style={{ color: mode ? "black" : "white", cursor: 'pointer' }}>
            Contact
          </Link>
        </li>
        <img onClick={() => changeMode(!mode)} className='mode' src={`${mode?"/darkmode.png":"/lightmode.png"}`} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
