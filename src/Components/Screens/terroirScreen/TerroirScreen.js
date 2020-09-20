import React from 'react';
import './TerroirScreen.css';
import LinkComponent from '../../linkComponent/LinkComponent';


const TerroirScreen = () => {

    return(
        <div className="terrior">
            <div className="terrior__image"></div>
            <div className="terrior__text">
                <h1>
                A COMPLEX EXPLOSION
                FOR THE SENSES
                </h1>
                <LinkComponent 
                    name="DISCOVER OUR TERROIR" 
                    path="#"
                    backgroundColor="#424242"
                    color="#fff"
                    padding="10px 20px"
                />
            </div>
        </div>
    );

}

export default TerroirScreen;