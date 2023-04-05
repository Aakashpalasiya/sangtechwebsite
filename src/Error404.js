import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error404 = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center h-100">
      <Row className="mb-5">
        <Col>
          <h1 className="display-1 text-center">404</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <p className="text-center lead">Oops! The page you're looking for could not be found.</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button variant="primary" href="/" size="lg">Go Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;