import React from "react";
import { FaCertificate, FaUsersCog, FaTools } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";

const iconStyle = {
    fontSize: "4rem", // Adjust this value for the desired size
    color: "#D81324", // Optional: Adjust the color as needed
};

const ServiceBox = () => {
    return (
        <Container fluid className="py-5">
            <Container>
                <Row className="g-4">
                    <Col
                        lg={4}
                        md={6}
                        className="wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <Card className="py-5 px-4 border-0 shadow-sm">
                            <div className="d-flex align-items-center">
                                <FaCertificate
                                    style={iconStyle}
                                    className="flex-shrink-0"
                                />
                                <div className="ps-4">
                                    <h5 className="mb-3">Quality Servicing</h5>
                                    <p>
                                        Diam dolor diam ipsum sit amet diam et
                                        eos erat ipsum
                                    </p>
                                    <a
                                        className="text-secondary border-bottom"
                                        href=""
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col
                        lg={4}
                        md={6}
                        className="wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <Card className="bg-light py-5 px-4 border-0 shadow-sm">
                            <div className="d-flex align-items-center">
                                <FaUsersCog
                                    style={iconStyle}
                                    className="flex-shrink-0"
                                />
                                <div className="ps-4">
                                    <h5 className="mb-3">Expert Workers</h5>
                                    <p>
                                        Diam dolor diam ipsum sit amet diam et
                                        eos erat ipsum
                                    </p>
                                    <a
                                        className="text-secondary border-bottom"
                                        href=""
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col
                        lg={4}
                        md={6}
                        className="wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <Card className="py-5 px-4 border-0 shadow-sm">
                            <div className="d-flex align-items-center">
                                <FaTools
                                    style={iconStyle}
                                    className="flex-shrink-0"
                                />
                                <div className="ps-4">
                                    <h5 className="mb-3">Modern Equipment</h5>
                                    <p>
                                        Diam dolor diam ipsum sit amet diam et
                                        eos erat ipsum
                                    </p>
                                    <a
                                        className="text-secondary border-bottom"
                                        href=""
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ServiceBox;
