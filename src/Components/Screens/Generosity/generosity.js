import React from 'react'
import WineBottle from '../../../images/silouett with label.png'
import '../Generosity/generosity.css'
import LinkComponent from '../../linkComponent/LinkComponent'



const GenerosityHasAName = () =>(

<div className = "generosity-wrapper">
    <div className = "generosity-background-pic">
        <div className = "generosity-wine-bottle">
        <img
                className = "g-wine-bottle"
                src={WineBottle}
                alt="wineBottle"
            />
        </div>
    </div>
    <div className = "generosity-text">
        <h1>Generosity Has A Name</h1>
        <LinkComponent 
                name="Try A Swing"
                path="#"
                color="#fff"
                backgroundColor="#424242"
                padding="10px 50px"
            />
    </div>
</div>





);


export default GenerosityHasAName;
