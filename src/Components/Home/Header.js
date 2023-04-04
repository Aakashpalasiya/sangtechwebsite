
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Images/logo.png'

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="justify-content-between sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Sangtech Technologies" className="d-inline-block align-top logo" style={{ maxHeight: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link href="#" className="text-nowrap">Home</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">About Us</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Services</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Portfolio</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Product</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Career</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Clients</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Blog</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">Contact Us</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">info@sangtechtechnologies.in</Nav.Link>
            <Nav.Link href="#" className="text-nowrap">+91-9667251810</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
