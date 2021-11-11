import Youtube from "./Youtube";
import Show from "./Show";
import YoutubeContext from "../../contexts/youtube-context";
import { useState, useContext } from "react";

const AllVideos = ({ videos, onClick }) => {
  const [activeWindow, setActiveWindow] = useState(true);
  const [activeVideo, setActiveVideo] = useState({});
  const { displayVideos } = useContext(YoutubeContext);
  // console.log('VIDEOS ON CLICK',  videos)

  // const handleClick = (video) => {
  //   console.log("Clicked");
  //   setActiveVideo(video);
  //   setActiveWindow(!activeWindow);
  // };
  return (
    <>
      {activeWindow ? (
        <section
          className='recent-pod'
          //onClick={onClick}
        >
          {!videos.length === false ? (
            <Youtube videos={videos} />
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
        <Show episode={activeVideo} />
      )}
    </>
  );
};

export default AllVideos;
