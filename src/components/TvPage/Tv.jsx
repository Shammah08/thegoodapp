import "./tv.scss";

import Shows from "./Shows";

import YoutubeState from "../../contexts/YoutubeState";
import ShowsContainer from "./ShowsContainer";
import { shows } from "../database";

const Tv = () => {
  return (
    <YoutubeState>
      <section className="podcast-container">
        <Shows />
        {shows.map((show) => {
          return <ShowsContainer show={show} />;
        })}
      </section>
    </YoutubeState>
  );
};

export default Tv;
