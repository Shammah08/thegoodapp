import { useState, useContext } from "react";
import YoutubeState from "../../contexts/youtube-context";

const RelatedVideos = ({ title }) => {
  const { allVideos } = useContext(YoutubeState);
  //   filter related videos
  const filteredVideos = allVideos.filter((video) => {
    const showName = video.snippet.title.slice(0, 10);
    return showName.includes(title.slice(0, 10));
  });

  return (
    <div className='related-videos'>
      {filteredVideos.map((video) => (
        <div className='video' key={video}>
          <img src={video.snippet.thumbnails.high.url} alt='' />
          <h2>{video.snippet.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
