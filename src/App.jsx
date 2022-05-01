import "./app.scss";
import "./global.scss";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import WalkPage from "./components/WalkWithG/WalkPage";
import Team from "./components/TeamPage/Team";
import Shop from "./components/ShopPage/Shop";
import Tv from "./components/TvPage/Tv";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsArticle from "./components/NewsPage/NewsArticle";
import Header from "./components/Header/Header";
import MemberProfile from "./components/TeamPage/MemberProfile";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/walk" element={<WalkPage />} />
        <Route path="/team" element={<Team />} exact />
        <Route path="team/:userid" element={<MemberProfile />} />
        <Route path="tv" element={<Tv />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:articleId" element={<NewsArticle />} />

        {/* Enclosed in products context state */}

        <Route path="shop" element={<Shop />} />
        {/*  */}
      </Routes>
    </div>
  );
};

export default App;
