import { useState, useContext } from "react";
import { appContext } from "../../contexts/AppState";

const UserForm = ({ userOpen, setUserOpen }) => {
  const [details, setDetails] = useState({});
  const { setIsAuth, setUserDetails } = useContext(appContext);

  const handleClick = () => {
    setUserDetails(details);
    setUserOpen(!userOpen);
    setIsAuth(true);
  };

  return (
    <section className={"user-details" + (userOpen ? " user-active" : "")}>
      <form>
        <h3>Fill in your information to proceed to checkout.</h3>
        <span>
          <h5>Full name: </h5>
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
};

export default UserForm;
