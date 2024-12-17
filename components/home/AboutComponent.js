import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const AboutComponent = () => {
    return (
        <div className="container-xxl py-5">
            <Container>
                <Row className="g-5">
                    <Col lg={6} className="pt-4">
                        <div
                            className="position-relative h-100 wow fadeIn"
                            data-wow-delay="0.1s"
                        >
                            <Image
                                src="/img/about.jpg"
                                alt="Car Repair in Bangladesh"
                                fluid
                                className="position-absolute w-100 h-100"
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                                style={{ background: "rgba(0, 0, 0, .08)" }}
                            >
                                <h1 className="display-4 text-white mb-0">
                                    30 <span className="fs-4">Years</span>
                                </h1>
                                <h4 className="text-white">Experience</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h6 className="text-primary text-uppercase">
                            About Us
                        </h6>
                        <h1 className="mb-4">
                            <span className="text-primary">Auto Treatment</span>{" "}
                            Is The Best Place for{" "}
                            <strong>Car Repair in Bangladesh</strong>
                        </h1>
                        <p className="mb-4">
                            At Auto Treatment, we provide{" "}
                            <strong>professional car servicing</strong>,
                            <strong> vehicle diagnostics</strong>, and{" "}
                            <strong>auto maintenance in Dhaka</strong>. Our
                            certified <strong>car mechanics</strong> use modern
                            tools to ensure your vehicle stays in perfect
                            condition.
                        </p>
                        <Row className="g-4 mb-3 pb-3">
                            <Col xs={12}>
                                <div className="d-flex">
                                    <div
                                        className="bg-light d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "45px",
                                            height: "45px",
                                        }}
                                    >
                                        <span className="fw-bold text-secondary">
                                            01
                                        </span>
                                    </div>
                                    <div className="ps-3">
                                        <h6>Professional & Expert</h6>
                                        <span>
                                            Skilled{" "}
                                            <strong>car mechanics</strong>{" "}
                                            passionate about top-quality
                                            service.
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="d-flex">
                                    <div
                                        className="bg-light d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "45px",
                                            height: "45px",
                                        }}
                                    >
                                        <span className="fw-bold text-secondary">
                                            02
                                        </span>
                                    </div>
                                    <div className="ps-3">
                                        <h6>Quality Servicing Center</h6>
                                        <span>
                                            Reliable{" "}
                                            <strong>
                                                auto maintenance in Dhaka
                                            </strong>{" "}
                                            with advanced tools.
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Button
                            href="/services"
                            className="btn btn-primary py-3 px-5"
                        >
                            Read More <FaArrowRight className="ms-3" />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComponent;
