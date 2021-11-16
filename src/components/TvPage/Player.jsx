import RelatedVideos from "./RelatedVideos";
import { FaChevronLeft } from "react-icons/fa";

const Player = ({ episode, setActiveWindow, activeWindow }) => {
  const url = ` https://www.youtube.com/embed/${episode.id.videoId}?autoplay=1`;
  return (
    <section className='video-player-container' id='#'>
      <span onClick={() => setActiveWindow(!activeWindow)}>
        <FaChevronLeft className='icon' />
        <strong>Back</strong>
      </span>
      <div className='player-section'>
        <iframe
          className='video-player'
          src={url}
          width='640'
          height='480'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>

        <div className='video-text'>
          <h1>{episode.snippet.title}</h1>
          <p>
            {episode.snippet.description ? episode.snippet.description : ""}
          </p>
        </div>
      </div>
      {/* Related Videos */}
      <RelatedVideos title={episode.snippet.title} />
    </section>
  );
};

export default Player;
