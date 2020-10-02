import React, {useState} from 'react';
import './NavigationMenu.css';
import { Icon } from '@iconify/react';
import hamburgerMenu from '@iconify/icons-cil/hamburger-menu';
import bxX from '@iconify/icons-bx/bx-x';
import foxLogo from '../../images/FOXLOGO.png';

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
                    <a className="navigationMenu__bar__logo" href="/"><img src={foxLogo} height="150px" width="auto" alt="fox logo"/></a>
                </div>
                <div className="navigationMenu__links">
                    <a className="navigationMenu__links__link" href="/wines">The Wines</a>
                    <a className="navigationMenu__links__link" href="/stories/fox">The Fox Story</a>
                    <a className="navigationMenu__links__link" href="/stories/family">Our Story</a>
                    <a className="navigationMenu__links__link" href="/stories/terroir">The Terroir</a>
                    <a className="navigationMenu__links__link" href="/wines/contact">Contact</a>
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