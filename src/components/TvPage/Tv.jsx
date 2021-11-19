import "./Tv.scss";
import Youtube from "./Youtube";
import Shows from "./Shows";
import { useState } from "react";
import YoutubeState from "../../contexts/YoutubeState";

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
        <Youtube
          filterTitle={filterTitle}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      </section>
    </YoutubeState>
  );
};

export default Tv;
