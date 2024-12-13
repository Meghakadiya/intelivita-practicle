import React from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
     <>
      <footer className="footer-section">
      <Container>
      <div className="footer-content"> 
      <Row>
          <Col md="6">
          <div className="footer-heading">
          <h5 className="mb-3 brand-title">Foodieland</h5>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
          </div>
          </Col>
          
          <Col md="6" className="text-center">
          <div className="footer-list"> 
            <Nav className="justify-content-end">
              <Nav.Link href="#">Recipes</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">About us</Nav.Link>
            </Nav>
            </div>
          </Col>      
        </Row>
      </div>

      <div className="footer-copyrightg"> 
        <Row>
            <Col lg="7 justify-content-end ps-0 pe-0">
            <p className="text-end">&copy; 2020 Flowbase. Powered by <a href="#" className="text-primary">Webflow</a></p>
            </Col>
            <Col lg="5">
            <div className="social-links d-flex align-items-center justify-content-end">
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
            </Col>
        </Row>
     </div>
   
      </Container>
    </footer>
     </>
    )
}

export default Footer;