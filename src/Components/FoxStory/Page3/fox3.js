import React from 'react';
import '../Page3/fox3.css';
import fox3 from '../../../images/Planche2Ainata2.jpg'





const FoxThree = () => (
    <div className = "fox3-wrapper">
         <div className = "fox3-text__right">
   <div className = "fox3-text__container">  
           <p className = "fox3-text">
            In the midst of it all, a particular visitor,
            the little red fox who leads the story of this
            journey, and takes you where no one has ever been before.
            It will narrate you the captivating path, from cultivating
            the heavy earth, to the magic that flourishes out of its cocoon
            to the most fascinating fruits and an undeniable explosion of aromas.
            This wine stems from the peak of our highest lebanese hills.
            All is frail yet all is alive and growing. 
            this harsh platform brings you the genuine taste of the undiscovered. 
            The grapes are a living proof of generosity.The precious vineyard grows
            a daring fruit from a stubborn ground, hard to nurture but rich in the result. 
            It is defiant, but promising and powerful. 
            It is passionately cultivated with the certainty of a glorious outcome. 
            It endured the harshest weathers; Thick white coat to rest by and heavy 
            summer glare to jewel by, and always accompanied by continuous wind flow. 

           </p> 
   </div>
   </div>

        <div className = "fox3-image__left">

       <img src={fox3} alt="illustration"  className = "fox3-illustartion"/>

   </div>
  
</div>






)

export default FoxThree;