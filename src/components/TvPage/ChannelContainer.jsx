import Card from "./Card";
import { logos } from "../database";

function ChannelContainer({ shows, onClick }) {
  return (
    <section className='channels-section'>
      <div className='banner'>
        <img src={logos.goodBanner} alt='' />
      </div>

      <div className='cards'>
        {shows.map((show) => (
          <Card show={show} key={show.id} onClick={onClick} />
        ))}
      </div>
    </section>
  );
}

export default ChannelContainer;
