import "./App.css";
import { logos } from "./components/database.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WalkPage from "./components/WalkWithG/WalkPage.jsx";
import Team from "./components/TeamPage/Team.jsx";
import Shop from "./components/ShopPage/Shop.jsx";
import Podcast from "./components/PodcastPage/Podcast.jsx";
import Show from "./components/PodcastPage/Show.jsx";
import Product from "./components/ShopPage/Product.jsx";
import Cart from "./components/ShopPage/Cart.jsx";
import News from "./components/NewsPage/News.jsx";
import Header from "./components/Header.jsx";
import MemberProfile from "./components/TeamPage/MemberProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header logo={logos.logoBlue} onChange={false} />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/walk" component={WalkPage} />
          <Route path="/team" component={Team} exact />
          <Route path="/team/:userid" component={MemberProfile} />
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/podcast" exact component={Podcast} />
          <Route path="/show/:url/:title" component={Show} />
          <Route path="/shop/:id/:name" component={Product} />
          <Route path="/shop/checkout" component={Cart} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
