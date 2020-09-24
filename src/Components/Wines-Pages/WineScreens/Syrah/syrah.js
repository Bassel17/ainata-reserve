import React from 'react';
import '../Syrah/syrah.css';
import logo from '../../../../images/ainata_logo_with_text white.png'




const Syrah = () => (

    <div className = "syrah-wrapper">
    <div className = "syrah-logo__wrapper">
             <img src={logo} alt="Logo"  className = "syrah-logo"/>
    </div>
    <div className = "syrah-right-half">
        <div className = "syrah-content__container">
            <h1 className = "syrah-title">Syrah</h1>   
            <p className = "syrah-text">
            Delicious and defiant, the luscious Syrah is a red wine that transcends time. As it lingers on the palate, you are mystically transported to the sun-kissed, rocky terrain that bears this resilient vine. Full-bodied, adventurous and elegantly sophisticated, the Syrah of Ainata is reminiscent of velvet, romance and all things mystical.

            </p>
        </div>    
    </div>
    
    <div className = "syrah-left-half">
        <div className = "syrah-bottle"></div>
    </div>
 
   

</div>





)



export default Syrah;