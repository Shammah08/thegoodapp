import { Link } from "react-router-dom";

function Card({ show, onClick }) {
  const hosts = [
    { name: "G Money", id: 1 },
    { name: "Andy", id: 3 },
    { name: "Calvin", id: 2 },
    { name: "Neville", id: 4 },
  ];
  console.log(show.hosts.map((link) => link.name));
  // const links = show.hosts.map((link) => {
  //   console.log("Link", link.id, link.name);
  // });
  return (
    <section className="show-card" key={show.id}>
      <figure>
        <img
          src={show.logo ? show.logo : show.cover}
          alt={`${show.title} cover`}
          onClick={onClick}
        />
      </figure>
      <div className="show-details">
        <span>
          {show.hosts.map((link) => {
            return (
              <Link to={"team/" + link.id}>
                <h3 key={link.name}>{link.name} </h3>
              </Link>
            );
          })}
        </span>
        <strong>{show.tagline}</strong>
        <i>{show.date}</i>
      </div>
    </section>
  );
}

export default Card;
