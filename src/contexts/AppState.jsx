import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useCallback,
} from "react";
import AppReducer from "../reducers/AppReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const appContext = createContext();

const AppState = (props) => {
  const [appState, setAppState] = useState({});
  const initialState = {
    auth: false,
    activeLink: "welcome",
    userDetails: {},
  };
  const [state, dispatch] = useReducer(AppReducer, appState);

  useEffect(() => {
    // const localState = localStorage.getItem("localState");

    // if (localState) {
    //   setAppState({ ...localState });
    // } else {
    // localStorage.setItem("localState", { ...initialState });
    setAppState({ ...initialState });
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAppState({ ...appState, auth: true });
        localStorage.setItem("authUser", user);

        setIsAuth(true);
        setUserDetails({
          username: user?.displayName,
          email: user?.email,
          phone: user?.phoneNumber,
        });

        return user;
      } else {
        console.log("No active user.");
        localStorage.removeItem("authUser");

        return undefined;
      }
    });
  }, [appState]);

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
    <appContext.Provider
      value={{
        activeUser: state,
        setNav,
        setIsAuth,
        setUserDetails,
        checkAuth,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default AppState;
