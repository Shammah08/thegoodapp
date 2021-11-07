import { useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import AppContext from "./app-context";

const AppState = (props) => {
  const initialState = {
    auth: false,
    activeLink: "welcome",
    userDetails: {},
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setNav = (route) => {
    dispatch({ type: "NAVIGATE", payload: route });
  };
  const setIsAuth = (status) => {
    console.log("Log in attempt: ", status);
    dispatch({ type: "AUTH", payload: status });
  };
  const setUserDetails = ({ username, phone, email }) => {
    dispatch({ type: "SET USER DETAILS", payload: { username, phone, email } });
  };
  // console.log("State Context: ", state);

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
