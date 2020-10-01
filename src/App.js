import React, {useState} from 'react';
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
import Ainata12 from './Components/Wines-Pages/WineScreens/Ainata12/ainata12';
import Ainata24 from './Components/Wines-Pages/WineScreens/Ainata24/ainata24';
import Syrah from './Components/Wines-Pages/WineScreens/Syrah/syrah';
import Chardonnay from './Components/Wines-Pages/WineScreens/Chardonnay/chardonnay';
import TheWines from './Components/Wines-Pages/WineScreens/theWines/theWines';
// import FoxTwo from './Components/FoxStory/Page2/fox2';
// import FoxThree from './Components/FoxStory/Page3/fox3';
// import FoxFive from './Components/FoxStory/Page5/fox5';
// import FoxFour from './Components/FoxStory/Page4/fox4';


function App() {

  const [language, setLanguage] = useState("EN");

  const switchLanguageTo = (language) => {
    setLanguage(language);
  }

  return (
    <Router>
    <NavigationMenu switchLanguageTo = {switchLanguageTo}/>
    <Switch>
          <Route exact path="/">
           <ScreenSwitcher
            language={language} 
            content={[
              HomeScreen,
              SecondScreen,
              PassionMadeVisible,
              MeetTheCharacter,
              Generosity,
              Elegance,
              FollowTheFox,
              MeetTheFamily,
              TerriorScreen,
              Footer
            ]}
           />
          </Route>
          <Route exact path="/wines">
           <ScreenSwitcher
            content={[
              TheWines,
              Ainata12,
              Ainata24,
              Syrah,
              Chardonnay,
              TerriorScreen,
              Footer
            ]}
           />
          </Route>
    </Switch>
  </Router>
   );
}

export default App;
