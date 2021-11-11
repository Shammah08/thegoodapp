import "./tv.scss";
import "./Tv.media.css";
import AllVideos from "./AllVideos.jsx";
import ChannelContainer from "./ChannelContainer";
import { useState } from "react";
import { shows } from "../database";
import YoutubeState from "../../contexts/YoutubeState";


const Tv = () => {
  // const [allVideos, setAllVideos] = useState([]);
  const [displayVideos, setDisplayVideos] = useState([]);

 

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
        <ChannelContainer shows={shows} onClick={handleClick} />
        <AllVideos videos={displayVideos} />
      </section>
    </YoutubeState>
  );
};

export default Tv;
