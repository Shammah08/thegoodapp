import Button from './Button'
const LandingPage = () => {
  return (
    <div className="landing-section">
      <span className="landing-text">
      <h1>WE ARE THE GOOD COMPANY</h1>
        <p>a creative agency located in Nairobi , Kenya.</p>
        <button className="btn btn-default">about us</button>
        {/* <Button height='60px' width='250px' text='About Us' borderRadius='30px'  backgroundColor='rgb(1, 175, 239)' />
        <Button /> */}
      </span>
    </div>
  );
};

export default LandingPage;
