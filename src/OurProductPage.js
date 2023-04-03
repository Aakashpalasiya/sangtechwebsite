import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import LayOutComponent from './LayOutComponent'

import Card from 'react-bootstrap/Card';


function OurProductPage(data) {
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
<div className="text-center">
      <h1>Our Products</h1>
      <p>We not only provide solutions, we also help to build your business.</p>
      <Row xs={1} md={3} className="g-4">
        {data && data.length > 0 ? (
          data.map((item, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href={item.link} className="btn btn-primary">Know More</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          Array.from({ length: 18 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="/#" className="btn btn-primary">Know More</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>

    </LayOutComponent>
  )
}

export default OurProductPage