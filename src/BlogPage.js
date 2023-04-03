import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import LayOutComponent from './LayOutComponent'



function BlogPage() {
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
</LayOutComponent>
   
  )
}

export default BlogPage