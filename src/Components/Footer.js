import React from 'react'
import Navbar from './Navbar'
import './Footer.css'
import gplay from './assets/googleplay.png'
import astore from './assets/app-store.svg'
import fbicon from './assets/facebook (2).png'
import twicon from './assets/twitter.png'
import igicon from './assets/instagram (1).png'
import whicon from './assets/whatsapp.png'



const Footer = () => {
    return (
        <div className='footer'>
            <Navbar />
            <div className="stores">
                <img className='sicons gpicon' src={gplay} alt="googleplay" />
                <img className='sicon asicon' src={astore} alt="applestore" />
            </div>

            <div className="div2">
                <div className="socicons">
                    <img src={fbicon} alt="fb" />
                    <img src={twicon} alt="tw" />
                    <img src={igicon} alt="ig" />
                    <img src={whicon} alt="wh" />
                </div>

                <div className='email'>
                    <p>Email: <span>support@frontendmasters.com</span></p>
                </div>
            </div>

            <div className="div3">
                <div className='div31'>
                    <p> Masters is proudly made in Minneapolis, MN</p>
                </div>

                <div className='div32'>
                    <p>© 2021 Frontend Masters <a href="#">Terms of Service</a> <a href="#"> Privacy Policy</a> </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
