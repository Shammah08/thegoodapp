const ShowBadge = ({ show }) => {
  return (
    <a
      href={`#${show.id}`}
      className="channel-badge"
      key={show.id}
      title={show.title}
    >
      <div className="channel-badge-img-wrapper">
        <img src={show.logo ? show.logo : show.cover} alt={show.title} />
      </div>

      <h3 className="channel-badge-name">{show.title}</h3>
    </a>
  );
};

export default ShowBadge;
