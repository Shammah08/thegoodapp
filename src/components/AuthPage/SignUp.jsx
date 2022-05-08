import React from "react";
import { logos } from "../database";
import Footer from "../Footer/Footer";
import { useState } from "react";
import "./form.scss";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log({ username, password });
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <h3>Register to be Good Company</h3>

          <form
            style={{
              height: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",

              border: "none",
            }}
          >
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="form-control"
              onChange={(event) => setPassword(event.currentTarget.value)}
              required
            />
            <div className="button-group">
              <button type="button" className="btn">
                Register
              </button>
              <button type="button" className="btn">
                <FaGoogle />
                Register with Google
              </button>
            </div>
            <div className="form-footer">
              By clicking Register, you accept our Terms of Use. Find out about
              our Privacy and Cookies Policy.
            </div>
            <div className="form-footer">
              <h4>Already have an account?</h4>
              <a href="/auth/login">Sign In</a>
            </div>
          </form>
        </div>
        <div className="auth-poster">
          <img src={logos.logoRed} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
