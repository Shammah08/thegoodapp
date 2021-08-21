const Services = () => {
  const services = {
    heading: "top notch services.",
    serviceText:
      "Our quality standards apply also in terms of service, technical expertise and advice. Our dedicated employees are happy to assist you with know-how and experience in your daily business.",
    equity: {
      title: "Brand Equity Development",
      content:
        "Your brand isn’t static, or at least it shouldn’t be. Without continual analysis and strategy, your brand can easily lose its shine and that means reduced profits. At the core of what we do is an open and honest brand analysis complete with best practice brand strategy. A brand is not a product or a promise or a feeling. It’s the sum of all the experiences you have with a company. We act before you need to.",
    },
  };
  return (
    <div className="services-section">
      <span className="service-title">
        <h2>{services.heading}</h2>
        <p>{services.serviceText}</p>
      </span>
      <div className="services-container">
        <div className="service">
          <h4>{services.equity.title}</h4>
          <p>{services.equity.content}</p>
        </div>
        <div className="service">
          <h4>{services.equity.title}</h4>
          <p>{services.equity.content}</p>
        </div>
        <div className="service">
          <h4>{services.equity.title}</h4>
          <p>{services.equity.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
