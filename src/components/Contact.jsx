import React from 'react';

import "../sass/Contact.scss"
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-container'>
                <div className='contact-header'>
                    <h1>CONTACT</h1>
                </div>
                <div className='contact-info'>
                    <div className='contact-info__box'>
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
                    <div className='contact-info__connect'>
                        <div className='contact-info__boxc'>
                            <h3>Mail to me?</h3>
                            <p>If my experience can contribute to your business, email is the best medium to communicate with me</p>
                            <button>Send Email</button>
                        </div>
                        <div className='contact-info__boxc'>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
