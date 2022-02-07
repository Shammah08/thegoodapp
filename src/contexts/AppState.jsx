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
    console.log("Initial State: ", { ...initialState });
    const localState = localStorage.getItem("localState");

    if (localState) {
      setAppState({ ...localState });
    } else {
      localStorage.setItem("localState", { ...initialState });
      setAppState({ ...initialState });
    }
    console.log("App State: ", appState);
    console.log("Local State: ", localState);

    return () => {};
  }, []);

  const [state, dispatch] = useReducer(AppReducer, initialState);

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
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
