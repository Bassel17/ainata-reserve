import React ,{useState,useEffect} from 'react';
import './styles.css';
import PageSwitcher from './PageSwitcher';
import { useParams } from "react-router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const switcher = new PageSwitcher();

const ScreenSwitcher = (props)=>{

    const [screens,setScreens] = useState([]);
    let  [,setState]=useState();
    let { id } = useParams();

    useEffect(()=>{
        const screens = switcher.transformArray(props.content,id);
        setScreens(screens);
    },[props.content,id])

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


