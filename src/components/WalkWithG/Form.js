function Form() {
  return (
    <form >
      <div className="input-container">
        <h4>Name *</h4>
        <input type="text" placeholder="Your answer" className="input-text" required/>
      </div>

      <div className="input-container">
        <h4>Sex *</h4>

        <input type="radio" id="female" name="female" value="female" />
        <label htmlFor="female">Female</label>

        <input type="radio" id="male" name="male" value="male" />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          id="not-to-say"
          name="not-to-say"
          value="not-to-say"
        />
        <label htmlFor="age3">Prefer not to say</label>
      </div>
      <div className="input-container">
        <h4>Please select your age*</h4>
        <input type="radio" id="age1" name="age" value="30" />
        <label htmlFor="age1">10 - 20</label>
        <input type="radio" id="age2" name="age" value="60" />
        <label htmlFor="age2">20 - 30</label>
        <input type="radio" id="age3" name="age" value="100" />
        <label htmlFor="age3">30 - 40</label>
      </div>

      <div className="input-container">
        <h4>How did you hear about Walk with G</h4>
        <input type="radio" id="age1" name="age" value="30" />
        <label htmlFor="age1">Social media </label>

        <input type="radio" id="age2" name="age" value="60" />
        <label htmlFor="age2">From friends</label>

        <input type="radio" id="age3" name="age" value="100" />
        <label htmlFor="age3">Other</label>
      </div>

      <div className="input-container">
        <h4>How likely are you to bring a friend to the event?</h4>
        <input type="radio" id="age1" name="age" value="30" />
        <label htmlFor="age1">Very likely</label>

        <input type="radio" id="age2" name="age" value="60" />
        <label htmlFor="age2">Some what likely</label>

        <input type="radio" id="age3" name="age" value="100" />
        <label htmlFor="age3">Not so likely</label>

        <input type="radio" id="age3" name="age" value="100" />
        <label htmlFor="age3">Other</label>
      </div>

      <div className='input-container'>
            <h4>Email *</h4>
            <input type="email"  placeholder='Your answer' className='input-text' required/>
            </div>

            <div className='input-container'>
            <h4>Phone-number *</h4>
            <input type="text"  placeholder='Your answer' className='input-text' required/>
            </div>
      <input type="submit" value="Submit" className="btn" />
    </form>
  );
}

export default Form;
