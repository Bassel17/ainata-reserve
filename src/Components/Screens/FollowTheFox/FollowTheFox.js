import React from 'react';
import './FollowTheFox.css';
import LinkComponent from '../../linkComponent/LinkComponent';
import fox from '../../../images/fox_1.png';

const FollowTheFox = () => {
    return(
        <div className="followTheFox">
            <div className="followTheFox__main">
                <h1>LET’S FOLLOW
                    THE FOX’S PROMENADE
                    IN THE VINEYARD
                </h1>
                <img src={fox} alt="fox" width="auto" height="150px"/>
            </div>
            <LinkComponent
                name="FOLLOW THE FOX"
                path="#"
                color="#fff"
                backgroundColor="#424242"
                padding="10px 50px"
            />
        </div>
    );
}

export default FollowTheFox;