import React from 'react';
import './OurFeatures.css';

function OurFeatures() {
  return (
    <div className="our-features-container container-fluid">
      <div className="about-section text-center mt-5">
        <h1 className="display-4">Our Features will Help Improve Your Business</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMHN1cHBvcnR8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fully Supported</h5>
              <p className="card-text">Our service company provides full support to our clients, helping them to optimize and maintain their technology solutions. We offer 24/7 technical support, CRM customization and integration, software and app development, and other services to ensure that our clients have everything they need to succeed in the digital age.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://media.istockphoto.com/id/1016963808/photo/customer-service-evaluation-concept.jpg?b=1&s=170667a&w=0&k=20&c=sls0aF-57ZPWAXZxq7e-i-ZeSTOLnEfhOuLlFpdkFVo=" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product Review</h5>
              <p className="card-text">Our product review service is designed to provide our clients with an objective and unbiased assessment of their technology solutions. We'll evaluate your software, apps, and CRM systems, providing you with detailed feedback on their performance, usability, and overall effectiveness.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <img src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=170667a&w=0&k=20&c=F4ePFhK7r539j0_I2l1Zi01SX5ESqTvu_NtqjjOUoNQ=" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product Analysis</h5>
              <p className="card-text">We offer a comprehensive product analysis service to help our clients identify opportunities for improvement in their technology solutions. Our team of experts will provide an in-depth analysis of your software and applications, helping you identify areas for optimization and enhancement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;
