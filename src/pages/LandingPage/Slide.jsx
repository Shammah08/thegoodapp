import { Link } from "react-router-dom";

const Slide = ({ slide, active }) => {

  return (
      <div className="slide-container" key={Math.floor() * 1000}>
      <div className="container" style={{ display: active ? 'block' : 'none' }}>
              <div className="text-container">
                  {slide.title.split('-').map((text, index) => {
                      return <h2 key={'title' + index}>{text}</h2>
                  })}

                  <p>{slide.desc}</p>
                  <Link to={slide.url}>
                      <button className="btn">{slide.button}</button>
                  </Link>
              </div>

              <div className="image-container">
                  <img src={slide.image} alt="" />
              </div>
          </div>
      </div>
  )
};

export default Slide;



