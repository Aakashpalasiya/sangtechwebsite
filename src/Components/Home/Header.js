import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png';

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src={logo} alt="Sangtech Technologies" height="50" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/product">Product</Nav.Link>
              <Nav.Link as={Link} to="/career">Career</Nav.Link>
              <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link href="mailto:info@sangtechtechnologies.in">info@sangtechtechnologies.in</Nav.Link>
              <Nav.Link href="tel:+919667251810">+91-9667251810</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;