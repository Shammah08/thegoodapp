import LandingSlides from './LandingSlides'
import About from './About'
import Quote from './Quote';
import Partners from './Partners';
import Services from './Services'
import './Landing.css'



const LandingPage = () => {
  return (
    <main>
    <LandingSlides />
          <About />
          <Quote />
          <Partners />
          <Services/>

    </main>
  );
};

// const landingStyle = {
//   // style={{backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(${backgroundImage})`}}
// };
export default LandingPage;
