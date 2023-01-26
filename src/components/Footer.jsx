import React from 'react'

import "../sass/Footer.scss"
import { MdMail,  } from "react-icons/md";
import { BsFillTelephoneFill, BsFacebook, BsGithub  } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-container__info'>
                <h3>Vu's personal websites</h3>
                <p>Front-end developer</p>
                <p>From FPT University</p>
            </div>
            <div className='footer-container__contact'>
                <div className='footer__contact'>
                    <div className='footer__contact__header'>
                        <p>CONTACT</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick={() => window.open("https://www.google.com/maps/place/Da+Nang/@16.0718091,108.0781264,11z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0x1df0cb4b86727e06!8m2!3d16.0544563!4d108.0717219", "_blank")}
                    >
                        <IoIosPin className='icon-footer-1'></IoIosPin>
                        <p>Da Nang, Viet Nam</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick={() => window.open("tel: +8435611341", "_blank")}
                    >
                        <BsFillTelephoneFill className='icon-footer'></BsFillTelephoneFill>
                        <p>Tel: +84356611341</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick={() => window.open("https://www.facebook.com/VanVu.070403", "_blank")}>
                        <BsFacebook className='icon-footer'></BsFacebook>
                        <p>Facebook</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick={() => window.open("mailto:vuvo070403@gmail.com","_blank")}
                    >
                        <MdMail className='icon-footer'></MdMail>
                        <p>Gmail</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick = {() => window.open("https://github.com/eganDev", "_blank")}>
                        <BsGithub className='icon-footer'></BsGithub>
                        <p>Github</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick={() => window.open("https://www.linkedin.com/in/vu-vu-26b748223/", "_blank")}>
                        <FaLinkedinIn className='icon-footer'></FaLinkedinIn>
                        <p>Linkedin</p>
                    </div>
                    <div className='footer__contact__items'
                    onClick={() => window.open("https://twitter.com/vuvo070403", "_blank")}>
                        <FaTwitter className='icon-footer'></FaTwitter>
                        <p>Twitter</p>
                    </div>
                </div>
                <div className='footer__contact'>
                    <ul className='footer__contact__page'>
                        <li className='footer__contact__page__links'>LINKS</li>
                        <li><a href="#banner">Banner</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer-back'>
            <div className='footer-back__content'>
                <p>© Website is built based on reference and redesigned by VuVV</p>
            </div>
        </div>
    </div>
  )
}
