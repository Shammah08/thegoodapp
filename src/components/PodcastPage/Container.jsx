import { Link } from "react-router-dom";
import { logos } from "../database.jsx";
// Pod container

function Container({ episode }) {
  return (
    <div className='episodes-container' key={episode.snippet.title}>
      <figure className='channel-episode' key={episode.snippet.title}>
        {episode.snippet.liveBroadcastContent === "upcoming" ||
        episode.snippet.liveBroadcastContent === "live" ? (
          <img src={logos.logoRed} alt='' />
        ) : (
          <img src={episode.snippet.thumbnails.high.url} alt='' />
        )}

        <figcaption className='episode-details' key={episode.id.videoId}>
          <div>
            <h2>{episode.snippet.title.toUpperCase()} </h2>

            {episode.snippet.liveBroadcastContent === "upcoming" ? (
              <p>
                This is a premier video <br />
                Click below to set reminder
              </p>
            ) : (
              <p>
                {episode.snippet.description
                  ? episode.snippet.description
                  : "Click Below To Watch"}
              </p>
            )}

            <Link
              to={`/show/${episode.id.videoId}/${episode.snippet.title}/${episode.snippet.description}`}>
              {episode.snippet.liveBroadcastContent === "upcoming" ? (
                <button className='btn-small' value={episode.snippet.title}>
                  Set Reminder{" "}
                </button>
              ) : (
                <button className='btn-small' value={episode.snippet.title}>
                  Watch Now{" "}
                </button>
              )}
            </Link>
          </div>
          <span className='episode-meta' key={episode.id.videoId}>
            <span>{episode.snippet.publishTime} | </span> <i>share</i>{" "}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default Container;
