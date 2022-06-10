import LandingSlides from "./LandingSlides";
import About from "./About";
import Quote from "./Quote";
import Partners from "./Partners";
import Services from "./Services";
import Footer from "../../components/Footer/Footer";
import "./landing.scss";
import Header from "../../components/Header/Header";

const LandingPage = () => {
  return (
    <main className='landing'>
      <Header />
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
