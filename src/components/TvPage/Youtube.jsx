import Container from "./Container";
import Player from "./Player";
import YoutubeContext from "../../contexts/youtube-context";
import { useState, useContext, useEffect } from "react";

const Youtube = ({ filteredVideos }) => {
  const [activeWindow, setActiveWindow] = useState(true);
  const [activeVideo, setActiveVideo] = useState({});
  const [displayVideos, setDisplayVideos] = useState([]);

  const { allVideos } = useContext(YoutubeContext);

  const filter = allVideos.filter((video) => {
    const title = video.snippet.title.slice(0, 10);
    return title.includes(filteredVideos.slice(0, 10));
  });
  useEffect(() => {
    filter ? setDisplayVideos(filter) : setDisplayVideos(allVideos);
    return () => {};
  }, [filter.length]);

  const handleClick = (video) => {
    setActiveVideo(video);
    setActiveWindow(!activeWindow);
  };

  return (
    <>
      {activeWindow ? (
        <section className='recent-pod'>
          {displayVideos.length > 0 ? (
            displayVideos.map((video) => (
              <Container episode={video} onClick={handleClick} />
            ))
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
        <Player
          episode={activeVideo}
          setActiveWindow={setActiveWindow}
          activeWindow={activeWindow}
        />
      )}
    </>
  );
};

export default Youtube;
