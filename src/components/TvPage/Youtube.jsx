import Container from "./Container";
import Player from "./Player";
import YoutubeContext from "../../contexts/youtube-context";
import { useState, useContext, useEffect } from "react";
import Footer from "../Footer/Footer";

const Youtube = ({ filterTitle, activeWindow, setActiveWindow }) => {
  const [activeVideo, setActiveVideo] = useState({});
  const [displayVideos, setDisplayVideos] = useState([]);

  const { allVideos } = useContext(YoutubeContext);

  // Filter shows based on clicked show-title
  const filteredVideos = allVideos.filter((video) => {
    const title = video.snippet.title.slice(0, 10);
    return title.includes(filterTitle.slice(0, 8));
  });
  useEffect(() => {
    filteredVideos
      ? setDisplayVideos(filteredVideos)
      : setDisplayVideos(allVideos);
    return () => {};
    // eslint-disable-next-line
  }, [filteredVideos.length]);

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
              <Container
                episode={video}
                onClick={handleClick}
                key={Math.random() * 1000}
              />
            ))
          ) : (
            <div style={{ minWidth: "100vw" }}>
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
              <Footer />
            </div>
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
