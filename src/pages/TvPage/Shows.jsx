import { shows } from '../../resources/database';
import ShowBadge from "./ShowBadge";
// import ShowsWrapper from "./ShowsWrapper";

const Shows = () => {
  return (
    
      <div className="channel-badge-container">
        <div className="channel-badge-text">
          <h2>Podcasts & Music</h2>
        </div>

        <section className="channel-badges">
          {shows.map((show) => {
            return <ShowBadge show={show} key={Math.random() * 1000} />;
          })}
        </section>
      </div>
  
  );
};

export default Shows;
