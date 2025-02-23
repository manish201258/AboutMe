import React, { useEffect } from 'react'
import { Link } from 'react-scroll'; 
import { useAuth } from '../context/ContextHook';

const MobileMenu = () => {
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
    <>
    <div className='mob-menu' style={{backgroundColor:mode?"#b4acac":"rgb(113 106 146)"}}>
        <Link to="home" smooth="true" duration={1200}>
        <img src="https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=000000" alt="" />
        </Link>
        <Link to="projects" smooth="true" duration={1200}>
        <img src="https://img.icons8.com/?size=100&id=g29U_vbYx2Vf&format=png&color=000000" alt="" />
        </Link>
        <Link to="experience" smooth="true" duration={1200}>
        <img src="https://img.icons8.com/?size=100&id=52233&format=png&color=000000" alt="" />
        </Link>
        <Link to="education" smooth="true" duration={1200}>
        <img src="https://img.icons8.com/?size=100&id=39020&format=png&color=000000" alt="" />
        </Link>
        <Link to="contact" smooth="true" duration={1200}>
        <img src="https://img.icons8.com/?size=100&id=kY9BVvMoNa35&format=png&color=000000" alt="" />
        </Link>
        <img onClick={changeMode} className='cg-mode' src={`${mode?`/darkmode.png`:`/lightmode.png`}`} alt=""/>
       
        
       
       
        
        
    </div>
    </>
  )
}

export default MobileMenu