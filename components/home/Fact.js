"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck, FaUsersCog, FaUsers, FaCar } from "react-icons/fa";
import CountUp from "react-countup";

const FactComponent = () => {
    const iconStyle = { fontSize: "3em" }; // Adjust the size here

    return (
        <div className="container-fluid fact bg-dark my-5 py-5">
            <Container>
                <Row className="g-4">
                    <Col
                        md={6}
                        lg={3}
                        className="text-center wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <FaCheck
                            className="text-white mb-3"
                            style={iconStyle}
                        />
                        <h2 className="text-white mb-2">
                            <CountUp end={30} duration={5} />
                        </h2>
                        <p className="text-white mb-0">Years Experience</p>
                    </Col>
                    <Col
                        md={6}
                        lg={3}
                        className="text-center wow fadeIn"
                        data-wow-delay="0.3s"
                    >
                        <FaUsersCog
                            className="text-white mb-3"
                            style={iconStyle}
                        />
                        <h2 className="text-white mb-2">
                            <CountUp end={1234} duration={5} />
                        </h2>
                        <p className="text-white mb-0">Expert Technicians</p>
                    </Col>
                    <Col
                        md={6}
                        lg={3}
                        className="text-center wow fadeIn"
                        data-wow-delay="0.5s"
                    >
                        <FaUsers
                            className="text-white mb-3"
                            style={iconStyle}
                        />
                        <h2 className="text-white mb-2">
                            <CountUp end={1234} duration={5} />
                        </h2>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </Col>
                    <Col
                        md={6}
                        lg={3}
                        className="text-center wow fadeIn"
                        data-wow-delay="0.7s"
                    >
                        <FaCar className="text-white mb-3" style={iconStyle} />
                        <h2 className="text-white mb-2">
                            <CountUp end={1234} duration={5} />
                        </h2>
                        <p className="text-white mb-0">Complete Projects</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FactComponent;
