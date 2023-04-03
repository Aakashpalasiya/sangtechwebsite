import React from 'react'
import LayOutComponent from './LayOutComponent'

import { Container, Row, Col} from 'react-bootstrap';



function ContactUsPage() {
  return (
    <LayOutComponent>
    <Container fluid>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
      <img
        src="https://www.pngkit.com/png/full/111-1113382_view-our-portfolio-our-portfolio-web-page-design.png"
        className="img-fluid"
        alt="Our OurPortfolio Web Banner"
      />
    </Col>
  </Row>
</Container>
<form>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h1 className="mb-5 text-center text-uppercase">Contact Us</h1>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="firstName" className="form-label text-muted">First Name</label>
                    <input type="text" className="form-control border-0 shadow-sm" id="firstName" placeholder="First Name" required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="lastName" className="form-label text-muted">Last Name</label>
                    <input type="text" className="form-control border-0 shadow-sm" id="lastName" placeholder="Last Name" required />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-muted">Email</label>
                  <input type="email" className="form-control border-0 shadow-sm" id="email" placeholder="Email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-muted">Message</label>
                  <textarea className="form-control border-0 shadow-sm" id="message" rows={5} placeholder="Message" required></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </LayOutComponent>
  )
}

export default ContactUsPage