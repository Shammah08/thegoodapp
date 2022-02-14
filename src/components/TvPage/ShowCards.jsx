import { shows } from "../database";

const ShowCards = ({ handleClick }) => {
  return (
    <div className='cards-container'>
      <div className='cards-text'>
        <h2>Podcasts & Mixes</h2>
      </div>

      <section className='cards' key={Math.random * 100}>
        {shows.map((show) => {
          return (
            <div className='show-card' key={show.id} title={show.title}>
              <div className='show-img-wrapper'>
                <img
                  src={show.logo ? show.logo : show.cover}
                  alt={show.title}
                  onClick={() => handleClick(show.title)}
                />
              </div>

              <h3 className='show-name'>{show.title}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ShowCards;
