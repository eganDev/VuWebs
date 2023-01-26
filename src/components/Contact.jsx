import React from 'react';

import "../sass/Contact.scss"
import { MdLocationOn, MdEmail, MdOutgoingMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Aos from 'aos';

const Contact = () => {
    Aos.init();
    return (
        <div className='contact'>
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
                        <div className='contact-info__boxc'>
                            <h3>Talk to me?</h3>
                            <p>To easily find out more information about me, as well as exchange jobs. Call and talk to me about your business!</p>
                            <button onlick={() => window.open("tel:0356611341")}>
                                <MdOutgoingMail className='icon-1'></MdOutgoingMail>
                                Go to Phone
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
