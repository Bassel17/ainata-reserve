import React from 'react';
import logo from '../../../images/ainata_logo.png'
import './secondScreen.css';


const SecondScreen = () => (
    

<>
    <div className = "background-photo">
    </div>
    <div className = "secondScreen-Wrapper">
        <div className = "secondScreen-Wrapper__logo" >
            <img className = "secondScreen-Wrapper__logo__image"
             src={logo} alt="Logo" width="auto" height="200px"/>
        </div>
        <div className = "secondScreen-Wrapper__title">
            <div className="secondScreen-Wrapper__title__text">
                <h1>AINATA RESERVE THE CULTURE OF GENEROSITY</h1>
                <p >
                Dedicate his life to the Heart of men and his Heart to life itself, to
                nature, to the earth and to the fruit of this earth to make wine.
                </p>
            </div>
        </div>
    </div>
</>




);

export default SecondScreen;