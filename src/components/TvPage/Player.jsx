const Player = ({ video }) => {
  const url = ` https://www.youtube.com/embed/${video?.id?.videoId}?autoplay=1`;
  return (
    <div className="player-container">
      <section className="video-player-container" id="#">
        <div className="player-section">
          <iframe
            className="video-player"
            src={url}
            width="640"
            height="480"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default Player;
