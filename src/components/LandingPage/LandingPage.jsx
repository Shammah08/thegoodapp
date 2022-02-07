import LandingSlides from "./LandingSlides";
import About from "./About";
import Quote from "./Quote";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "../Footer/Footer";
import "./landing.scss";

const LandingPage = () => {
  return (
    <main className='landing'>
      <LandingSlides />
      <About />
      <Quote />
      <Partners />
      <Services />
      <Footer />
    </main>
  );
};

export default LandingPage;
