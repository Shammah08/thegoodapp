import { logos } from "../database";

const ShowCard = ({ episode, show }) => {
  if (episode) {
    return (
      <figure className="show-card" key={episode.snippet.title}>
        <a href={`/tv/channel/${show.id}/${episode.id.videoId}`}>
          {episode.snippet.liveBroadcastContent === "upcoming" ||
          episode.snippet.liveBroadcastContent === "live" ? (
            <img src={logos.logoRed} alt="" />
          ) : (
            <img src={episode.snippet.thumbnails.high.url} alt="" />
          )}

          <figcaption className="show-details" key={episode.id.videoId}>
            <div className="show-text">
              <h2>{episode.snippet.title} </h2>
              {/* Check if premier video or not */}
            </div>
            <span className="show-meta" key={episode.id.videoId}>
              <span>
                {/* UTC time conversion to string */}
                {new Date(episode.snippet.publishTime)
                  .toUTCString()
                  .slice(0, 16)}
              </span>{" "}
              <i>share</i>{" "}
            </span>
          </figcaption>
        </a>
      </figure>
    );
  }

  return (
    <div
      style={{
        minWidth: "100vw",
        height: "20vh",
        backgroundColor: "#c4c5c580",
      }}
    >
      <h1 className="redirect-title">
        VISIT{" "}
        <a
          href="https://www.youtube.com/user/TheGMONEYTV"
          target="_blank"
          rel="noreferrer"
        >
          THE GOOD COMPANY KE{" "}
        </a>
        YOUTUBE CHANNEL FOR MORE.
      </h1>
    </div>
  );
};

export default ShowCard;
