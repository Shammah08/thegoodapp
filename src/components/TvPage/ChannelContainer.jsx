import { logos } from "../database";
import { Link } from "react-router-dom";

const ChannelContainer = ({ shows, onClick }) => {
  return (
    <>
      {/* The Good TV Banner */}
      <section className='channels-section'>
        <div className='banner'>
          <img src={logos.goodBanner} alt='' />
        </div>

        {/* Channel Cards */}
        <section className='cards' key={Math.random * 100}>
          {shows.map((show) => {
            return (
              <div className='show-card' key={show.id}>
                <h1
                  className='show-name'
                  onClick={onClick}
                  title={`${show.title}`}>
                  {show.title}
                </h1>
                <div className='show-details' key={Math.random * 100}>
                  <span>
                    {show.hosts.map((link) => {
                      return (
                        <Link to={"team/" + link.id}>
                          <h3 key={link.name}>{link.name} </h3>
                        </Link>
                      );
                    })}
                  </span>
                  <strong>{show.tagline}</strong>
                </div>
                */
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default ChannelContainer;
