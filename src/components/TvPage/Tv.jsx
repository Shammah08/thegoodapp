import "./Tv.scss";
import "./Tv.media.css";
import AllVideos from "./AllVideos.jsx";
import ChannelContainer from "./ChannelContainer";
import { useState, useEffect } from "react";
import { shows } from "../database";

function Tv() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY_BACKUP; // SR-Key
  const channelID = process.env.REACT_APP_CHANNEL_ID; //TGC
  const videoCount = 50;

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;
  const [allVideos, setAllVideos] = useState([]);
  const [displayVideos, setDisplayVideos] = useState([]);

  useEffect(() => {
    console.log("FETCHING");
    fetchData().catch((error) => {
      console.log("The Following Error Occurred", error.message);
      return;
    });

    return () => {
      console.log("COMPLETE");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setAllVideos(data.items);
    setDisplayVideos(data.items);
  };

  const handleClick = (e) => {
    setDisplayVideos(allVideos);
    const name = e.target.title.slice(0, 5);
    let filteredVideos;
    if (!allVideos === false) {
      filteredVideos = allVideos.filter((episode) => {
        const title = episode.snippet.title.slice(0, 10);
        return title.includes(name);
      });
    } else {
      filteredVideos = allVideos;
      return filteredVideos;
    }
    setDisplayVideos(filteredVideos);
  };

  return (
    <>
      <ChannelContainer shows={shows} onClick={handleClick} />
      <AllVideos videos={displayVideos} />
    </>
  );
}

export default Tv;
