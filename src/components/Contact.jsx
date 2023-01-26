import React from 'react';

import "../sass/Contact.scss"
import { MdLocationOn, MdEmail, MdOutgoingMail } from "react-icons/md";
import { BsFillTelephoneFill, BsFillTelephoneForwardFill } from "react-icons/bs";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import Aos from 'aos';

const Contact = () => {
    Aos.init();
    return (
        <div className='contact' id='contact'>
            <div className='contact-container'>
                <div className='contact-header'>
                    <h1>CONTACT</h1>
                </div>
                <div className='contact-info'>
                    <div className='contact-info__box' data-aos="fade-up">
                        <div className='contact-info__box__info'>
                            <MdLocationOn className='icon'></MdLocationOn>
                            <p>Hoa Hai, Da Nang, Viet Nam</p>
                        </div>
                        <div className='contact-info__box__info'>
                            <MdEmail className='icon'></MdEmail>
                            <p>vuvo070403@gmail.com</p>
                        </div>
                        <div className='contact-info__box__info'>
                            <BsFillTelephoneFill className='icon'></BsFillTelephoneFill>
                            <p>+84356611341</p>
                        </div>
                    </div>
                    <div className='contact-info__connect'  data-aos="fade-up">
                        <div className='contact-info__boxc'>
                            <h3>Mail to me?</h3>
                            <p>If my experience can contribute to your business, email is the best medium to communicate with me!</p>
                            <button onClick={() => window.open("mailto:vuvo070403@gmail.com")}>
                                <MdOutgoingMail className='icon-1'></MdOutgoingMail>
                                Send Email
                            </button>
                        </div>
                        <div className='contact-info__boxc reverse-bg'>
                            <h3>Talk to me?</h3>
                            <p>To easily find out more information about me, as well as exchange jobs. Call and talk to me about your business!</p>
                            <button onClick={() => window.open("tel:+84356611341")}>
                                <BsFillTelephoneForwardFill className='icon-2'></BsFillTelephoneForwardFill>
                                Go to Phone
                            </button>
                        </div>

                    </div>
                    <div className='contact-info__other'  data-aos="fade-up">
                        <div className='contact-info__other__detail'>
                           <div className='contact-info__other__text'>
                                <h3>Otherwise...</h3>
                                <p>You can contact me through Facebook or Linkedin!</p>   
                           </div>
                           <div className='contact-info__other__button'>
                                <button type=""
                                onClick={() => window.open("https://www.facebook.com/VanVu.070403", '_blank')}
                                ><ImFacebook2 className='icon-3'></ImFacebook2>Facebook</button>
                                <button type=""
                                 onClick={() => window.open("https://www.linkedin.com/in/vu-vu-26b748223/", '_blank')}
                                ><ImLinkedin className='icon-3'></ImLinkedin>Linkedin</button>
                            </div> 
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
