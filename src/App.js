import "./App.css";
import "./App.media.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { logos } from "./components/database.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import WalkPage from "./components/WalkWithG/WalkPage.jsx";
import Team from "./components/TeamPage/Team.jsx";
import Shop from "./components/ShopPage/Shop.jsx";
import Podcast from "./components/PodcastPage/Podcast.jsx";
import Show from "./components/PodcastPage/Show.jsx";
import Product from "./components/ShopPage/Product.jsx";
import Checkout from "./components/ShopPage/Checkout.jsx";
import News from "./components/NewsPage/News.jsx";
import Header from "./components/Header.jsx";
import MemberProfile from "./components/TeamPage/MemberProfile";
import ProductState from "./contexts/ProductState";

function App() {
  const [activeLink, setActiveLink] = useState("welcome");
  const [navActive, setNavActive] = useState(false);
  const handleClick = (clicked) => {
    setActiveLink(clicked);
    setNavActive(!navActive);
  };

  const setNav = () => {
    setNavActive(!navActive);
  };
  return (
    <div className='App'>
      <Router>
        <Header
          logo={logos.logoBlue}
          onClick={handleClick}
          setNav={setNav}
          navActive={navActive}
          activeLink={activeLink}
        />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/walk' component={WalkPage} />
          <Route path='/team' component={Team} exact />
          <Route path='/team/:userid' component={MemberProfile} />
          <Route path='/podcast' exact component={Podcast} />
          <Route path='/show/:url/:title' component={Show} />
          <Route path='/news' component={News} />

          {/* Enclosed in products context state */}
          <ProductState>
            <Route path='/shop' exact>
              <Shop />
              <Route path='/shop/:id/:name' component={Product} />
              <Route path='/shop/checkout' component={Checkout} />
            </Route>
          </ProductState>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
