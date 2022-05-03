import { useEffect, useState, useCallback, useMemo } from "react";
import YoutubeContext from "./youtube-context";
import YTPage1 from "../yt.res.pg1.json";

import YTPage2 from "../yt.res.pg2.json";
import YTPage3 from "../yt.res.pg3.json";
import YTPage4 from "../yt.res.pg4.json";
import YTPage5 from "../yt.res.pg5.json";
import YTPage6 from "../yt.res.pg6.json";

// youtube API config
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // SR-Key
const channelID = process.env.REACT_APP_CHANNEL_ID; //TGC
const videoCount = 50;
const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

const YoutubeState = (props) => {
  const [videos, setVideos] = useState([]);
  const allVideos = useMemo(() => {
    const data = [
      ...YTPage1.items,
      ...YTPage2.items,
      ...YTPage3.items,
      ...YTPage4.items,
      ...YTPage5.items,
      ...YTPage6.items,
    ];

    return data;
  }, []);

  const fetchLocalData = useCallback(() => {
    console.log("Setting local videos...");

    setVideos(allVideos);
  }, []);

  const fetchData = useCallback(async () => {
    let response = await fetch("url" + "yt");
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      return fetchLocalData();
    }
    const data = await response.json();

    setVideos(data.items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData().catch((error) => {
      console.log("The Following Error Occurred (YT-Func): ", error.message);
      fetchLocalData();
      return;
    });

    // eslint-disable-next-line
  }, []);

  return (
    <YoutubeContext.Provider
      value={{
        allVideos: videos,
      }}
    >
      {props.children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeState;
