import React from 'react'
import { useState, useEffect } from 'react';

import "../sass/Header.scss"
import logo from "../asset/logo1.png"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function Header() {

  const [activeNav, setActiveNav] = useState(false);  
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = () => {
    setActiveNav(activeNav => !activeNav);
  }
  
  let active = activeNav ? "active" : "";
  let activeMenu = activeNav ? "activeMd" : "";

  const handleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPosition(pos);
    setActiveNav(false);
  }
  console.log(scrollPosition);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='header'>
      <div className='header-container'>

          <div className='header-container__logo'>
            <img src={logo} alt="logo" className='header-container__logo-detail' />
          </div>

          <div className={`header-container__toggle ${"header-container__toggle-"+ active}`}
            onClick={() => handleClick()}
          ></div>

          <div className={`header-container__navigate`}>
            
            <ul className={`header-container__navigate__ul ${"header-container__navigate__ul-"+activeMenu} `}>
              <li><a href="#about" onClick={() => setActiveNav(!setActiveNav)}>About</a></li>
              <li><a href="#project" onClick={() => setActiveNav(!setActiveNav)}>Project</a></li>
              <li><a href="#contact" onClick={() => setActiveNav(!setActiveNav)}>Contact</a></li>
            </ul>

            <div>
              <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/VanVu.070403"><BsFacebook></BsFacebook></a>
            </div>
            <div>
              <a target={"_blank"} rel="noreferrer" href="https://github.com/VuVuDev"> <BsGithub></BsGithub></a>
            </div>
            <div>
              <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/vu-vu-26b748223/"><BsLinkedin></BsLinkedin></a>
            </div>
            <div>
              <a target={"_blank"} rel="noreferrer" href="mailto:vuvo070403@gmail.com"><GrMail></GrMail></a>
            </div>

          </div>

      </div>
    </div>
  )
}
