import React from 'react';
import {BsTwitter, BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import Logo from '../../logo.png'
function Footer(props) {
    return (
        <div className='footer'>
            <a href='#home'><img src={Logo}></img></a>
            <div className='contact-list'>
                <BsTwitter className='item'></BsTwitter>
                <GrFacebook className='item'></GrFacebook>
                <BsLinkedin className='item'></BsLinkedin>
            </div>
            <div className='copyright-mobile'>Just type what's on your mind and we'll </div>
            <div className='copyright-desktop'>Copywright 2020 Bella Onojie.com</div>
        </div>
    );
}

export default Footer;