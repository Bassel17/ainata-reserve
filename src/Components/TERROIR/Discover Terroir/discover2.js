import React from 'react';
import '../Discover Terroir/discover2.css';
import photo from '../../../images/explosion-glass-red-wine.png'



const Discover2 = () => (
    <div className = "discover2-wrapper">
        <div className = "discover2-container">
         <div className = "discover2-image__right">

            <img src={photo} alt="wine"  className = "discover2-image"/>

        </div>
        <div className = "discover2-text__left">
        <div className = "discover2-text__container">  
                <p className = "discover2-text">
                    When one is thirsty for knowledge and hungry for love, what can stop man?<br />

                    Dedicating his life to the hearts of men and his heart to life itself,
                    this is how from cardiology, Dr. Sleiman combines herbal medicine, 
                    aromatherapy, beekeeping, violin making before becoming an oenologist.<br />

                    When you grow up in a family that makes jams, wine and arak at the rhythm 
                    of the seasons, the noses and palates of the household learn to form without 
                    their knowledge.<br />

                    Passion is often born from actions, it is with care that he puts his hand 
                    to the task, perfectionist and meticulous he chooses all the vines that 
                    he plants by hand with the help of the peasants of the region.

                </p> 
        </div>
        </div>
        </div>
    </div>








)

export default Discover2;