import LandingSlides from "./LandingSlides";
import About from "./About";
import Quote from "./Quote";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "./Footer";
import "./Landing.css";
import "./Landing.media.css";
import { landingTemplates, services } from "../database";

const LandingPage = () => {
  return (
    <main>
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
