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
          <img src={channel.logo} alt="" />
          <p className="tagline">{channel.tagline}</p>

          <p className="about">{channel.about}</p>

          <div className="hosts">
            {channel.hosts.map((host) => {
              return (
                <a href={`/team/${host.id}`} key={host + Math.random() * 1000}>
                  {host.name}{" "}
                </a>
              );
            })}
          </div>
          <strong>{channel.date}</strong>
        </div>
      </div>
    </div>
  );
};

export default About;
