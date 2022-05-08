import "./app.scss";
import "./global.scss";
import { appContext } from "./contexts/AppState";
import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import WalkPage from "./components/WalkWithG/WalkPage";
import Team from "./components/TeamPage/Team";
import Shop from "./components/ShopPage/Shop";
import Tv from "./components/TvPage/Tv";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsArticle from "./components/NewsPage/NewsArticle";
import Header from "./components/Header/Header";
import MemberProfile from "./components/TeamPage/MemberProfile";
import Auth from "./components/AuthPage/Auth";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { checkAuth, activeUser } = useContext(appContext);
  const [loading, setLoading] = useState(true);

  const router = useNavigate();
  const redirectIfNotAuth = useCallback(() => {
    setLoading(true);

    checkAuth();

    if (!activeUser.auth) {
      router("/auth/login");
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return;
  }, [activeUser, checkAuth, router]);

  useEffect(() => {
    redirectIfNotAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      {loading && <Loader />}
      <Routes>
        {activeUser?.auth && (
          <>
            <Route path="/" element={<LandingPage />} />

            <Route path="/walk" element={<WalkPage />} />
            <Route path="/team" element={<Team />} exact />
            <Route path="team/:userid" element={<MemberProfile />} />
            <Route path="tv" element={<Tv />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:articleId" element={<NewsArticle />} />
            <Route path="shop" element={<Shop />} />
          </>
        )}
        <Route path="/auth/:authAction" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
