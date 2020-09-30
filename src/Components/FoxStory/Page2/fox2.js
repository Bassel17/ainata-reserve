import React from 'react';
import '../Page2/fox2.css';
import illustration from '../../../images/Planche 1 Ainata2.jpg'



const FoxTwo = () => (
    <div className = "fox2-wrapper">
        <div className = "fox2-container">
         <div className = "fox2-image__right">

            <img src={illustration} alt="illustration"  className = "fox2-illustartion"/>

        </div>
        <div className = "fox2-text__left">
        <div className = "fox2-text__container">  
                <p className = "fox2-text">
                The reality enwrapped in a mystery that
                allows you to travel to a hidden realm where
                the impossible merges into a memorable journey
                of out-of-this-world flavors, a novelty to the palate.
                the Juniper, resilient like the cedar, evergreen and ever
                tall, in the beautiful village of Ainata, all the way up
                north of Lebanon, floating at 1710 m high above the clouds.
                The vineyard located in the heart of Juniper  reserve faces Baalbek,
                where the "God of wine", Bacchus, watches over the breeding soil from
                his home temple. safeguarding that land as his very own,The Gods favor
                this promising piece of land.
                </p> 
        </div>
        </div>
        </div>
    </div>







) 

export default FoxTwo;
