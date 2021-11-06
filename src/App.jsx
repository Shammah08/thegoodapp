import "./App.css";
import "./App.media.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import WalkPage from "./components/WalkWithG/WalkPage.jsx";
import Team from "./components/TeamPage/Team.jsx";
import Shop from "./components/ShopPage/Shop.jsx";
import Podcast from "./components/TvPage/Tv.jsx";
import Show from "./components/TvPage/Show.jsx";
import Checkout from "./components/ShopPage/Checkout.jsx";
import News from "./components/NewsPage/News.jsx";
import Header from "./components/Header.jsx";
import MemberProfile from "./components/TeamPage/MemberProfile";
import ProductState from "./contexts/ProductState";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/walk' component={WalkPage} />
          <Route path='/team' component={Team} exact />
          <Route path='/team/:userid' component={MemberProfile} />
          <Route path='/tv' exact component={Podcast} />
          <Route path='/show/:url/:title' component={Show} />
          <Route path='/news' component={News} />

          {/* Enclosed in products context state */}
          <ProductState>
            <Route path='/shop' exact>
              <Shop />
              <Route path='/shop/checkout' component={Checkout} />
            </Route>
          </ProductState>
          {/*  */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
