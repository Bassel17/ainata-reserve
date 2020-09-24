import React from 'react';
import '../Chardonnay/chardonnay.css';
import logo from '../../../../images/ainata_logo_with_text white left.png'



const Chardonnay = () => (

    <div className = "chardonnay-wrapper">
    <div className = "chardonnay-logo__wrapper">
             <img src={logo} alt="Logo"  className = "chardonnay-logo"/>
    </div>
    <div className = "chardonnay-right-half">
        <div className = "chardonnay-content__container">
            <h1 className = "chardonnay-title">CHARDONNAY</h1>   
            <p className = "chardonnay-text">
            Delicate and charming, the Chardonnay conveys a mysterious allure that beckons the senses. Plucked from the mountainous terrain of Ainata, the crisp, white grapes are so enticing that even the cautious, careful fox is lured towards them, enchanted by their captivating scent. Oak-aged, the Chardonnay has a luxurious taste that lingers, determined to leave a long-lasting impression.


            </p>
        </div>    
    </div>
    
    <div className = "chardonnay-left-half">
        <div className = "chardonnay-bottle"></div>
    </div>
 
   

</div>






)


export default Chardonnay;