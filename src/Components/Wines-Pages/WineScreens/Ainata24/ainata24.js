import React from 'react';
import './ainata24.css';
import logo from '../../../../images/ainata_logo_with_text white.png'

const Ainata24 = (props) => {

    const content = {
        "english":{
            title:"AINATA 24",
            description:`An assembly of Cabernet Sauvignon and Syrah matured for 24 months in oak barrels.
            With a purple dress and violet hue, it offers a complex bouquet that blends hints of blackcurrant, incense and cedar. This deep-rooted generous wine balances intensity and finesse with a glowing finish. 
            AINATA 24, prenez le temps de l’écouter et de l’apprivoiser.`
        },
        "french":{
            title:"AINATA 24",
            description:`Un assemblage de Cabernet Sauvignon et Syrah élevé 24 mois en fûts de chêne.
                        Avec une robe violette et une teinte violette, il offre un bouquet complexe qui mêle des notes de cassis, d'encens et de cèdre. Ce vin généreux aux racines profondes équilibre intensité et finesse avec une finale éclatante.
                        AINATA 24, prenez le temps de l’écouter et de l’apprivoiser.`
        }
    }


    return(

    <div className = "ainata24-wrapper">
    <div className = "ainata24-logo__wrapper">
             <img src={logo} alt="Logo"  className = "ainata24-logo"/>
    </div>
    <div className = "ainata24-right-half">
        <div className = "ainata24-content__container">
        <h1 className = "ainata24-title">{props.language === "EN" ? content.english.title:content.french.title}</h1>   
            <p className = "ainata24-text">
            {props.language === "EN" ? content.english.description:content.french.description}
            </p>
        </div>    
    </div>
    
    <div className = "ainata24-left-half">
        <div className = "ainata24-bottle"></div>
    </div>
 
   

</div>
)
}


export default Ainata24;