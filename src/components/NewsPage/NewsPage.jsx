import "./news.scss";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { landingTemplates } from "../database";

const NewsPage = () => {
  return (
    <section className='news-container'>
      <div className='container'>
        <h1>Latest News</h1>

        <div className='news-wrapper'>
          {landingTemplates.map((slide) => {
            return (
              <Link
                to={`/news/${slide.index}`}
                className='news'
                key={slide.index}>
                <img src={slide.image} alt='' />

                <div className='news-text'>
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <span>
                    <i>By: {slide.button}</i> <i>Posted: 1 Feb 2022</i>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NewsPage;
