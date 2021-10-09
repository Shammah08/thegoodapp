import { useState } from "react";

function UserForm({ userOpen, setUserOpen, setUserDetails }) {
  const [details, setDetails] = useState([]);
  // const usernameRef = useRef('');
  // const phoneRef = useRef('');
  // const emailRef = useRef('');
  // console.log(usernameRef, emailRef, phoneRef);

  const handleClick = () => {
    // setDetails({ usernameRef.current, phoneRef, emailRef });
    setUserDetails(details);
    console.log("User Details: ", details);
  };
  return (
    <section className={"user-details" + (userOpen ? " user-active" : "")}>
      <h3>Fill in your information to proceed to checkout.</h3>
      <form>
        <span>
          <h5>Username: </h5>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={(e) => {
              return setDetails({ ...details, username: e.target.value });
            }}
            required
          />
        </span>{" "}
        <span>
          <h5>Phone: </h5>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            onChange={(e) => {
              return setDetails({
                ...details,
                phone: e.target.value,
              });
            }}
            required
          />
        </span>{" "}
        <span>
          <h5>Email: </h5>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              return setDetails({
                ...details,
                email: e.target.value,
              });
            }}
          />
        </span>{" "}
        <span>
          {" "}
          <button
            type="button"
            className="btn"
            onClick={() => setUserOpen(!userOpen)}
          >
            Cancel
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            Submit
          </button>
        </span>
      </form>
    </section>
  );
}

export default UserForm;
