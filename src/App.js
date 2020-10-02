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
import Ainata12 from './Components/Wines-Pages/WineScreens/Ainata12/ainata12';
import Ainata24 from './Components/Wines-Pages/WineScreens/Ainata24/ainata24';
import Syrah from './Components/Wines-Pages/WineScreens/Syrah/syrah';
import Chardonnay from './Components/Wines-Pages/WineScreens/Chardonnay/chardonnay';
import TheWines from './Components/Wines-Pages/WineScreens/theWines/theWines';
import FoxOne from './Components/FoxStory/Page1/fox1';
import FoxTwo from './Components/FoxStory/Page2/fox2';
import FoxThree from './Components/FoxStory/Page3/fox3';
import FoxFive from './Components/FoxStory/Page5/fox5';
import FoxFour from './Components/FoxStory/Page4/fox4';
import Family from './Components/OurStory/Family/family';
import OurStory2 from './Components/OurStory/OurStory2/ourStory2';
import OurStory3 from './Components/OurStory/OurStory3/ourStory3';
import Discover from './Components/TERROIR/Discover/discover';
import Discover2 from './Components/TERROIR/Discover Terroir/discover2';
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
              {component:HomeScreen,id:""},
              {component:SecondScreen,id:""},
              {component:PassionMadeVisible,id:""},
              {component:MeetTheCharacter,id:""},
              {component:Generosity,id:""},
              {component:Elegance,id:""},
              {component:FollowTheFox,id:""},
              {component:MeetTheFamily,id:""},
              {component:TerriorScreen,id:""},
              {component:Footer,id:""}
            ]}
           />
          </Route>
          <Route exact path="/wines/:id?">
           <ScreenSwitcher
            language={language} 
            content={[
              {component:TheWines,id:""},
              {component:Ainata12,id:"ainata12"},
              {component:Ainata24,id:"ainata24"},
              {component:Syrah,id:"syrah"},
              {component:Chardonnay,id:"chardonnay"},
              {component:TerriorScreen,id:""},
              {component:Footer,id:"contact"}
            ]}
           />
          </Route>
          <Route exact path="/stories/:id">
           <ScreenSwitcher
            language={language} 
            content={[
              {component:FoxOne,id:"fox"},
              {component:FoxTwo,id:""},
              {component:FoxThree,id:""},
              {component:FoxFour,id:""},
              {component:FoxFive,id:""},
              {component:Family,id:"family"},
              {component:OurStory2,id:""},
              {component:OurStory3,id:""},
              {component:Discover,id:"terroir"},
              {component:Discover2,id:""},
              {component:Footer,id:""}
            ]}
           />
          </Route>
    </Switch>
  </Router>
   );
}

export default App;
