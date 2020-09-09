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

            if (screen !== 0) {
                setFirstScreen('appear');
                setSecondScreen('second-screen--disappear');
                setScreen(0);

            }
            
        },
        down: () => {

            if (screen == 0) {
                setFirstScreen('first-screen-disappear');
                setSecondScreen('appear');
                setScreen(1);

            }

        }
    });


    

    return ( 
        <div className="screens" {...WheelReact.events}>
            {props.content.map((Screen,index)=>{
                if (index === 0){
                    return <Screen key={index} class ={firstScreen}/>;
                }else{
                    return <Screen key={index} class = {secondScreen}/>;
                }
            })}
        </div> 
    );
}

 
export default ScreenSwitcher;


