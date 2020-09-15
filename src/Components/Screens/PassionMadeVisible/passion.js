import React from 'react';
import WineBottle from '../../../images/silouett with label.png'
import '../PassionMadeVisible/passion.css'
import LinkComponent from '../../linkComponent/LinkComponent'


const PassionMadeVisible = () => (

<div className = "passion-wrapper">
    <div className = "background-picture">
        <div className = "wine-bottle">
            <img
                className = "bottle"
                src={WineBottle}
                alt="wineBottle"
            />
        </div>

    </div>
    <div className = "text">
        <h1>Passion Made Visible</h1>
        <LinkComponent 
                name="Take A Sip"
                path="#"
                color="#fff"
                backgroundColor="#424242"
                padding="10px 50px"
            />
    </div>
   
</div>






);

export default PassionMadeVisible;