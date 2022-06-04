// import { useEffect, useContext } from "react";
import { logEvent } from "firebase/analytics";

// import { appContext } from "../../contexts/AppState";
import { analytics } from "../../firebaseConfig";

const useAnalytics = () => {
  // const { activeUser } = useContext(appContext);

  const eventLogger = (event, user) => {
    console.log({ event, user });
    const response = logEvent(analytics, event, user);
    logEvent(analytics, "screen_view", {
      firebase_screen: event,
      firebase_screen_class: user,
    });
    console.log({ response, analytics });
  };

  // console.log(analytics);

  // useEffect(() => {
  // }, []);

  return { analytics, eventLogger };
};

export default useAnalytics;
