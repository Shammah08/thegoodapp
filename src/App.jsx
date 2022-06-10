import { useContext, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { appContext } from "./contexts/AppState";
import LandingPage from "./pages/LandingPage/LandingPage";
import WalkPage from "./pages/WalkWithG/WalkPage";
import Team from "./pages/TeamPage/Team";
import Shop from "./pages/ShopPage/Shop";
import Tv from "./pages/TvPage/Tv";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsArticle from "./pages/NewsPage/NewsArticle";
// import Header from "./components/Header/Header";
import MemberProfile from "./pages/TeamPage/MemberProfile";
import Channel from "./pages/TvPage/Channel";
import Auth from "./pages/AuthPage/Auth";
import "./app.scss";
// import "./global.scss";

const App = () => {
  const { checkAuth } = useContext(appContext);

  // const router = useNavigate();
  const redirectIfNotAuth = useCallback(() => {
    checkAuth();

    // if (!activeUser.auth) {
    //   router("/auth/login");
    // }

    return;
  }, [checkAuth]);

  useEffect(() => {
    redirectIfNotAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
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
