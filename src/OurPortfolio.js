import React from 'react'
import LayOutComponent from './LayOutComponent'

import { Container, Row, Col, Image } from 'react-bootstrap';

const images = [
  {
    id: 1,
    src: 'https://media.istockphoto.com/id/1430393066/photo/creative-startup-and-team-webinar-on-laptop-for-professional-internet-communication-in-office.jpg?b=1&s=170667a&w=0&k=20&c=ZFARMVi3O6BgLuzkBlsUDEx09zILGmP2gh9aSNJJoBk=',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://media.istockphoto.com/id/1359043758/photo/two-men-looking-at-laptop-in-meeting.jpg?b=1&s=170667a&w=0&k=20&c=HFFmWvYQJ3vFRlGiNrB265tcCqFkpGup46WJZ5OZWzg=',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://media.istockphoto.com/id/1425828231/photo/young-man-uses-multiple-computers-while-coding-developing-web-site.jpg?b=1&s=170667a&w=0&k=20&c=QhbfRSfTUztHQeuQLizPwEZUEo1AODn5r1unV1HZyPc=',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://media.istockphoto.com/id/1343152988/photo/shot-of-an-unrecognisable-businesswoman-using-a-laptop-while-working-remotely.jpg?b=1&s=170667a&w=0&k=20&c=uWnxfPXToHSVaFy6bwQP-dPzHa4YJMBnhHf_eEK4PRs=',
    alt: 'Image 4',
  },
  {
    id: 5,
    src: 'https://media.istockphoto.com/id/1304835109/photo/anonymous-person-typing-on-laptop-with-web-design-program-displayed-on-screen-ui-ux-website.jpg?b=1&s=170667a&w=0&k=20&c=3yyYit6X6rL8FuFe_MyWk81ZkCOJVEEGJl027wDSRLE=',
    alt: 'Image 5',
  },
  {
    id: 6,
    src: 'https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?b=1&s=170667a&w=0&k=20&c=4yNOztDAVsxOG5bq-_-KwcVl3a3LlTSTWp5c43O7MvU=',
    alt: 'Image 6',
  },
  {
    id: 7,
    src: 'https://media.istockphoto.com/id/1283021201/photo/working-hard-to-maximise-her-brands-long-term-potential.jpg?b=1&s=170667a&w=0&k=20&c=5Dw2IG2GhRrJvVyG24WxZ1MiJGmGt9anlLRJIXmIPrw=',
    alt: 'Image 7',
  },
  {
    id: 8,
    src: 'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg=',
    alt: 'Image 8',
  },
  {
    id: 9,
    src: 'https://media.istockphoto.com/id/1290492381/photo/3d-code-programming-for-website-editors-view.jpg?b=1&s=170667a&w=0&k=20&c=nErLcmBir2X8k1dyv250wE2y3cMYRUKDWd5ZqIJPkPg=',
    alt: 'Image 9',
  },
];

function OurPortfolio() {
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
    <Container className="my-4">
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {images.map(image => (
          <Col key={image.id}>
            <Image src={image.src} alt={image.alt} fluid />
          </Col>
        ))}
      </Row>
    </Container>
    
    </LayOutComponent>
  )
}

export default OurPortfolio