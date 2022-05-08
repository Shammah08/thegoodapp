import ShowCard from "./ShowCard";

import { useState, useEffect } from "react";

import useYoutube from "../hooks/useYoutube";
import { FaWindowRestore } from "react-icons/fa";

const ShowsContainer = ({ show }) => {
  const [displayVideos, setDisplayVideos] = useState([]);
  const [channelVideos] = useYoutube(show.title);

  useEffect(() => {
    setDisplayVideos(channelVideos);
  }, [channelVideos]);
  return (
    <div className={"shows-container"} id={show.id}>
      <h3 className="show-title">{show.title}</h3>

      <div className="shows-wrapper">
        <>
          {displayVideos.length > 1 &&
            displayVideos.map((video, index) => {
              if (index < 4) {
                return (
                  <ShowCard
                    episode={video}
                    show={show}
                    key={video.id + index}
                  />
                );
              }
              return <></>;
            })}

          <a className="more-shows" href={`tv/channel/${show.id}`}>
            View Channel <FaWindowRestore />
          </a>
        </>
      </div>
    </div>
  );
};

export default ShowsContainer;
