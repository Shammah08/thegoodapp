const Services = () => {
  const heading = {
    title: "top notch services.",
    content:
      "Our quality standards apply also in terms of service, technical expertise and advice. Our dedicated employees are happy to assist you with know-how and experience in your daily business.",
  };
  const services = [
    {
      title: "Brand Equity Development",
      content:
        "Your brand isn’t static, or at least it shouldn’t be. Without continual analysis and strategy, your brand can easily lose its shine and that means reduced profits. At the core of what we do is an open and honest brand analysis complete with best practice brand strategy. A brand is not a product or a promise or a feeling. It’s the sum of all the experiences you have with a company. We act before you need to.",
    },
    {
      title: "Marketing",
      content:
        "The consumer is ever changing, every day there is a new challenge and a new way of communicating with your customers and potential customers. At the Good Company, we believe that marketing never stops even when the campaign is over. We provide joined-up marketing concepts and solutions and analysis. In this digital age, you are the company you keep.",
    },
    {
      title: "Talent Management",
      content:
        "Hard work beats talent, especially when talent doesn’t work hard. At the Good Company, we want our talent to hone their “talent” while we manage. With some of Kenya’s top sports and media personalities on our book, we offer career development assistance and financial management advice, to make sure that your finances last longer than your career (Roster available on request)",
    },
    {
      title: "Event Planning and Execution",
      content:
        "A successful event doesn’t happen by accident but is the result of meticulous planning. At the Good Company we have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    },
    {
      title: "Web Development",
      content:
        "One of the reasons we created the Good Company was because we had such negative experience with developers that when we found some great ones, we gave them jobs and put them on the board. We offer timely web solutions that work, after all that’s all you really need.",
    },
    {
      title: "App Development",
      content:
        "Does you business need an app? Do you need an app. This is a question we can help you answer. Apps aren’t for everyone, but if you need one , then talk to us.",
    },
    {
      title: "Radio Production",
      content:
        "With radio production experience spanning more than 20 years, the Good Company is in a unique position to provide broadcast strategy, analysis and execution in this digital era. Media is ever changing and the good company has been at the forefront go the changes in broadcasting both locally and internationally. Whether you need data driven output analysis, newsroom training, feature development or day part segmentation ideas, the Good company is your one stop shop for all things radio related.",
    },
    
  ];
  return (
    <section className="services-section" id='services'>
      <span className="service-title">
        <h2>{heading.title}</h2>
        <p>{heading.content}</p>
      </span>

      <div className="services-container">
        {services.map((service) => {
          return (
            <div className="service">
              <h4>{service.title}</h4>
              <p>{service.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
