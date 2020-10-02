import React from 'react';
import LinkComponent from '../../linkComponent/LinkComponent';
import './meetTheFamily.css'

const MeetTheFamily = ()=>{
    return(
        <div className="MeetTheFamily">
            <h1>WINE FOR US HAS A SOUL</h1>
            <LinkComponent 
                name="MEET THE FAMILY"
                path="/stories/family"
                color="#fff"
                backgroundColor="#424242"
                padding="10px 50px"
            />
        </div>
    )
}

export default MeetTheFamily;