import React, {useState} from 'react';
import './NavigationMenu.css';
import { Icon } from '@iconify/react';
import hamburgerMenu from '@iconify/icons-cil/hamburger-menu';
import bxX from '@iconify/icons-bx/bx-x';
import foxLogo from '../../images/FOXLOGO.png';
import {Link} from "react-router-dom";

const NavigationMenu = (props) => {

    const [navigationBarState,setNavigationBarState] = useState("navigationMenu__bar--close");

    const navigationBarToggler = (class_name)=>{
        setNavigationBarState(class_name);
    }

    const switchLanguageTo = (language) => {
        props.switchLanguageTo(language);
    }

    return(
        <div className="navigationMenu">
            <Icon className="navigationMenu__btn" icon={hamburgerMenu} style={{fontSize: '50px'}} onClick={()=>navigationBarToggler("navigationMenu__bar--open")}/>
            <div className={`navigationMenu__bar ${navigationBarState}`}>
                <div className="navigationMenu__bar__main">
                    <Icon className="navigationMenu__bar__close" icon={bxX} style={{fontSize: '50px'}} onClick={()=>navigationBarToggler("navigationMenu__bar--close")}/>
                    <Link className="navigationMenu__bar__logo" to="/"><img src={foxLogo} height="150px" width="auto" alt="fox logo"/></Link>
                </div>
                <div className="navigationMenu__links">
                    <Link className="navigationMenu__links__link" to="/wines">The Wines</Link>
                    <Link className="navigationMenu__links__link" to="#">The Fox Story</Link>
                    <Link className="navigationMenu__links__link" to="#">The Terroir</Link>
                    <Link className="navigationMenu__links__link" to="#">Contact</Link>
                </div>
                <div className="navigationMenu__languageBtns">
                    <button className={`navigationMenu__languageBtns__btn`} onClick={()=>switchLanguageTo("EN")}>EN</button>
                    |
                    <button className={`navigationMenu__languageBtns__btn`} onClick={()=>switchLanguageTo("FR")}>FR</button>
                </div>
            </div>
        </div>
    );

}

export default NavigationMenu;