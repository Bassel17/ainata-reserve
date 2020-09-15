import React from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';
import HomeScreen from './Components/Screens/homeScreen/homeScreen';
import Footer from './Components/Screens/footer/Footer';
import TerriorScreen from './Components/Screens/terroirScreen/TerroirScreen';
import SecondScreen from './Components/Screens/secondScreen/secondScreen';
import PassionMadeVisible from './Components/Screens/PassionMadeVisible/passion';
import MeetTheCharacter from './Components/Screens/MeetTheCharacter/meet';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
  <Router>
     <ScreenSwitcher content={[HomeScreen,SecondScreen,PassionMadeVisible,MeetTheCharacter,TerriorScreen,Footer]}/>
  </Router>
  );
}

export default App;
