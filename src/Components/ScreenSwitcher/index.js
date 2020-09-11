import React ,{useState,useEffect} from 'react';
import './styles.css';
import PageSwitcher from './PageSwitcher';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const switcher = new PageSwitcher();

const ScreenSwitcher = (props)=>{

    const [screens,setScreens] = useState([]);
    let  [,setState]=useState();

    useEffect(()=>{
        const screens = switcher.transformArray(props.content);
        setScreens(screens);
    },[props.content])

    function handleUpdate() {
        setState({});  
    }

    const scrollUp = ()=>{
        setScreens(switcher.up(screens));
        handleUpdate();
    }

    const scrollDown = () => {
        setScreens(switcher.down(screens));
        handleUpdate();
    }

    return ( 
        <div className="screens">
            <ReactScrollWheelHandler
                upHandler={scrollUp}
                downHandler={scrollDown}
            >
            {screens.map((Screen,index)=>{
                    return (
                        <div key={index} style={Screen.style} className="screen" >
                            <Screen.component/>
                        </div>
                );
            })}
            </ReactScrollWheelHandler>
        </div> 
    );
}

 
export default ScreenSwitcher;


