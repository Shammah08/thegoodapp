import { useState, useEffect, useContext, useMemo } from "react";
import { youtubeContext } from "../contexts/YoutubeState";

const useYoutube = (showName) => {
  const [channelVideos, setChannelVideos] = useState([]);
  const { allVideos } = useContext(youtubeContext);

  const data = useMemo(
    () =>
      allVideos?.filter((video) => {
        const title = video.snippet.title.slice(0, 10);

        return title.includes(showName.slice(0, 6));
      }),
    [allVideos, showName]
  );

  useEffect(() => {
    setChannelVideos(data);
  }, [data]);

  return [channelVideos];
};

export default useYoutube;
