import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { landingTemplates, news } from "../database";
import Footer from "../Footer/Footer";
import "./news.scss";

const NewsArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const slide = landingTemplates.find(
    (story) => story.index === parseInt(articleId)
  );
  const blog = news.find((story) => story.id === parseInt(articleId));

  useEffect(() => {
    if (blog) {
      setArticle(blog);
    } else {
      setArticle(slide);
    }
    return () => {};
  }, []);

  return (
    <section className='article-wrapper'>
      <Link to='/news' className='btn'>
        Go Back
      </Link>
      <div className='article'>
        <img src={article.image} alt='' />
        <h2>{article.title}</h2>
        <p>{article.desc}</p>
      </div>

      <Footer />
    </section>
  );
};

export default NewsArticle;
