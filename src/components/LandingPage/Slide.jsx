const Slide = ({slide}) => {
  return (
    <div className='slide-container' key={slide.index}>
      <div className='container'>
        <div className='text-container'>
          <h2>{slide.title}</h2>

          <p>{slide.desc}</p>
          <a href={slide.url}>
            <button className='btn'>{slide.button}</button>
          </a>
        </div>

        <div className='image-container'>
          <img src={slide.image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Slide;
