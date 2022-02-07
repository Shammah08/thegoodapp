import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { landingTemplates } from "../database";

import Slide from "./Slide";

const LandingSlides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
      ? setActiveSlide(
          activeSlide > 0 ? activeSlide - 1 : landingTemplates.length - 1
        )
      : setActiveSlide(
          activeSlide < landingTemplates.length - 1 ? activeSlide + 1 : 0
        );
  };

  return (
    <section className='landing-section' id='home'>
      <div
        className='slider'
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}>
        {landingTemplates.map((slide) => (
          <Slide slide={slide} key={Math.random() * 1000} />
        ))}
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
};

export default LandingSlides;
