import React from 'react';
import '../Ainata12/ainata12.css';
import logo from '../../../../images/ainata_logo_with_text white.png'


const Ainata12 = () => (
    
    <div className = "ainata12-wrapper">
        <div className = "ainata12-logo__wrapper">
                 <img src={logo} alt="Logo"  className = "ainata12-logo"/>
        </div>
        <div className = "ainata12-left-half">
            <div className = "ainata12-content__container">
                <h1 className = "ainata12-title">AINATA 12</h1>   
                <p className = "ainata12-text">
                Dark red, almost black color, very elegant with nose of dark fruits integrated in woody notes expressing essential sense of this terroir. Dense and incredibly complex with a velvety texture, ending in a long lasting smooth finish of harmony and generosity.
                </p>
            </div>    
        </div>
        
        <div className = "ainata12-right-half">
            <div className = "ainata12-bottle"></div>
        </div>
     
       

    </div>







)


export default Ainata12; 