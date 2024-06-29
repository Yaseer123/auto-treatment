import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaMapMarkerAlt,
    FaClock,
    FaPhoneAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-light p-0">
            <Container fluid>
                <Row className="d-none d-lg-flex align-items-center">
                    <Col lg={7} className="text-start px-5 py-3">
                        <div className="d-inline-flex align-items-center me-4">
                            <FaMapMarkerAlt className="text-primary me-2" />
                            <small>Location, City, Country</small>
                        </div>
                        <div className="d-inline-flex align-items-center">
                            <FaClock className="text-primary me-2" />
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </Col>
                    <Col lg={5} className="text-end px-5 py-3">
                        <div className="d-inline-flex align-items-center me-4">
                            <FaPhoneAlt className="text-primary me-2" />
                            <small>+012 345 6789</small>
                        </div>
                        <div className="d-inline-flex align-items-center">
                            <a
                                href="#"
                                className="btn btn-sm bg-white text-primary me-1"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="btn btn-sm bg-white text-primary me-1"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="btn btn-sm bg-white text-primary me-1"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="btn btn-sm bg-white text-primary me-0"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;
