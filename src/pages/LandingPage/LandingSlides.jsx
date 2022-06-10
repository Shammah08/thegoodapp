import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState, useEffect, useCallback } from 'react'
import { landingTemplates } from '../../resources/database';

import Slide from "./Slide";
import Loader from "../../components/Loader/Loader";


const LandingSlides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  
  const handleClick = useCallback(
    (way) => {
      setLoading(true);

    way === "left"
      ? setActiveSlide(
          activeSlide > 0 ? activeSlide - 1 : landingTemplates.length - 1
        )
      : setActiveSlide(
          activeSlide < landingTemplates.length - 1 ? activeSlide + 1 : 0
          );
          setLoading(false);
        }
        , [activeSlide])
  
  
  //  transition effect
  useEffect(() => {
    const timeRemaining = "7000";
    const timeout = setInterval(() => {
      handleClick("right");
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [handleClick]);



  return (
    <section className="landing-section" id="home">
      {loading && <Loader />}

      <div
        className="slider"
      >
        {landingTemplates.map((slide, index) => <Slide slide={slide} key={index * 1000} active={index ===activeSlide? true: false} />)}
      </div>
      <RiArrowRightSLine
        className="arrow right-arrow"
        onClick={() => handleClick("right")}
      />
      <RiArrowLeftSLine
        className="arrow left-arrow"
        onClick={() => handleClick("left")}
      />
    </section>
  );
};

export default LandingSlides;
