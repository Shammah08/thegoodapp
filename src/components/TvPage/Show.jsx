const Show = ({ episode }) => {
  console.log(episode);
  // const url = ` https://www.youtube.com/embed/${episode.id.videoId}?autoplay=1`;
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, cupiditate minima dicta aperiam repellat illo non odio voluptates autem eaque deserunt assumenda maxime nam atque velit iure aut a perferendis sed ipsa soluta vitae. Magnam culpa atque vitae possimus eligendi, sequi in doloremque recusandae optio odio, vel ullam porro accusantium voluptatum!";
  const vids = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className='video-player-container' id='#'>
      <div className='player-section'>
        <iframe
          className='video-player'
          // src={url}
          width='640'
          height='480'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>

        <div className='video-text'>
          {/* <h1>{episode.snippet.title}</h1> */}
          <p>{text}</p>
        </div>
      </div>

      {/* Related Videos */}
      <div className='related-videos'>
        {vids.map((vid) => (
          <div className='video' key={vid}>
            <img src='' alt='' />
            {/* <h2>{match.params.title}</h2> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Show;
