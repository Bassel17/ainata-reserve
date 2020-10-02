import React , {useState} from 'react'
import WineBottle from '../../../images/silouett white.png'
import LinkComponent from '../../linkComponent/LinkComponent'
import './elegance.css'
import VizSensor from 'react-visibility-sensor';



const MeetTheElegance = () =>{
    const [visibility,setVisbility]=useState(false);

    return(
        <VizSensor
        partialVisibility
        onChange={(isVisible) => {
            setVisbility(isVisible)
        }}
        >
        <div className = "elegance-wrapper">
            <div className="elegance-wrapper__background"></div>
            <div className={`elegance-wrapper__second__background ${visibility ? 'elegance-wrapper__second__background--animate':''}`}></div>
            <div className = "elegance-background">
                <div className = "elegance-wine-bottle">
                <img
                    className ="elegance-w-bottle" 
                    src={WineBottle}
                    alt="wineBottle"
                />
                </div>
            </div>
            <div className = "elegance-text">
                    <h1>Meet The Elegance</h1>
                    <LinkComponent
                        name="Go For A Dip"
                        path="/wines/chardonnay"
                        color="#fff"
                        backgroundColor="#424242"
                        padding="10px 50px"
                    />
            </div>
        </div>
        </VizSensor>
    )
}


export default MeetTheElegance;