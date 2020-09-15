import React from 'react';
import BackgroundPhoto from '../../../images/bg-rose.jpg'
import WineBottle from '../../../images/silouett with label.png'
import '../PassionMadeVisible/passion.css'



const PassionMadeVisible = () => (

<div className = "passion-wrapper">
    <div className = "background-picture">
    <img className = "right-photo" src={BackgroundPhoto} alt="wineImage"/>;
    </div>
    <div className = "wine-bottle">
    <img className = "bottle" src={WineBottle} alt="wineBottle"/>
    </div>
   
    <div className = "text">
        <h1>Passion Made Visible</h1>
        <button>Take A Sip</button>
    </div>
   
</div>






);

export default PassionMadeVisible;