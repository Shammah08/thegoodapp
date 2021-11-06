import { useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import AppContext from "./app-context";

const AppState = (props) => {
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

  return (
    <AppContext.Provider
      value={{ activeUser: state.activeUser, setNav, setIsAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
