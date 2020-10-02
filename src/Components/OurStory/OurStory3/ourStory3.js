import React from 'react';
import '../OurStory3/ourStory3.css';
import photo from '../../../images/IMG_9060.JPG'



const OurStory3 = () => (
    <div className = "ourStory3-wrapper">
    <div className="ourStory3-container">
         <div className = "ourStory3-text__right">
            <div className = "ourStory3-text__container">  
                <p className = "ourStory3-text">
                    Once the vines are in the ground, until tasting. 
                    He follows and protects himself from all stages. 
                    Wine, more than an elixir for the soul, is an opportunity for him to share and meet.
               
                    Anxious to pass on this passion in his turn, he involved his wife and seven
                    children at all stages of the wine creation process.
                 

                    
                    The bottles produced and disseminated, are each an opportunity for gathering 
                    and celebration which contributes to its accomplishment.
                
                
                
                    Wine for him has a soul, lives and ages and when he gives himself it will become grandiose.
                </p>

                
            </div>
        </div>

        <div className = "ourStory3-image__left">

            <img src={photo} alt="wine"  className = "ourStory3-photo"/>

        </div>
   </div>
</div>









)

export default OurStory3;