import "./tv.scss";

import Shows from "./Shows";

import ShowsContainer from "./ShowsContainer";
import { shows } from "../database";

const Tv = () => {
  return (
    <section className="podcast-container">
      <Shows />
      {shows.map((show) => {
        return (
          <>
            <ShowsContainer show={show} key={show.id} />
          </>
        );
      })}
    </section>
  );
};

export default Tv;
