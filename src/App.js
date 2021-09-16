import "./App.css";
import logo from "./components/tgc_logo.png";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WalkPage from "./components/WalkWithG/WalkPage";
import Team from "./components/TeamPage/Team";
import Shop from "./components/ShopPage/Shop";
import Podcast from "./components/PodcastPage/Podcast";
import Show from "./components/PodcastPage/Show";
import News from "./components/NewsPage/News";
import Header from "./components/Header";
import {TopButton} from './components/Button'





function App() {
  return (
    <div className="App">
      <Router>
        <Header logo={logo} onChange={false} />
        <Switch>
          <Route path="/" exact>
          <LandingPage />
          </Route>
          <Route path="/walk" component={WalkPage} />
          <Route path="/team" component={Team} />
          <Route path="/shop"  component={Shop} />
          <Route path="/podcast" exact component={Podcast} />
          <Route path="/show/:url/:title" component={Show} />
          <Route path="/news" component={News} />
        </Switch>
        <TopButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
