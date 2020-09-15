import React from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';
import HomeScreen from './Components/Screens/homeScreen/homeScreen';
import Footer from './Components/Screens/footer/Footer';
import TerriorScreen from './Components/Screens/terroirScreen/TerroirScreen';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
  //  <ScreenSwitcher content={[HomeScreen,Footer]}/>
  <Router>
    <TerriorScreen/>
  </Router>
  );
}

export default App;
