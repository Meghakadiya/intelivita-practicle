import React from "react";
import { Container } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Inbox(){
    return(
        <>
        <div className="wrapper-input-box"> 
        <Container>
            <div className="inbox-box">
            <h2>Deliciousness to your inbox</h2>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className="input-lable">
            <InputGroup className="input-section">
        <Form.Control
          placeholder="Your email address..."
          aria-label="Your email address..."
          aria-describedby="basic-addon1"
        />
         <div className="subscribe-btn">
      <Button variant="primary">Subscribe</Button>
     </div> 
      </InputGroup>
     
      
            </div>
        </Container>
        </div>
        </>
    )
}
export default Inbox;