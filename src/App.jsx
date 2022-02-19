import "./app.scss";
import "./global.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import WalkPage from "./components/WalkWithG/WalkPage";
import Team from "./components/TeamPage/Team";
import Shop from "./components/ShopPage/Shop";
import Podcast from "./components/TvPage/Tv";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsArticle from "./components/NewsPage/NewsArticle";
import Header from "./components/Header/Header";
import MemberProfile from "./components/TeamPage/MemberProfile";
import ProductState from "./contexts/ProductState";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/walk' component={WalkPage} />
          <Route path='/team' component={Team} exact />
          <Route path='/team/:userid' component={MemberProfile} />
          <Route path='/tv' exact component={Podcast} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:articleId' component={NewsArticle} />

          {/* Enclosed in products context state */}
          <ProductState>
            <Route path='/shop' exact>
              <Shop />
            </Route>
          </ProductState>
          {/*  */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
