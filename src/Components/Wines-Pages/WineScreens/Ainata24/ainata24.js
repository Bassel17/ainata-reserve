import React from 'react';
import '../Ainata24/ainata24.css';
import logo from '../../../../images/ainata_logo_with_text white.png'








const Ainata24 = () => (

    <div className = "ainata24-wrapper">
    <div className = "ainata24-logo__wrapper">
             <img src={logo} alt="Logo"  className = "ainata24-logo"/>
    </div>
    <div className = "ainata24-right-half">
        <div className = "ainata24-content__container">
            <h1 className = "ainata24-title">AINATA 24</h1>   
            <p className = "ainata24-text">
            An assembly of Cabernet Sauvignon and Syrah matured for 24 months in oak barrels.
            With a purple dress and violet hue, it offers a complex bouquet that blends hints of blackcurrant, incense and cedar. This deep-rooted generous wine balances intensity and finesse with a glowing finish. 
            AINATA 24, prenez le temps de l’écouter et de l’apprivoiser.
            </p>
        </div>    
    </div>
    
    <div className = "ainata24-left-half">
        <div className = "ainata24-bottle"></div>
    </div>
 
   

</div>








)


export default Ainata24;