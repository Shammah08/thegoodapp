import { useEffect, useState } from "react";
import YoutubeContext from "./youtube-context";

// youtube API config
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY_BACKUP; // SR-Key
const channelID = process.env.REACT_APP_CHANNEL_ID; //TGC
const videoCount = 50;
const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

const YoutubeState = (props) => {
  const [Videos, setVideos] = useState([]);

  const initialState = {
    allVideos: [],
  };

  useEffect(() => {
    fetchData().catch((error) => {
      console.log("The Following Error Occurred", error.message);
      return;
    });

    return () => {};
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // set allVideos Initial state
    initialState.allVideos = data.items;
    setVideos(initialState.allVideos);
  };

  return (
    <YoutubeContext.Provider
      value={{
        allVideos: Videos,
      }}>
      {props.children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeState;
