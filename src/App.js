import React from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';
import HomeScreen from './Components/Screens/homeScreen/homeScreen';
//import SecondScreen from './Components/Screens/secondScreen/secondScreen';
//import PassionMadeVisible from './Components/Screens/PassionMadeVisible/passion';
import MeetTheCharacter from './Components/Screens/MeetTheCharacter/meet';

function App() {
  return (
  //  <ScreenSwitcher content={[HomeScreen, MeetTheCharacter]}/>
  <MeetTheCharacter/>
    
  );
}

export default App;
