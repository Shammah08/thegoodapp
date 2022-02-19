import "./Tv.scss";
import Youtube from "./Youtube";
import Shows from "./Shows";
import { useState } from "react";
import YoutubeState from "../../contexts/YoutubeState";
import ShowsWrapper from "./ShowsWrapper";

const Tv = () => {
  const [filterTitle, setFilterTitle] = useState("");
  const [activeWindow, setActiveWindow] = useState(true);

  return (
    <YoutubeState>
      <section className='podcast-container'>
        <Shows
          setFilterTitle={setFilterTitle}
          setActiveWindow={setActiveWindow}
        />

        <ShowsWrapper />
      </section>
    </YoutubeState>
  );
};

export default Tv;

// <Youtube
//   filterTitle={filterTitle}
//   activeWindow={activeWindow}
//   setActiveWindow={setActiveWindow}
// />;
