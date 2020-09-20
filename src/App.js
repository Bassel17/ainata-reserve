import React, {useState} from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';
import HomeScreen from './Components/Screens/homeScreen/homeScreen';
import Footer from './Components/Screens/footer/Footer';
import TerriorScreen from './Components/Screens/terroirScreen/TerroirScreen';
import SecondScreen from './Components/Screens/secondScreen/secondScreen';
import PassionMadeVisible from './Components/Screens/PassionMadeVisible/passion';
import MeetTheCharacter from './Components/Screens/MeetTheCharacter/meet';
import Generosity from './Components/Screens/Generosity/generosity'
import Elegance from './Components/Screens/Elegance/elegance';
import MeetTheFamily from './Components/Screens/MeetTheFamily/meetTheFamily';
import FollowTheFox from './Components/Screens/FollowTheFox/FollowTheFox';
import NavigationMenu from './Components/navigationMenu/NavigationMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [language, setLanguage] = useState("EN");

  const switchLanguageTo = (language) => {
    setLanguage(language);
  }

  return (
  <Router>
    <NavigationMenu switchLanguageTo = {switchLanguageTo}/>
    <Switch>
          <Route path="/">
            <ScreenSwitcher content={[HomeScreen,SecondScreen,PassionMadeVisible,MeetTheCharacter,Generosity,Elegance,FollowTheFox,MeetTheFamily,TerriorScreen,Footer]}/>
          </Route>
    </Switch>
  </Router>
  );
}

export default App;
