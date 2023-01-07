import React from 'react'

import "../sass/About.scss"
import "../data/INFO_DATA"

export default function About() {
  return (
    <div className='about'>
        <div className='about-container'>
           <div>
                <h1>INTRODUCTION</h1>
           </div>
           <div className='about-container-info'>
                <div className='about-container-info__image'>
                        <div className='about-container-info__image_detail'>
                            <img src="" alt="" />
                        </div>
                </div>
                <div className='about-container-info__content'>
                        <div className='about-container-info__content__languages'></div>
                        <div className='about-container-info__content__introduces'></div>
                </div>
           </div>
        </div>
    </div>
  )
}
