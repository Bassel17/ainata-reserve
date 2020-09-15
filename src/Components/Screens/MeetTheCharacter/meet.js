import React from 'react';
import LeftPhoto from '../../../images/bg-red-wine.jpg';
import WineBottle from '../../../images/silouett with label.png';
import '../MeetTheCharacter/meet.css'




const MeetTheCharacter = () => (

    <div className = "meet-wrapper">
    <div className = "background">
    <img className = "left-photo" src={LeftPhoto} alt="wineImage"/>;
    </div>
    <div className = "wine-bottle">
    <img className = "w-bottle" src={WineBottle} alt="wineBottle"/>
    </div>
   
    <div className = "text">
        <h1>Meet The Character</h1>
        <button>Take A Sip</button>
    </div>
   
</div>



);

export default MeetTheCharacter;