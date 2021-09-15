// Pod container
function Container({ episode }) {
  // console.log("EPISODE..", episode);

  return (
    <div className="episodes-container" key={episode.snippet.title}>
      <figure className="channel-episode" key={episode.snippet.title}>
      <img src={episode.snippet.thumbnails.high.url} alt="" />
      {/* <iframe
        src={"https://www.youtube.com/embed/" + episode.id.videoId + '?rel=0?version=3&autoplay=0'}
        width="1904"
        height="688"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
     ></iframe> */}
        <figcaption className="episode-details" key={episode.id.videoId}>
     <div>
     <h2>{episode.snippet.title.toUpperCase()} </h2>
          <p>{episode.snippet.description?episode.snippet.description: 'Click Below To Watch'}</p>
          <button className='btn-small'>Watch Now</button>
     </div>
          <span className='episode-meta' key={episode.id.videoId}><span>{episode.snippet.publishTime} | </span> <i>share</i> </span>
        </figcaption>
      </figure>
    </div>

  );
}

export default Container;
