import {
  useEffect,
  useState,
  useCallback,
  createContext,
  useMemo,
} from "react";

import YTPage1 from '../resources/yt.res.pg1.json'

import YTPage2 from "../resources/yt.res.pg2.json"
import YTPage3 from '../resources/yt.res.pg3.json'
import YTPage4 from '../resources/yt.res.pg4.json'
import YTPage5 from '../resources/yt.res.pg5.json'
import YTPage6 from '../resources/yt.res.pg6.json'

// youtube API config
// const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // SR-Key
// const channelID = process.env.REACT_APP_CHANNEL_ID; //TGC
// const videoCount = 50;
// const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

export const youtubeContext = createContext();
const YoutubeState = ({children}) => {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState({});
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
  }, [allVideos]);

  const fetchData = useCallback(async () => {
    let response = await fetch("url");
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
    <youtubeContext.Provider
      value={{
        allVideos: videos,
        activeVideo,setActiveVideo
      }}
    >
      {children}
    </youtubeContext.Provider>
  );
};

export default YoutubeState;
