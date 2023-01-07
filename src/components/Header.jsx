import React from 'react'
import { useState } from 'react';

import "../sass/Header.scss"
import logo from "../asset/logo1.png"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function Header() {

  const [activeNav, setActiveNav] = useState(false);

  const handleClick = () => {
    setActiveNav(activeNav => !activeNav);
  }
  
  let active = activeNav ? "active" : "";
  let activeMenu = activeNav ? "activeMd" : "";

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
              <li><a href="#about">About</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div>
              <a href="#a"><BsFacebook></BsFacebook></a>
            </div>
            <div>
              <a href="#a"> <BsGithub></BsGithub></a>
            </div>
            <div>
              <a href="#a"><BsLinkedin></BsLinkedin></a>
            </div>
            <div>
              <a href="#a"><GrMail></GrMail></a>
            </div>

          </div>

      </div>
    </div>
  )
}
