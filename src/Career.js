import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import LayOutComponent from './LayOutComponent'


function Career() {
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
 <Card className="my-4">
      <Card.Body>
        <Card.Title>Job Listing</Card.Title>
        <Card.Text>
          If you are interested in a remunerative & fruitful job in Delhi-NCR, India, corner the market talent & champing the beat to face challenges and craving to accompany the career in software & web development then we are here with favorable opportunities.
        </Card.Text>
        <Card.Text>
          We have need for candidates with basic knowledge in domains as web designing, web development, software programming & prepares oneself for our forthcoming projects. We also recruit experienced persons in distinct to software industries for senior positions. We proffer better career and prospective prospects for experienced professionals in our client services. Under mentioned are the list of qualifications required for our job listing.
        </Card.Text>
        <ul>
          <li>Basic knowledge in web designing, web development, and software programming</li>
          <li>Experience in software industries for senior positions</li>
          <li>Good communication and teamwork skills</li>
          <li>Bachelor's or Master's degree in Computer Science or related field</li>
        </ul>
        <Button href="mailto:hr@sangtechtechnologies.in" variant="primary">Apply Now</Button>
      </Card.Body>
    </Card>
    </LayOutComponent>
  )
}

export default Career