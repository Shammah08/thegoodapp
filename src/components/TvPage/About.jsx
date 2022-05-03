import React from "react";

const About = ({ tab, channel }) => {
  return (
    <div
      style={{ display: tab === "About" ? "flex" : "none" }}
      className="channel-about"
    >
      <div className="channel-image">
        <img src={channel.cover} alt="" />
        <span>{channel.category}</span>
      </div>
      <div className="about-wrapper">
        <h2>{channel.title}</h2>
        <div className="channel-info">
          <p className="tagline">{channel.tagline}</p>

          <img src={channel.logo} alt="" />
          <i>{channel.date}</i>

          <div className="hosts">
            {channel.hosts.map((host) => {
              return <a href={`/team/${host.id}`}>{host.name} </a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
