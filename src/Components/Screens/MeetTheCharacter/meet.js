import React,{useState} from 'react';
import WineBottle from '../../../images/silouett with label.png';
import './meet.css'
import LinkComponent from '../../linkComponent/LinkComponent';

import VizSensor from 'react-visibility-sensor';

const MeetTheCharacter = () =>{

    const [visibility,setVisbility]=useState(false);

    return(
        <VizSensor
            partialVisibility
            onChange={(isVisible) => {
                setVisbility(isVisible)
            }}
        >
        <div className = "meet-wrapper">
            <div className = "meet-the-character__wrapper-background"></div>
            <div className = {`meet-the-character__wrapper-second-background ${visibility ? 'meet-the-character__wrapper-second-background--animate':''}`}></div>
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
        </VizSensor>
    )
}

export default MeetTheCharacter;