import React from 'react';
import { Carousel } from 'react-bootstrap';
import santechBanner from './Images/santech-banner-simple.png';
import hospitalBanner from './Images/hospital-banner-simple.png';
import foodBanner from './Images/food-banner-simple.png';
import diagnosticBanner from './Images/diagnostic-simple.png';



function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={santechBanner}
          alt="SangTech_banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hospitalBanner}
          alt="Hospital_banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foodBanner}
          alt="Food_banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={diagnosticBanner}
          alt="Diagonostic_banner"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
