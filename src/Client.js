import React from 'react'
import LayOutComponent from './LayOutComponent'
import { Container, Row, Col} from 'react-bootstrap';


function Client() {
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
<Container>
<Row>
        <Col className="text-center">
          <h2>Our Clients</h2>
        </Col>
      </Row>
<Row>
<Col>
<p>As a service-based company that provides CRM services, data consultation, app development, and web development, our clients come from all over India. We cater to businesses of all sizes, from small startups to large enterprises, across various industries.</p>
<p>Our CRM services are sought after by businesses that need to manage their customer interactions and streamline their business operations. We work with clients in industries such as retail, healthcare, finance, and more.</p>
<p>For our data consultation services, we have worked with clients from industries such as e-commerce, marketing, and finance. Our team of experts helps clients collect, analyze, and visualize their data, giving them insights that can help them make data-driven decisions.</p>
<p>Our app development services are popular with clients in industries such as education, healthcare, and transportation. We have created apps for clients that range from simple mobile games to complex enterprise-level apps.</p>
<p>For our web development services, we have worked with clients in industries such as hospitality, real estate, and e-commerce. Our custom website designs are visually stunning, functional, and easy to navigate, ensuring that our clients have a strong online presence.</p>
<p>We take pride in building lasting relationships with our clients, and our dedication to delivering exceptional service has earned us a reputation as a trusted partner. We work closely with our clients to understand their unique needs and provide tailored solutions that help them achieve their goals.</p>
<p>Our responsive designs ensure that our clients' websites and apps are accessible on any device, from desktops to mobile phones, making it easy for their customers to access their services anytime, anywhere.</p>
<p>In conclusion, our service-based company has a diverse client base from various industries across India. We are committed to delivering exceptional solutions that help our clients streamline their business operations, improve customer engagement, and boost sales.</p>
</Col>
</Row>
</Container>
</LayOutComponent>
  )
}

export default Client