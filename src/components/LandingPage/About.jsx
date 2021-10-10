const About = () => {
  const aboutText = {
    text: "We specialize in enhancing and building brand equity through tailored campaigns. We as a company share a common purpose and are united towards focusing our talents and organizing our various skills and resources to achieve the specific declared goals set by our clients. After all, you are the company you keep.",
  };
  return (
    <div className='about-text' id='about'>
      <h2>A Creative Agency Focused On Vision, Brand And People.</h2>
      <p>{aboutText.text}</p>
    </div>
  );
};

export default About;
