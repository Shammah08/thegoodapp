import "./app.scss";
import "./global.scss";
import { appContext } from "./contexts/AppState";
import { useContext, useEffect, useState, useCallback } from "react";
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
import Channel from "./components/TvPage/Channel";
import Auth from "./components/AuthPage/Auth";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { checkAuth } = useContext(appContext);
  const [loading, setLoading] = useState(true);

  // const router = useNavigate();
  const redirectIfNotAuth = useCallback(() => {
    setLoading(true);

    checkAuth();

    // if (!activeUser.auth) {
    //   router("/auth/login");
    // }

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return;
  }, [checkAuth]);

  useEffect(() => {
    redirectIfNotAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      {loading && <Loader />}
      {true && (
        <Routes>
          <>
            <Route path="/" element={<LandingPage />} />

            <Route path="/walk" element={<WalkPage />} />
            <Route path="/team" element={<Team />} exact />
            <Route path="team/:userid" element={<MemberProfile />} />
            <Route path="tv" element={<Tv />} />
            <Route path="tv/channel/:channelId" element={<Channel />} />
            <Route
              path="tv/channel/:channelId/:videoId"
              element={<Channel />}
            />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:articleId" element={<NewsArticle />} />
            <Route path="shop" element={<Shop />} />
          </>
          <Route path="/auth/:authAction" element={<Auth />} />

          {/*  */}
        </Routes>
      )}
    </div>
  );
};

export default App;
