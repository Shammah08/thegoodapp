import { logos } from "../database";
import ShowCards from "./ShowCards";
// import ShowsWrapper from "./ShowsWrapper";

const Shows = ({ setFilterTitle, setActiveWindow }) => {
  const handleClick = (title) => {
    setFilterTitle(title);

    // Return to main window
    setActiveWindow(true);
  };
  return (
    <>
      {/* The Good TV Banner */}
      <section className='channels-section' id='shows'>
        <div className='banner'>
          <img src={logos.goodBanner} alt='' />
        </div>
      </section>

      {/* Channel Cards */}
      <ShowCards handleClick={handleClick} />
    </>
  );
};

export default Shows;
