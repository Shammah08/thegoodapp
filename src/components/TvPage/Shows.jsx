import { logos, shows } from "../database";
import ShowBadge from "./ShowBadge";
// import ShowsWrapper from "./ShowsWrapper";

const Shows = () => {
  return (
    <>
      {/* The Good TV Banner */}
      <section className="channels-section" id="shows">
        <div className="banner">
          <img src={logos.goodBanner} alt="" />
        </div>
      </section>

      {/* Channel Badges */}
      <div className="channel-badge-container">
        <div className="channel-badge-text">
          <h2>Podcasts & Mixes</h2>
        </div>

        <section className="channel-badges">
          {shows.map((show) => {
            return <ShowBadge show={show} key={Math.random() * 1000} />;
          })}
        </section>
      </div>
    </>
  );
};

export default Shows;
