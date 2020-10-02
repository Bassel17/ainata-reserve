import React,{useState} from 'react'
import WineBottle from '../../../images/syrah.png'
import '../Generosity/generosity.css'
import LinkComponent from '../../linkComponent/LinkComponent'
import VizSensor from 'react-visibility-sensor';


const GenerosityHasAName = () =>{
    const [visibility,setVisbility]=useState(false);
    return(
<VizSensor
    partialVisibility
    onChange={(isVisible) => {
        setVisbility(isVisible)
    }}
>
<div className = "generosity-wrapper">
    <div className = "generosity-background"></div>
    <div className = {`generosity-background__second ${visibility ? 'generosity-background__second--animate':''}`}></div>
    <div className = "generosity-background-pic">
        <div className = "generosity-wine-bottle">
        <img
                className = "g-wine-bottle"
                src={WineBottle}
                alt="wineBottle"
            />
        </div>
    </div>
    <div className = "generosity-text">
        <h1>Generosity Has A Name</h1>
        <div>
            <LinkComponent 
                    name="Try A Swing"
                    path="/wines/syrah"
                    color="#fff"
                    backgroundColor="#424242"
                    padding="10px 50px"
                    className="generosity-text__link"
                />
        </div>
    </div>
</div>
</VizSensor>

);
}


export default GenerosityHasAName;
