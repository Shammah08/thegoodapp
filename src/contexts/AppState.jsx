import { useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import AppContext from "./app-context";
// import { productsImages } from "../components/database";

const AppState = (props) => {
  //   const [isAuth, setisAuth] = useState(false);
  //   const [navActive, setNavActive] = useState(false);
  const initialState = {
    activeUser: { auth: false, activeLink: "welcome" },
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setNav = (route) => {
    dispatch({ type: "NAVIGATE", payload: route });
  };
  const setIsAuth = () => {
    dispatch({ type: "LOG IN" });
  };
  const greetings = "Hello from App";

  return (
    <AppContext.Provider
      value={{ activeUser: state.activeUser, setNav, setIsAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

