import React from "react";
import { Link } from "react-router-dom";

const MoreChannels = ({ shows, channelId, setActiveTab }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    setActiveTab("Episodes");
  };
  return (
    <div className="more-channels-container">
      <h3 className="more-channels-title">More Channels</h3>
      <div className="more-channels">
        {shows
          .filter((show) => show.id !== channelId)
          .map((show) => {
            return (
              <Link
                to={`/tv/channel/${show.id}/#`}
                className="channel-tag"
                key={"id" + show.id}
                onClick={handleClick}
              >
                <img src={show.logo} alt="Channel Badge" />
                <div className="meta-info">
                  <h3>{show.title}</h3>

                  <i>{show.date}</i>

                  <button>View</button>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MoreChannels;
