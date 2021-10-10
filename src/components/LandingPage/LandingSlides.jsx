import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Loader from "../Loader";
import { useState, useEffect } from "react";
// import { init } from "ityped";

function LandingSlides({ allSlides }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // const headingRef = useRef();

  // useEffect(() => {
  //   init(headingRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     strings: ["Developer", "and Human Being"],
  //     backSpeed: 60,
  //     startDelay: 500,
  //   });
  //   return () => {};
  // });
  //  transition effect
  useEffect(() => {
    const timeRemaining = "15000";
    const timeout = setInterval(() => {
      handleClick("right");
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleClick = (way) => {
    way === "left"
      ? setActiveSlide(activeSlide > 0 ? activeSlide - 1 : allSlides.length - 1)
      : setActiveSlide(
          activeSlide < allSlides.length - 1 ? activeSlide + 1 : 0
        );
  };

  return (
    <section className='landing-section' id='home'>
      <div
        className='slider'
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}>
        {allSlides.map((slide) => {
          return (
            <div className='slide-container' key={slide.index}>
              <div className='container'>
                <div className='text-container'>
                  <h2>{slide.title}</h2>

                  <p>{slide.desc}</p>
                  <a href={slide.url}>
                    <button className='btn'>{slide.button}</button>
                  </a>
                </div>

                <div className='image-container'>
                  <img src={slide.image} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FaChevronRight
        className='arrow right-arrow'
        onClick={() => handleClick("right")}
      />
      <FaChevronLeft
        className='arrow left-arrow'
        onClick={() => handleClick("left")}
      />
    </section>
  );
}

export default LandingSlides;
