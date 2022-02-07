import { Link } from "react-router-dom";

const Slide = ({ slide }) => {
  return (
    <div className='slide-container' key={slide.index}>
      <div className='container'>
        <div className='text-container'>
          <h2>{slide.title}</h2>

          <p>{slide.desc}</p>
          <Link to={slide.url}>
            <button className='btn'>{slide.button}</button>
          </Link>
        </div>

        <div className='image-container'>
          <img src={slide.image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Slide;
