import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "thegoodapp-84aea",
  storageBucket: "thegoodapp-84aea.appspot.com",
  messagingSenderId: "158300570762",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-M2M75380FL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
