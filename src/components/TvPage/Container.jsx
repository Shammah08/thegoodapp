import { logos } from "../database";

const Container = ({ episode, onClick }) => {
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
          <div className='episode-text'>
            <h2>{episode.snippet.title} </h2>
            {/* Check if premier video or not */}
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

            {episode.snippet.liveBroadcastContent === "upcoming" ? (
              <button
                className='btn-small'
                value={episode.snippet.title}
                onClick={() => onClick(episode)}>
                Set Reminder{" "}
              </button>
            ) : (
              <button
                className='btn-small'
                value={episode.snippet.title}
                onClick={() => onClick(episode)}>
                Watch Now{" "}
              </button>
            )}
          </div>
          <span className='episode-meta' key={episode.id.videoId}>
            <span>
              {/* UTC time conversion to string */}
              {new Date(episode.snippet.publishTime).toUTCString().slice(0, 16)}
            </span>{" "}
            <i>share</i>{" "}
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Container;
