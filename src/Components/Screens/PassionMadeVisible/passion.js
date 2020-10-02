import React, {useState} from 'react';
import WineBottle from '../../../images/silouettsyratah.png'
import '../PassionMadeVisible/passion.css'
import LinkComponent from '../../linkComponent/LinkComponent'
import VizSensor from 'react-visibility-sensor';

const PassionMadeVisible = () =>{

    const [visibility,setVisbility]=useState(false);

    return(
        <VizSensor
            partialVisibility
            onChange={(isVisible) => {
                setVisbility(isVisible)
            }}
        >
        <div className = "passion-wrapper">
            <div className = "passion-wrapper-background"></div>
            <div className = {`passion-wrapper-second-background ${visibility ? 'passion-wrapper-second-background--animate':''}`}></div>
            <div className = "background-picture">
                <div className = "wine-bottle">
                    <img
                        className = "passion-bottle"
                        src={WineBottle}
                        alt="wineBottle"
                    />
                </div>

            </div>
            <div className = "passion-text">
                <h1>Passion Made Visible</h1>
                <LinkComponent 
                        name="Take A Sip"
                        path="/wines/ainata12"
                        color="#fff"
                        backgroundColor="#424242"
                        padding="10px 50px"
                        className="passion-text__link"
                    />
            </div>
    
        </div>
        </VizSensor>
    )
}

export default PassionMadeVisible;