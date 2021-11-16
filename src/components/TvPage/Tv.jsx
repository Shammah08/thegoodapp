import "./tv.scss";
import Youtube from "./Youtube";
import Shows from "./Shows";
import { useState } from "react";
import YoutubeState from "../../contexts/YoutubeState";

const Tv = () => {
  const [filteredVideos, setfilteredVideos] = useState("");
  console.log("Filter", filteredVideos);

  return (
    <YoutubeState>
      <section className='podcast-container'>
        <Shows setfilteredVideos={setfilteredVideos} />
        <Youtube filteredVideos={filteredVideos} />
      </section>
    </YoutubeState>
  );
};

export default Tv;
