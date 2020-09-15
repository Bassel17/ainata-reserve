import React from 'react';
import WineBottle from '../../../images/silouett with label.png';
import './meet.css'
import LinkComponent from '../../linkComponent/LinkComponent';



const MeetTheCharacter = () => (

    <div className = "meet-wrapper">
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
                color="#262424"
                backgroundColor="#D4AF37"
            />
        </div>
    </div>

);

export default MeetTheCharacter;