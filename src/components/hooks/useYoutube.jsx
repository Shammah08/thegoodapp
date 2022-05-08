import { useState, useEffect, useContext } from "react";
import { youtubeContext } from "../../contexts/YoutubeState";

const useYoutube = (showName) => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const { allVideos } = useContext(youtubeContext);

  const data = allVideos?.filter((video) => {
    const title = video.snippet.title.slice(0, 10);

    return title.includes(showName.slice(0, 8));
  });

  useEffect(() => {
    setFilteredVideos(data);
  }, [data]);

  return [filteredVideos];
};

export default useYoutube;
