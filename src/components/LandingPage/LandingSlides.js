import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleDown,
  // FaEnvelopeOpenText,
} from "react-icons/fa";
import Loader from "../Loader";

function LandingSlides({slide, nextSlide, prevSlide}) {
  return (
    <section className="landing-section" id="home">
      {/* slides landingTemplates page */}
      <div
        className="slide"
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.1)),url(${slide.image})`,
          transition: "all ease-in-out 1s",
        }}
      ></div>

      <Loader />

      <span className="landing-text">
        <h1 style={slide.startAnimation ? headingAnimation : { animation: "" }}>
          {slide.title}
        </h1>
        <p
          style={slide.startAnimation ? paragraphAnimation : { animation: "" }}
        >
          {slide.text}
        </p>
        <a href={"/" + slide.url}>
          {" "}
          <button className="btn-default landing-button">{slide.button}</button>
        </a>
      </span>
      <a href="/#about">
        <FaAngleDoubleDown className="nav-btn dwn-btn" />
      </a>
      <FaChevronRight
        className=" nav-btn next-btn"
        onClick={() => nextSlide(slide.index)}
      />
      <FaChevronLeft
        className="nav-btn prev-btn"
        onClick={() => prevSlide(slide.index)}
      />
    </section>
  );
}

const paragraphAnimation = {
  animation: "text-animation 15s 1s infinite alternate-reverse",
};
const headingAnimation = {
  animation: "text-animation 15s infinite alternate",
};

export default LandingSlides;
