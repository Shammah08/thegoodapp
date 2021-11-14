import "./tv.scss";
import Youtube from "./Youtube";
import Shows from "./Shows";
import { useState } from "react";
import YoutubeState from "../../contexts/YoutubeState";

const Tv = () => {
  // const [allVideos, setAllVideos] = useState([]);
  // Filter videos based on title
  const handleClick = (e) => {
    // setDisplayVideos(allVideos);
    // const name = e.target.title.slice(0, 5);
    // let filteredVideos;
    // if (!allVideos === false) {
    //   filteredVideos = allVideos.filter((episode) => {
    //     const title = episode.snippet.title.slice(0, 10);
    //     return title.includes(name);
    //   });
    // } else {
    //   filteredVideos = allVideos;
    //   return filteredVideos;
    // }
    // setDisplayVideos(filteredVideos);
  };

  return (
    <YoutubeState>
      <section className='podcast-container'>
        <Shows onClick={handleClick} />
        <Youtube />
      </section>
    </YoutubeState>
  );
};

export default Tv;
