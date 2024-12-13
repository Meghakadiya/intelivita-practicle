import React from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import recipesdata from './Recipes.json'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Inbox from './Inbox';


function Contact() {
    const dataone = recipesdata
    return (
        <>
        <section className="form-section">
        <Container>
                <h2 className="contact-title">Contact us</h2>
                <Row>
                    <Col lg="5">
                        <div className="contact-left-imge">
                            <Image src="./contact-pic.png"></Image>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="contact-form">
                            <Form>
                                <Row>
                                    <Col lg="6">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="lable">Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name..." />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="lable">Email Addres</Form.Label>
                                            <Form.Control type="email" placeholder="Your email address..." />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="lable">Subject</Form.Label>
                                            <Form.Control type="text" placeholder="Enter subject..." />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="lable">Enqury Type</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name..." />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="12">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="lable">Message</Form.Label>
                                            <Form.Control  className="textarea" as="textarea" placeholder="Enter your messages..." rows={5} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="submit-btn">
                                <Button type="button" class="btn btn-primary">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
        
        <section> 
            <Inbox/>
            </section>

            <section>
            <Container>
            <div className="contact-rp-title"> 
             <h2 className="text-center">Check out the delicious recipe</h2>
            </div>
            <div className="list-recipes-data">
                        <Row>
                            {
                                dataone.slice(0,4).map((item) =>
                                (
                                    <Col lg="3">
                                        <Card>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.Discription}</Card.Title>
                                                <Card.Text>
                                                    <sapn>
                                                        <Image src="./Timer.png">
                                                        </Image>
                                                    </sapn>
                                                    <span className="short-title">
                                                        {item.time}
                                                    </span>
                                                    <sapn>
                                                        <Image src="./ForkKnife.png">
                                                        </Image>
                                                    </sapn>
                                                    <span className="short-title">
                                                        {item.title}
                                                    </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                                )
                            };
                        </Row>
                    </div>
            </Container>
        </section>
        </>
    )
}

export default Contact;