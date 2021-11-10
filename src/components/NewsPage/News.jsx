import Loader from "../Loaders/Loader";
import "./News.css";
import Footer from "../Footer/Footer";

const News = () => {
  return (
    <section className='news-container'>
      <Loader />
      <div className='news-text'>
        <h1>Latest News.</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </section>
  );
};

export default News;
