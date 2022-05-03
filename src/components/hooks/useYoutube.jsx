import { useState, useEffect, useContext } from "react";
import youtubeContext from "../../contexts/youtube-context";

const useYoutube = (showName) => {
  const [channelVideos, setChannelVideos] = useState([]);
  const { allVideos } = useContext(youtubeContext);

  const data = allVideos?.filter((video) => {
    const title = video.snippet.title.slice(0, 10);

    return title.includes(showName.slice(0, 6));
  });

  useEffect(() => {
    setChannelVideos(data);
    // console.log({ allVideos });
  }, [data]);
  // console.log("Using Youtube", showName);
  // console.log("Channel Videos", channelVideos);

  return [channelVideos];
};

export default useYoutube;
