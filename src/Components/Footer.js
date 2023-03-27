import React from 'react';

const Footer = () => {
  return (
    <div className="container d-flex align-items-center mt-5">
      <div className="row">
        <div className="col-md-3">
          <h5 className="text-uppercase">Company</h5>
          <ul className="list-unstyled">
            S
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">We Are Hiring</a></li>
            <li><a href="/#">Meet The Team</a></li>
            <li><a href="/#">Copyright</a></li>
          
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="text-uppercase">Support</h5>
          <ul className="list-unstyled">
          <li><a href="/#">FAQ</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Forum</a></li>
          <li><a href="/#">Documentation</a></li>
           
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="text-uppercase">Developers</h5>
          <ul className="list-unstyled">
          <li><a href="/#">Web Development</a></li>
          <li><a href="/#">Product Development</a></li>
          <li><a href="/#">Android/IOS</a></li>
          <li><a href="/#">Database Consulting</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="text-uppercase">Our Partners</h5>
          <ul className="list-unstyled">
            <li>Sangtech Technologies Ni. Ltd, Owerri Nigeria</li>
            <li>Zetruncoms Ltd, Lusaka Zambia</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="text-uppercase">Office</h5>
          <ul className="list-unstyled">
            <li>Corporate Office:</li>
            <li>B-702 Shipra Neo, Indirapuram, Ghaziabad UP, India</li>
            <li>Nigeria Office:</li>
            <li>20 Bank Road, Owerri, IMO State, Nigeria</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;