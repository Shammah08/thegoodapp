import { quotes } from "../database";
import { useState } from "react";

const Quote = () => {
  //  eslint-disable-next-line
  const [activeQuote, setActiveQuote] = useState(2);
  const quote = quotes.filter((item) => {
    return item.id === activeQuote;
  });

  return (
    <>
      {quote.map((content) => {
        return (
          <div
            className='quote-section'
            id='quote'
            style={{
              backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(${content.img})`,
            }}>
            <h2>"{content.quote}"</h2>
            <h5>{content.name}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Quote;
