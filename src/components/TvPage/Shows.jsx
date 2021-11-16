import { logos, shows } from "../database";

const Shows = ({ setfilteredVideos }) => {
  return (
    <>
      {/* The Good TV Banner */}
      <section className='channels-section' id='shows'>
        <div className='banner'>
          <img src={logos.goodBanner} alt='' />
        </div>

        {/* Channel Cards */}
        <section className='cards' key={Math.random * 100}>
          {shows.map((show) => {
            return (
              <div className='show-card' key={show.id} title={show.title}>
                <img
                  src={show.logo ? show.logo : show.cover}
                  alt={show.title}
                  onClick={() => setfilteredVideos(show.title)}
                />
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Shows;
