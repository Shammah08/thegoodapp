import Container from "./Container";
import Player from "./Player";
import YoutubeContext from "../../contexts/youtube-context";
import { useState, useContext, useEffect } from "react";

const Youtube = () => {
  const [activeWindow, setActiveWindow] = useState(true);
  const [activeVideo, setActiveVideo] = useState({});
  const [displayVideos, setDisplayVideos] = useState([]);

  const { allVideos } = useContext(YoutubeContext);
  console.log("VIDEOS ON CLICK", allVideos);
  useEffect(() => {
    setDisplayVideos(allVideos);
    return () => {};
  }, [allVideos]);

  const handleClick = (video) => {
    console.log("Clicked");
    setActiveVideo(video);
    setActiveWindow(!activeWindow);
  };
  console.log("DIsplay videos: ", displayVideos);
  return (
    <>
      {activeWindow ? (
        <section className='recent-pod'>
          {displayVideos.length > 0 ? (
            displayVideos.map((video) => <Container episode={video} onClick={handleClick} />)
          ) : (
            <h1 className='redirect-title'>
              VISIT{" "}
              <a
                href='https://www.youtube.com/user/TheGMONEYTV'
                target='_blank'
                rel='noreferrer'>
                {" "}
                THE GOOD COMPANY KE
              </a>{" "}
              YOUTUBE CHANNEL FOR MORE.
            </h1>
          )}
        </section>
      ) : (
        <Player episode={activeVideo} />
      )}
    </>
  );
};

export default Youtube;
