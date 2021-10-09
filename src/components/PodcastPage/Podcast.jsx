import "./Podcast.css";
import "./Podcast.media.css";
import RecentVideo from "./RecentVideo";
import ChannelContainer from "./ChannelContainer";
import { useState, useEffect } from "react";
import { shows } from "../database";

function Podcast() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // SR-Key
  const channelID = "UC7h4tUtdH0L06sDZVmBMc4Q"; //TGC
  const videoCount = 150;

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

  const [allVideos, setAllVideos] = useState([]);
  const [displayVideos, setDisplayVideos] = useState([]);

  useEffect(() => {
    console.log("FETCHING VIDEOS");
    fetchData().catch(
      (error) => {
        console.log("The Following Error Occurred", error.message);
        return;
      }
      // ,      [allVideos]
    );

    return () => {
      // setDisplayVideos(allVideos);
      console.log("VIDEO FETCH COMPLETE");
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
    console.log("All Videos", allVideos);
    const name = e.target.alt.slice(0, 5);
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
      <RecentVideo videos={displayVideos} />
    </>
  );
}

export default Podcast;
