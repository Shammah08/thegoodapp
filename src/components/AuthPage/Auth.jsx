import React from "react";
import { useParams } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const { authAction } = useParams();

  if (authAction === "login") {
    return <Login />;
  }
  if (authAction === "signup") {
    return <SignUp />;
  }
  return;
};

export default Auth;
