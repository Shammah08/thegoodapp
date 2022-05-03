import React from "react";
import { Link } from "react-router-dom";

const MoreChannels = ({ shows, channelId }) => {
  return (
    <div className="more-channels-container">
      <h3 className="more-channels-title">More Channels</h3>
      <div className="more-channels">
        {shows
          .filter((show) => show.id !== channelId)
          .map((show) => {
            return (
              <div className="channel-tag">
                <img src={show.logo} alt="Channel Badge" />
                <div className="meta-info">
                  <h3>{show.title}</h3>

                  <Link to={`/tv/channel/${show.id}/#`}>View</Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MoreChannels;
