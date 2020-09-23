import React from 'react';
import WineBottle from '../../../images/silouett with label.png';
import './meet.css'
import LinkComponent from '../../linkComponent/LinkComponent';



const MeetTheCharacter = () => (

    <div className = "meet-wrapper">
        <div className = "meet-the-character__wrapper-background"></div>
        <div className = "meet-the-character__wrapper-second-background"></div>
        <div className = "background">
            <div className = "wine-bottle">
                <img 
                    className ="w-bottle" 
                    src={WineBottle}
                    alt="wineBottle"
                />
            </div>
        </div>
        <div className = "text">
            <h1>Meet The Character</h1>
            <LinkComponent 
                name="LET’S HANG"
                path="#"
                color="#fff"
                backgroundColor="#424242"
                padding="10px 50px"
            />
        </div>
    </div>

);

export default MeetTheCharacter;