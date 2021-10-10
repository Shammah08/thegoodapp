import Loader from "../Loader";
import "./News.css";

function News() {
  return (
    <section className='news-container'>
      <Loader />
      <div className='news-text'>
        <h1>Latest News.</h1>
        <p>Coming Soon</p>
      </div>
    </section>
  );
}

export default News;
