import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="../../assets/robo.png" alt="Slide 1" />
      </div>
      <div>
        <img src="../../assets/automanu.png" alt="Slide 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
