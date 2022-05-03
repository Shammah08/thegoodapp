import React from "react";
import Player from "./Player";

const ChannelHome = ({ tab, video, episodes, handleVideoChange }) => {
  return (
    <div
      className="channel-home"
      style={{
        display: tab === "Home" ? "flex" : "none",
      }}
    >
      <Player video={video} />

      <div className="now-playing-container">
        {video.snippet && (
          <div className="now-playing">
            <h2>Now Playing</h2>
            <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
            <h4>{video?.snippet?.title}</h4>
          </div>
        )}

        <div className="coming-up">
          <h2>Suggested Videos</h2>
          {episodes
            .filter((episode) => episode.id !== video.id)
            .map((episode) => {
              return (
                <div
                  className="channel-tag"
                  onClick={() => handleVideoChange(episode)}
                >
                  <img
                    src={episode.snippet.thumbnails.high.url}
                    alt="Channel Badge"
                  />

                  <h4>{episode.snippet.title}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChannelHome;
