import "./tv.scss";

import Shows from "./Shows";

import ShowsContainer from "./ShowsContainer";
import { shows } from "../database";
import { Fragment } from "react";

const Tv = () => {
  return (
    <section className="podcast-container">
      <Shows />
      {shows.map((show) => {
        return (
          <Fragment key={"show" + Math.random() * 1000}>
            <ShowsContainer show={show} key={show.id} />
          </Fragment>
        );
      })}
    </section>
  );
};

export default Tv;