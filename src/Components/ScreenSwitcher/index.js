import React ,{useState} from 'react';
import './styles.css';
//import {useScroll} from 'react-use-gesture';
import WheelReact from 'wheel-react';


const ScreenSwitcher = (props)=>{

    const [screen, setScreen] = useState(0);
    const [firstScreen, setFirstScreen] = useState('appear');
    const [secondScreen, setSecondScreen] = useState('second-screen--disappear');
    
    WheelReact.config({
        up: () => {

            if (screen-1 > 0) {
                setFirstScreen('appear');
                setSecondScreen('second-screen--disappear');
                setScreen(screen-1);
            }
            
        },
        down: () => {

            if (screen  < props.content.length) {
                setFirstScreen('first-screen-disappear');
                setSecondScreen('appear');
                setScreen(screen + 1);

            }

        }
    });


    

    return ( 
        <div className="screens" {...WheelReact.events}>
            {props.content.map((Screen,index)=>{
                if (index === 0){
                    return <Screen key={index} className ="screen" class ={firstScreen}/>;
                }else{
                    return <Screen key={index} className ="screen" class = {secondScreen}/>;
                }
            })}
        </div> 
    );
}

 
export default ScreenSwitcher;


