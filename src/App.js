import React from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';

function App() {
  return (
   
    <ScreenSwitcher content= {[Screen1 ,Screen2]}/>
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
export default App;
