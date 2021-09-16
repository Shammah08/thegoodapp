import LandingSlides from './LandingSlides'
import About from './About'
import Quote from './Quote';
import Partners from './Partners';
import Services from './Services'
import './Landing.css'
import { landingTemplates, services } from "../database";
import { useState, useEffect } from "react";





const LandingPage = () => {
  const [slide, setSlide] = useState(landingTemplates[0]);

  //  transition effect
  useEffect(() => {
    const timeRemaining = "10000";
    const timeout = setInterval(() => {
      nextSlide(slide.index);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  });
  // next slide
  const nextSlide = (index) => {
    // console.log("Current Index", index);
    if (index === landingTemplates.length - 1) {
      // console.log(landingTemplates.length);

      let prevItem = landingTemplates.length - 1;
      landingTemplates[prevItem].startAnimation = "";
      landingTemplates[index].startAnimation = true;

      index = 0;
      return setSlide(landingTemplates[0]);
    }
    setSlide((prev) => {
      prev = index - 1;
      landingTemplates[prev].startAnimation = "";

      const newSlide = landingTemplates[index];
      newSlide.startAnimation = true;

      return newSlide;
    });
  };

  // prev slide
  const prevSlide = (index) => {
    if (index === 1) {
      index = landingTemplates.length;
    }
    setSlide((prev) => {
      index = index - 1;
      const newSlide = landingTemplates[index];
      newSlide.startAnimation = "";

      return newSlide;
    });
  };
  return (
    <main>
    <LandingSlides slide={slide} nextSlide={nextSlide} prevSlide={prevSlide}/>
          <About />
          <Quote />
          <Partners />
          <Services services={services} />

    </main>
  );
};

export default LandingPage;
