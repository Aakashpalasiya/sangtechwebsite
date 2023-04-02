import React from 'react';
import { Carousel } from 'react-bootstrap';


function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://sangtechtechnologies.in/images/santech-banner-simple.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://sangtechtechnologies.in/images/santech-banner-simple.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://sangtechtechnologies.in/images/santech-banner-simple.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://sangtechtechnologies.in/images/santech-banner-simple.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
