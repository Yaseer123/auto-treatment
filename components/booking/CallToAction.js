import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CallToAction = () => {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <Container>
                <Row className="g-4">
                    <Col lg={8} md={6}>
                        <h6 className="text-primary text-uppercase">
                            Call To Action
                        </h6>
                        <h1 className="mb-4">Have Any Pre Booking Question?</h1>
                        <p className="mb-0">
                            Lorem diam ea sit dolor labore. Clita et dolor erat
                            sed est lorem sed et sit. Diam sed duo magna erat et
                            stet clita ea magna ea sed, sit labore magna lorem
                            tempor justo rebum dolores. Eos dolor sea erat amet
                            et, lorem labore lorem at dolores. Stet ea ut justo
                            et, clita et et ipsum diam.
                        </p>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                            <h3 className="text-white mb-4">
                                <FaPhoneAlt className="me-3" />
                                +012 345 67891
                            </h3>
                            <Button
                                href=""
                                variant="secondary"
                                className="py-3 px-5"
                            >
                                Contact Us <FaArrowRight className="ms-3" />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToAction;
