import { logos } from '../../resources/database';
import Footer from "../../components/Footer/Footer";
import { useState, useCallback, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./form.scss";
import { auth } from "../../firebaseConfig";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = useCallback(() => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log({ user });
          // ...
        })
        .catch((error) => {
          console.log({ error });
        });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError({ errorCode, errorMessage });
      console.log({ error });
    }
  }, []);

  // useEffect(() => {}, []);

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <h3>Sign In</h3>

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
              type="email"
              placeholder="Enter Email"
              // value={email}
              // onChange={(event) => setEmail(event.currentTarget.value)}
              ref={emailRef}
              required
            />
            <input
              type="password"
              placeholder="Password"
              // value={password}
              ref={passwordRef}
              className="form-control"
              // onChange={(event) => setPassword(event.currentTarget.value)}
              required
            />
            {error && (
              <div>
                <strong style={{ color: "red" }}>{error.message}</strong>
              </div>
            )}

            <div className="button-group">
              <button type="button" className="btn" onClick={handleSignIn}>
                Sign In
              </button>
              <button type="button" className="btn">
                <FaGoogle className="icon" />
                Google Sign In
              </button>
            </div>
            <div className="form-footer">
              <h4>Don't have an account?</h4>
              <a href="/auth/signup">Register Now</a>
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

export default Login;
