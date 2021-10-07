function Show({ match }) {
  const url = ` https://www.youtube.com/embed/${match.params.url}?autoplay=1`;

  return (
    <section className="video-player-container" id="#">
      <div className="video-player">
        <iframe
          src={url}
          width="640"
          height="480"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-text">
        <h1>{match.params.title}</h1>
        {/* <p>{match.params}</p> */}
      </div>
    </section>
  );
}

export default Show;
