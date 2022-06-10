import React from "react";
import { logos } from '../../resources/database';


const EpisodeCard = ({ episode, handleVideoChange }) => {
  return (
    <div className="episode-container"
      onClick={() => handleVideoChange(episode)}>
      {episode.snippet.liveBroadcastContent === "upcoming" ||
      episode.snippet.liveBroadcastContent === "live" ? (
        <img src={logos.logoRed} alt="" />
      ) : (
        <img src={episode.snippet.thumbnails.high.url} alt="" />
      )}
      <div className="episode-meta">
        <p>{episode.snippet.description}</p>
        <div className="date-data">
          <span>
            {new Date(episode.snippet.publishTime).toUTCString().slice(0, 16)}
          </span>

          {episode.snippet.liveBroadcastContent === "upcoming" ? (
            <button value={episode.snippet.title}>Premier </button>
          ) : (
            <button
              value={episode.snippet.title}
              onClick={() => handleVideoChange(episode)}
            >
              Watch
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
