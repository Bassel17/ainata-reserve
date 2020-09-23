import React from 'react';
import './Footer.css';
import FooterImage from '../../../images/footer-images.png';
import logo from '../../../images/ainata_logo_with_text.png';
import logoFox from '../../../images/FOXLOGO.png';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-el/instagram';
import facebookIcon from '@iconify/icons-el/facebook';

const Footer = () =>{

    return(
        <div className="footer">
            <div className="footer__info">
                <div className = "footer__info__details">
                    <div>
                        <h1>Contact Us</h1>
                        <p>P: +96171705380</p>
                        <p>E:info@ainatareserve.com</p>
                    </div>
                    <img src={logo} width="auto" height="100%" alt="ainata reserve"/>
                    <div>
                        <a href="https://www.instagram.com/ainatareserve/" target="__blank"><Icon className="footer__info__details__icon" icon={instagramIcon} /></a>
                        <a href="https://www.facebook.com/ainatareserve/" target="__blank"><Icon className="footer__info__details__icon" icon={facebookIcon} /></a>
                    </div>
                </div>
                <div className = "footer__info__images">
                    <img width="auto" height="100%" src={FooterImage} alt="wine background"/>
                </div>
            </div>
            <div className="footer__bar" >
                <div>Terms Of Service</div>
                <img src={logoFox} width="auto" height="25px" alt="fox"/>
                <div>Privacy Policy</div>
            </div>
        </div>
    )

}

export default Footer;