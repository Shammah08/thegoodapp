import { useReducer, useEffect, useState } from "react";
import AppReducer from "../reducers/AppReducer";
import AppContext from "./app-context";

const AppState = (props) => {
  const [appState, setAppState] = useState({});
  const initialState = {
    auth: false,
    activeLink: "welcome",
    userDetails: {},
  };

  useEffect(() => {
    const localState = localStorage.getItem("localState");

    if (localState) {
      setAppState({ ...localState });
    } else {
      localStorage.setItem("localState", { ...initialState });
      setAppState({ ...initialState });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [state, dispatch] = useReducer(AppReducer, appState);

  const setNav = (route) => {
    dispatch({ type: "NAVIGATE", payload: route });
  };
  const setIsAuth = (status) => {
    dispatch({ type: "AUTH", payload: status });
  };
  const setUserDetails = ({ username, phone, email }) => {
    dispatch({ type: "SET USER DETAILS", payload: { username, phone, email } });
  };

  return (
    <AppContext.Provider
      value={{
        activeUser: state,
        setNav,
        setIsAuth,
        setUserDetails,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
