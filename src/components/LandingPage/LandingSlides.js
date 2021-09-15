import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleDown,
  // FaEnvelopeOpenText,
} from "react-icons/fa";
import nairobi from "./images/Nairobi.jpg";
import skyline from "./images/Nairobi-Night-Skyline.jpg";
import silverArrow from "./images/silver-arrow.jpg";
import laptop from "./images/laptop.jpg";
import party from "./images/party.jpg";
import people from "./images/people.jpg";
import Loader from '../Loader'

const status = [
  {
    index: 1,
    image: nairobi,
    title: "WE ARE THE GOOD COMPANY",
    text: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: true,
    url: '#about',
  },
  {
    index: 2,
    image: silverArrow,
    title: "WE BUILD BRANDS",
    text: "We specialize in enhancing and building brand equity through tailored strategies & campaigns",
    button: "Learn More",
    startAnimation: '',
    url: '#quote'

  },
  {
    index: 3,
    image: party,
    title: "WE CREATE EXPERIENCES",
    text: "We have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    button: "Learn More",
    startAnimation: '',
    url: 'podcast'

  },
  {
    index: 4,
    image: laptop,
    title: "WE CREATE FOR THE WEB",
    text: "We design and develop websites and mobile apps to achieve the specific declared goals set by our clients.",
    button: "Learn More",
    startAnimation: '',
    url: '#services'

  },
  {
    index: 5,
    image: people,
    title: "WE ARE GOOD COMPANY",
    text: "After all you are the company you keep",
    button: "About Us",
    startAnimation: '',
    url: 'team'

  },
  {
    index: 6,
    image: skyline,
    title: "WE ARE THE GOOD COMPANY",
    text: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: '',
    url: '#about'

  },
];
function LandingSlides() {  
  const [slide, setSlide] = useState(status[0]);

  //  transition effect
  useEffect(() => {
    const timeRemaining = '10000'
    const timeout = setInterval(() => {     
      nextSlide(slide.index)
    }, timeRemaining)
    return () => {
      clearTimeout(timeout)
    }
  })
  // next slide
  const nextSlide = (index) => {
    console.log('Current Index',index);
    if (index === status.length - 1) {
      console.log(status.length)

      let prevItem = status.length - 1
      // console.log("prev item", prevItem, 'current index', index, 'last iteration');
      status[prevItem].startAnimation = ''
      status[index].startAnimation = true
      // console.log(status[index].startAnimation)
      // console.log(status[3].title)
      // console.log(status[status.length - 3])
      index = 0;
        return setSlide(status[0])
    }
    setSlide((prev) => {
      prev = index - 1
      status[prev].startAnimation = ''
      
      const newSlide = status[index]
      newSlide.startAnimation= true
  
      return newSlide;
    });
  };

  // prev slide
  const prevSlide = (index) => {

    if (index === 1) {

      index = status.length;
    }
    setSlide((prev) => {
      index = index - 1;
      const newSlide = status[index]
      newSlide.startAnimation = '';
      
      return newSlide;
    });
  };

  return (
    <section className="landing-section" id='home'>


    {/* slides landing page */}
      <div
        className="slide"
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.1)),url(${slide.image})`,
          transition: 'all ease-in-out 1s' 
        }}
      >
      </div>

    <Loader />

      <span className="landing-text">
        <h1 style={slide.startAnimation? headingAnimation: {animation: ''}}>{slide.title}</h1>
        <p style={slide.startAnimation? paragraphAnimation: {animation: ''}}>{slide.text}</p>
       <a href={'/' + slide.url}> <button className='btn-default landing-button'>{slide.button}</button></a>
      </span>
      <a href="/#about">
     <FaAngleDoubleDown className='nav-btn dwn-btn' />
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
    animation: 'text-animation 15s 1s infinite alternate-reverse'
  }
  const headingAnimation = {
    animation: 'text-animation 15s infinite alternate',
  }



export default LandingSlides;




{/* <div className="info-div">
<span>Let's talk about your project </span>
<span>
  <a href="mailto:info@thegoodcompany.co.ke">
    <FaEnvelopeOpenText /> info@thegoodcompany.co.ke
  </a>
</span>

social links icons
<span>
  <a
    href="https://www.instagram.com/thegoodcompanyke/?hl=en"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram className="icon" />
  </a>
  <a
    href="https://www.youtube.com/channel/UC7h4tUtdH0L06sDZVmBMc4Q"
    target="_blank"
    rel="noreferrer"
  >
    <FaYoutube className="icon" /> <FaTwitter className="icon" />
  </a>

  <a
    href="https://ke.linkedin.com/company/the-good-company-ke"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedinIn className="icon" />
  </a>
</span>
</div> */}