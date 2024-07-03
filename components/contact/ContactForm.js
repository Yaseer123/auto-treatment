"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
    return (
        <Container fluid className="py-5">
            <Container>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase">Contact Us</h6>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>
                <Row className="g-4">
                    <Col xs={12}>
                        <Row className="gy-4">
                            <Col md={4}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">Booking</h5>
                                    <p className="m-0">
                                        <FaPhoneAlt className="m-1" />
                                        +8801998084908
                                    </p>
                                    <p>
                                        <FaEnvelope className="m-1" />{" "}
                                        autotreatment.auto@gmail.com
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">General</h5>
                                    <p className="m-0">
                                        {" "}
                                        <FaPhoneAlt className="m-1" />
                                        +8801998084908
                                    </p>
                                    <p>
                                        {" "}
                                        <FaEnvelope className="m-1" />
                                        autotreatment.auto@gmail.com
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">
                                        Technical
                                    </h5>
                                    <p className="m-0">
                                        <FaPhoneAlt className="m-1" />{" "}
                                        +8801715663335
                                    </p>
                                    <p>
                                        {" "}
                                        <FaEnvelope className="m-1" />{" "}
                                        autotreatment.auto@gmail.com
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="wow fadeIn" data-wow-delay="0.1s">
                        <iframe
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0"
                            style={{ minHeight: "350px", border: "0" }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </Col>
                    <Col md={6}>
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <p className="mb-4">
                                The contact form is currently inactive. Get a
                                functional and working contact form with Ajax &
                                PHP in a few minutes. Just copy and paste the
                                files, add a little code and you are done.{" "}
                                <a href="https://freewebsitecode.com/contact-form">
                                    Download Now
                                </a>
                                .
                            </p>
                            <Form>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group className="form-floating">
                                            <Form.Control
                                                type="text"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <Form.Label htmlFor="name">
                                                Your Name
                                            </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-floating">
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <Form.Label htmlFor="email">
                                                Your Email
                                            </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group className="form-floating">
                                            <Form.Control
                                                type="text"
                                                id="subject"
                                                placeholder="Subject"
                                            />
                                            <Form.Label htmlFor="subject">
                                                Subject
                                            </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group className="form-floating">
                                            <Form.Control
                                                as="textarea"
                                                id="message"
                                                placeholder="Leave a message here"
                                                style={{ height: "100px" }}
                                            />
                                            <Form.Label htmlFor="message">
                                                Message
                                            </Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Button
                                            variant="primary"
                                            className="w-100 py-3"
                                            type="submit"
                                        >
                                            Send Message
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ContactSection;
