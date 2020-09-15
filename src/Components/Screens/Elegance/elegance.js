import React from 'react'
import WineBottle from '../../../images/silouett with label.png'
import LinkComponent from '../../linkComponent/LinkComponent'
import './elegance.css'




const MeetTheElegance = () => (

<div className = "elegance-wrapper">
    <div className = "elegance-background">
        <div className = "elegance-wine-bottle">
        <img 
            className ="elegance-w-bottle" 
            src={WineBottle}
            alt="wineBottle"
        />
        </div>

    </div>
    <div className = "elegance-text">
            <h1>Meet The Elegance</h1>
            <LinkComponent 
                name="Go For A Dip"
                path="#"
                color="#fff"
                backgroundColor="#424242"
                padding="10px 50px"
            />
        </div>
</div>



);

export default MeetTheElegance;