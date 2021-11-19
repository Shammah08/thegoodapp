import LandingSlides from "./LandingSlides";
import About from "./About";
import Quote from "./Quote";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "../Footer/Footer";
import "./landing.scss";
import { landingTemplates, services } from "../database";

const LandingPage = () => {
  return (
    <main className='landing'>
      <LandingSlides allSlides={landingTemplates} />
      <About />
      <Quote />
      <Partners />
      <Services services={services} />
      <Footer />
    </main>
  );
};

export default LandingPage;
