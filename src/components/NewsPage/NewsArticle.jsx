import { useParams, Link } from "react-router-dom";
import { landingTemplates } from "../database";
import Footer from "../Footer/Footer";
import "./news.scss";

const NewsArticle = () => {
  const { articleId } = useParams();
  const article = landingTemplates.find(
    (story) => story.index === parseInt(articleId)
  );
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
