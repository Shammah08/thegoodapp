import { useContext, useMemo } from "react";
import { youtubeContext } from "../../contexts/YoutubeState";
import Loader from '../Loader/Loader';

const Player = () => {
  const { activeVideo } = useContext(youtubeContext);
  const url = useMemo(
    () => {
return ` https://www.youtube.com/embed/${activeVideo.id?.videoId}?autoplay=1`;
      
    },
    [activeVideo],
  )
  
  return (
  
    <div className="player-container">
      <section className="video-player-container" id="#">
          <div className="player-section">
          {
            activeVideo.id ?          <iframe
            className="video-player"
            src={url}
            width="640"
            height="480"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
            :
            <Loader />
          
          }
        </div>
      </section>
    </div>
  
  );
};

export default Player;
