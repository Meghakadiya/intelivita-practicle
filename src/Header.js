import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Header(){
  return(
     <>
     <header className="header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <h1 className="brand-title">Foodland</h1>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
              <Nav className="m-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Recipes</Nav.Link>
                <Nav.Link href="/">Blog</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/">About us</Nav.Link>
              </Nav>

              <div className="social-links d-flex align-items-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
    )
}

export default Header;