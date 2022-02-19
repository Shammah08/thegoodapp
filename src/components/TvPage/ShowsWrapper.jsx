import { logos } from "../database";

const ShowsWrapper = ({ shows }) => {
  return (
    <div className='shows-wrapper' style={showsWrapperStyle}>
      <h3>The Mics Are Open</h3>

      <div className='shows' style={showStyle}>
        <div className='show-container' style={showsContainerStyle}>
          <div className='show'>
            <img src={logos.logoBlue} alt='' />

            <h3>The Mics Are Open #146 - The Price of Trust</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel
              veritatis magni debitis, assumenda sint ex quae temporibus
              voluptatibus quibusdam?
            </p>
          </div>

          <div className='show'>
            <img src={logos.logoBlue} alt='' />

            <h3>The Mics Are Open #146 - The Price of Trust</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel
              veritatis magni debitis, assumenda sint ex quae temporibus
              voluptatibus quibusdam?
            </p>
          </div>

          <div className='show'>
            <img
              src={logos.logoBlue}
              alt=''
              style={{ height: "50%", width: "100%", objectFit: "contain" }}
            />

            <h3>The Mics Are Open #146 - The Price of Trust</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel
              veritatis magni debitis, assumenda sint ex quae temporibus
              voluptatibus quibusdam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowsWrapper;

const showsWrapperStyle = {
  height: "40vh",
  width: "100vw",
  backroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const showStyle = {
  width: "100vw",
  backroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
};

const showsContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const show = {
  height: "300px",
  width: "250px",
  display: "flex",
  overflow: "hidden",
};
