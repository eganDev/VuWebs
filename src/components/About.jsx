import React from 'react'

import "../sass/About.scss"
import INFO_DATA from "../data/INFO_DATA"
import VuAvt from "../asset/vuavt.jpeg"
import Aos from 'aos'

export default function About() {
  Aos.init()
  return (
    <div className='about ' id='about' >
        <div className='about-container'>
           <div>
                <h1>ABOUT ME</h1>
           </div>
           <div className='about-container-info'>
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
        </div>
    </div>
  )
}
