import Form from "./Form";
import IntroText from "./IntroText";
import forest from "./images/forest.webp";
import "./walk.scss";
// import "./Walk.media.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import Footer from "../Footer/Footer.jsx";

const WalkPage = () => {
  return (
    <section className='walk-container'>
      <div className='walk-section'>
        <img src={forest} alt='' className='forest-image' />
        <h2 className='walk-text'>WALK WITH G MONEY</h2>
        <a href='#intro-text'>
          <FaAngleDoubleDown className='icon arrow-down' />
        </a>
      </div>
      <IntroText />
      <Form />
      <Footer />
    </section>
  );
};

export default WalkPage;
