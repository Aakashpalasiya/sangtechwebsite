import React from 'react'

const Card = () => (
  
  <div className="card mt-5 px-4 mx-3 " style={{ width: '18rem' }}>
    <img src="https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=2z9VEOlF7mAgeZDEsnetqFMyQS6xqjmXDoryrQ_LeOc=" className="card-img-top" alt="..." />
    <div className="card-body ">
      <h5 className="card-title">CRM Service</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="/#" className="btn btn-primary">
        Know More
      </a>
    </div>
  </div>
);

const Product = () => {
  const Product = [];
  for (let i = 0; i < 18; i++) {
    Product.push(<Card key={i} />);
  }
  
  return (
    <>
    <div className="about-section text-center">
  <p className="section-header"><h1 class="display-4">Sangtech Product</h1><span className="default-color"></span></p>
  </div>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">{Product}</div>
    </div>
    </>
  );
};

export default Product;