import ShowCard from "./ShowCard";

import { useState, useEffect } from "react";

import useYoutube from "../hooks/useYoutube";

const ShowsContainer = ({ show }) => {
  const [displayVideos, setDisplayVideos] = useState([]);
  const [filteredVideos] = useYoutube(show.title);

  useEffect(() => {
    setDisplayVideos(filteredVideos);
  }, [filteredVideos]);
  return (
    <div className={"shows-container"} id={show.id}>
      <h3 className="show-title">{show.title}</h3>

      <div className="shows-wrapper">
        {displayVideos.length > 1 &&
          displayVideos.map((video, index) => {
            if (index < 4) {
              return <ShowCard episode={video} key={Math.random() * 1000} />;
            }
            return <></>;
          })}
      </div>
    </div>
  );
};

export default ShowsContainer;
