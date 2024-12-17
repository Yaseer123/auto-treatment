"use client";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <div
            className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Address</h4>
                        <p className="mb-2">
                            <FaMapMarkerAlt className="me-3" />
                            Plot-37, Road-20, Block-J, Baridhara, Vatara,
                            Dhaka-1212
                        </p>
                        <p className="mb-2">
                            <FaPhoneAlt className="me-3" />
                            +8801715663335
                        </p>
                        <p className="mb-2">
                            <FaEnvelope className="me-3" />
                            autotreatment.autos@gmail.com{" "}
                        </p>
                        <div className="d-flex pt-2">
                            <a
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <FaTwitter />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <FaYoutube />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Opening Hours</h4>
                        <h6 className="text-light">Monday - Friday:</h6>
                        <p className="mb-4">09.00 AM - 09.00 PM</p>
                        <h6 className="text-light">Saturday - Sunday:</h6>
                        <p className="mb-0">09.00 AM - 12.00 PM</p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Services</h4>
                        <a
                            className="btn btn-link d-flex align-items-center"
                            href="/services"
                        >
                            <IoIosArrowForward className="me-2" />
                            Diagnostic Test
                        </a>
                        <a
                            className="btn btn-link d-flex align-items-center"
                            href="/services"
                        >
                            <IoIosArrowForward className="me-2" />
                            Engine Servicing
                        </a>
                        <a
                            className="btn btn-link d-flex align-items-center"
                            href="/services"
                        >
                            <IoIosArrowForward className="me-2" />
                            Tires Replacement
                        </a>
                        <a
                            className="btn btn-link d-flex align-items-center"
                            href="/services"
                        >
                            <IoIosArrowForward className="me-2" />
                            Oil Changing
                        </a>
                        <a
                            className="btn btn-link d-flex align-items-center"
                            href="/services"
                        >
                            <IoIosArrowForward className="me-2" />
                            Vacuum Cleaning
                        </a>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>
                            Unlock the Garage of Savings! Subscribe for insider
                            deals and car care secrets.
                        </p>
                        <div
                            className="position-relative mx-auto"
                            style={{ maxWidth: "400px" }}
                        >
                            <Form.Control
                                className="border-0 w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <Button
                                variant="primary"
                                className="py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="copyright">
                    <Row>
                        <Col
                            md={6}
                            className="text-center text-md-start mb-3 mb-md-0"
                        >
                            &copy;{" "}
                            <a
                                className="border-bottom"
                                href="https://autotreatment.auto"
                            >
                                Auto Treatment
                            </a>
                            , All Right Reserved. Designed By{" "}
                            <a
                                className="border-bottom"
                                href="https://autotreatment.auto"
                            >
                                MYM DEV
                            </a>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FAQs</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
