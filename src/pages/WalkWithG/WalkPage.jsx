import Form from "./Form";
import IntroText from "./IntroText";
import { forest } from '../../resources/database';
import "./walk.scss";
import { FaAngleDoubleDown } from "react-icons/fa";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header";

const WalkPage = () => {
  return (
        <div style={{ backgroundColor: 'grey' }}>
          <Header />

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
    </div>
  );
};

export default WalkPage;
