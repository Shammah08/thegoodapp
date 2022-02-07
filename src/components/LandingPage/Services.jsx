import { services } from "../database";

const Services = () => {
  const heading = {
    title: "TOP NOTCH SERVICES.",
    content:
      "Our quality standards apply also in terms of service, technical expertise and advice. Our dedicated employees are happy to assist you with know-how and experience in your daily business.",
  };
  return (
    <section className='services-section' id='services'>
      <span className='service-title'>
        <h2>{heading.title}</h2>
        <p>{heading.content}</p>
      </span>

      <div className='services-container'>
        {services.map((service) => {
          return (
            <div className='service' key={service.title}>
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
