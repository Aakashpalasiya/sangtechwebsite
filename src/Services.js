import React from 'react'
import LayOutComponent from './LayOutComponent'

import { Container, Row, Col,Card  } from 'react-bootstrap';

function Services() {
  return (
    <LayOutComponent>
        <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <img
            src="https://www.pngkey.com/png/full/327-3272033_our-services-web-banner.png"
            className="img-fluid"
            alt="Our Services Web Banner"
          />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="mt-4">
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                This is a longer card description that will wrap to multiple lines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                This is a longer card description that will wrap to multiple lines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                This is a longer card description that will wrap to multiple lines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="mt-4">
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                This is a longer card description that will wrap to multiple lines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                This is a longer card description that will wrap to multiple lines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Card Image"
            />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                This is a longer card description that will wrap to multiple lines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </LayOutComponent>
  )
}

export default Services