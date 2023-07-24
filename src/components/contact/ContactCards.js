import React from 'react'
import './ContactCards.css'
import Call from '../../assets/call_us.png'
import Email from '../../assets/email.png'
import Visit from '../../assets/visit_us.png'


const ContactCards = () => {
  return (
    <>
    <div className='contact-cards container'>
        <div className='contact-cards-contents'>

                <div className='contact-card'>
                    <div className='contact-card-icon'>
                        <img src={ Call } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='contact-card-info'>
                        <h1>CALL US</h1>
                        <p>132435465465</p>
                    </div>
                </div>

                <div className='contact-card'>
                    <div className='contact-card-icon'>
                        <img src={ Email } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='contact-card-info'>
                        <h1>EMAIL</h1>
                        <p>info@domailname.com</p>
                    </div>
                </div>


                <div className='contact-card'>
                    <div className='contact-card-icon'>
                        <img src={ Visit } alt="individual therapy" loading="lazy"/>
                    </div>
                    <div className='contact-card-info'>
                        <h1>CONNECT</h1>
                        <p>132435465465</p>
                    </div>
                </div>



        </div>

    </div>
    </>
  )
}

export default ContactCards