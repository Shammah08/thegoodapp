function UserForm({ userOpen, setUserOpen }) {
  return (
    <section className={"user-details" + (userOpen ? " user-active" : "")}>
      <h3>Fill in your information to proceed to checkout.</h3>
      <form>
        <span>
          <h5>Username: </h5>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </span>{" "}
        <span>
          <h5>Phone: </h5>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </span>{" "}
        <span>
          <h5>Email: </h5>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            required
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
          <button
            type="button"
            className="btn"
            onClick={() => setUserOpen(false)}
          >
            Submit
          </button>
        </span>
      </form>
    </section>
  );
}

export default UserForm;
