import React from 'react';
import '../Page4/fox4.css';
import fox4 from '../../../images/Planche 3 Ainata2 .jpg'



const FoxFour = () => (
    <div className = "fox4-wrapper">
        <div className = "fox4-container">
         <div className = "fox4-image__right">

            <img src={fox4} alt="illustration"  className = "fox4-illustartion"/>

        </div>
        <div className = "fox4-text__left">
        <div className = "fox4-text__container">  
                <p className = "fox4-text">
                    <h3>Lets follow the fox’s promenade in the vineyard :</h3>

                        One afternoon the fox was walking through the forest 
                        and spotted a bunch of grapes hanging from over a lofty branch.
                        "Just the thing to quench my thirst," quoth he.
                        Taking a few steps back, the fox jumped and just missed 
                        the hanging grapes. Again the fox took a few paces back 
                        and tried to reach them but still failed.
                         Finally, giving up, the fox turned up his nose and said, 
                        "They're probably sour anyway," and proceeded to walk away.

                </p> 
        </div>
        </div>
        </div>
    </div>







) 

export default FoxFour;
