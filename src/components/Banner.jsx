import React from 'react';

import "../sass/Banner.scss"
import Vu from "../asset/VuVu.png"
import bannerVideo from "../asset/banner.mp4"

const Banner = () => {
    return (
        <div  className='banner'>
            <video autoPlay loop muted playsInline typeof='video/mov' className='banner__video'>
                <source src={bannerVideo}/>
            </video>
            <div className='banner-container'>
                <div className='banner-container-content'>
                    <div className='banner-container-content__info'>
                        <p>
                            Developer with high passion
                            <span>
                                VO VAN VU
                            </span>
                            &mdash; FPT University&mdash;
                        </p>
                    </div>
                    <div className='banner-container-content__text'>
                        <p>
                            Front-end developer
                            <br />
                            <span><span>
                            Who are meticulous and creative in work, using new technologies for projects, focusing on clean code and efficiency.
                            </span></span>
                        </p>
                    </div>
                </div>
                <div className='banner-container-image'>
                    <div className='banner-container-image__box'>
                        <img src={Vu} alt="Vu" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
