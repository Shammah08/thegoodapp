import "./App.css";
import logo from "./components/tgc_logo.png";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WalkPage from "./components/WalkWithG/WalkPage.jsx";
import Team from "./components/TeamPage/Team.jsx";
import Shop from "./components/ShopPage/Shop.jsx";
import Podcast from "./components/PodcastPage/Podcast.jsx";
import Show from "./components/PodcastPage/Show.jsx";
import Product from "./components/ShopPage/Product.jsx";
import Checkout from "./components/ShopPage/Checkout.jsx";
import News from "./components/NewsPage/News.jsx";
import Header from "./components/Header.jsx";

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
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/podcast" exact component={Podcast} />
          <Route path="/show/:url/:title" component={Show} />
          <Route path="/shop/:id/:name" component={Product} />
          <Route path="/shop/checkout" component={Checkout} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
