import "./tv.scss";

import Shows from "./Shows";

import ShowsContainer from "./ShowsContainer";
import { shows } from '../../resources/database';
import { Fragment } from "react";
import TvHeader from "./TvHeader";

const Tv = () => {
  return (
      <section className="podcast-container">
    <TvHeader />
          
          <Shows />
          {shows.map((show) => {
              return (
                  <Fragment key={'show' + Math.random() * 1000}>
                      <ShowsContainer show={show} key={show.id} />
                  </Fragment>
              )
          })}
      </section>
  )
};

export default Tv;