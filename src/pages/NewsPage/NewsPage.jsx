import "./news.scss";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { landingTemplates, news } from '../../resources/database'
import Header from "../../components/Header/Header";

const NewsPage = () => {
  return (
      <div style={{ backgroundColor: 'grey' }}>
          <Header />
          <section className="news-container">
              <div className="container">
                  <h1>Latest News</h1>

                  <div className="news-wrapper">
                      {landingTemplates.map((slide) => {
                          return (
                              <Link
                                  to={`/news/${slide.index}`}
                                  className="news"
                                  key={slide.index}
                              >
                                  <img src={slide.image} alt="" />

                                  <div className="news-text">
                                      <h3>{slide.title}</h3>
                                      <p>{slide.desc}</p>
                                      <span>
                                          <i>By: {slide.button}</i>{' '}
                                          <i>Posted: 1 Feb 2022</i>
                                      </span>
                                  </div>
                              </Link>
                          )
                      })}
                  </div>

                  <div className="news-wrapper">
                      {news.map((article) => {
                          return (
                              <Link
                                  to={`/news/${article.id}`}
                                  className="news"
                                  key={article.id}
                              >
                                  <img src={article.image} alt="" />

                                  <div className="news-text">
                                      <h3>{article.title}</h3>
                                      <p>{article.desc}</p>
                                      <span>
                                          <i>By: {article.author}</i>{' '}
                                          <i>Posted: 1 Feb 2022</i>
                                      </span>
                                  </div>
                              </Link>
                          )
                      })}
                  </div>
              </div>
              <Footer />
          </section>
      </div>
  )
};

export default NewsPage;
