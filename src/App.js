import React from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';
import HomeScreen from './Components/Screens/homeScreen/homeScreen';

function App() {
  return (
   
  <HomeScreen/>
    
  );
}


const Screen1 = (props)=>{
  return (
      <div className={`first-screen ${props.class}`} >
          
      </div>
  )
}

const Screen2 = (props)=>{
  return (
      <div className={`second-screen ${props.class}`} >
          
      </div>
      
  )
}

const Screen3 = (props)=>{
  return (
      <div className={`third-screen ${props.class}`} >
          
      </div>
      
  )
}
export default App;
