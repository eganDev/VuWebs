import React from 'react'

import "../sass/About.scss"
import INFO_DATA from "../data/INFO_DATA"
import VuAvt from "../asset/vuavt.jpg"
import Languages from './Languages'
import cv from "../asset/CV/Vu-CV.pdf"
import AOS from 'aos'

export default function About() {
  AOS.init()
  return (
    <div className='about ' id='about' data-aos="fade-up">
        <div className='about-container'>
           <div>
                <h1>ABOUT ME</h1>
           </div>
           <div className='about-container-info'>
                <div className='about-container-info-main'>
                  <div className='about-container-info__image'>
                          <div className='about-container-info__image_detail'>
                              <img src={VuAvt} alt="avt" />
                          </div>
                          <div className='about-container-info__image_name'>
                              {/* <h2>Vo Van Vu</h2> */}
                          </div>
                  </div>
                  {
                    INFO_DATA.map((value, index) => (
                      <div className='about-container-info__content' key={index}>
                        <div className='about-container-info__content__introduces'>
                          <p>{value.introduce}</p>
                        </div>
                      </div>
                    ))
                  }
      
                </div>
                <div className='about-container-info-more'>
                  <div className='about-container-info-more_title'>
                    <h4>Has experience with </h4>
                  </div>
                  <div className='about-container-info-taglg'>
                      {INFO_DATA.map((value, index) => (
                        <Languages value = {value} key = {index} ></Languages> 
                      ))}
                  </div>
                </div>
                <div className='about-container-info-cv'>
                  <div className='about-container-info-cv-dl'>
                    <a  className='about-container-info-cv-dl_style'
                    href={cv}
                    download
                    ><p>Download CV</p></a>
                  </div>
                </div>
           </div>
        </div>
    </div>
  )
}
