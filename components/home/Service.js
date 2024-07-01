"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Button } from "react-bootstrap";
import { FaCarSide, FaCar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

const Service = () => {
    const [activeTab, setActiveTab] = useState("tab-pane-1");

    return (
        <Container fluid className="service py-5">
            <Container>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase">
                        Our Services
                    </h6>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <Row className="g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <Col lg={4}>
                        <Nav variant="pills" className="flex-column w-100">
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="tab-pane-1"
                                    className={`d-flex align-items-center text-start p-4 mb-4 ${
                                        activeTab === "tab-pane-1"
                                            ? "active"
                                            : "text-black"
                                    }`}
                                    onClick={() => setActiveTab("tab-pane-1")}
                                >
                                    <FaCarSide
                                        size={30}
                                        className={`me-3 ${
                                            activeTab === "tab-pane-1"
                                                ? ""
                                                : "text-primary"
                                        }`}
                                    />
                                    <h4 className="m-0">Diagnostic Test</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="tab-pane-2"
                                    className={`d-flex align-items-center text-start p-4 mb-4 ${
                                        activeTab === "tab-pane-2"
                                            ? "active"
                                            : "text-black"
                                    }`}
                                    onClick={() => setActiveTab("tab-pane-2")}
                                >
                                    <FaCar
                                        size={30}
                                        className={`me-3 ${
                                            activeTab === "tab-pane-2"
                                                ? ""
                                                : "text-primary"
                                        }`}
                                    />
                                    <h4 className="m-0">Engine Servicing</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="tab-pane-3"
                                    className={`d-flex align-items-center text-start p-4 mb-4 ${
                                        activeTab === "tab-pane-3"
                                            ? "active"
                                            : "text-black"
                                    }`}
                                    onClick={() => setActiveTab("tab-pane-3")}
                                >
                                    <IoMdSettings
                                        size={30}
                                        className={`me-3 ${
                                            activeTab === "tab-pane-3"
                                                ? ""
                                                : "text-primary"
                                        }`}
                                    />
                                    <h4 className="m-0">Tires Replacement</h4>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="tab-pane-4"
                                    className={`d-flex align-items-center text-start p-4 mb-0 ${
                                        activeTab === "tab-pane-4"
                                            ? "active"
                                            : "text-black"
                                    }`}
                                    onClick={() => setActiveTab("tab-pane-4")}
                                >
                                    <IoMdSettings
                                        size={30}
                                        className={`me-3 ${
                                            activeTab === "tab-pane-4"
                                                ? ""
                                                : "text-primary"
                                        }`}
                                    />
                                    <h4 className="m-0">Oil Changing</h4>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={8}>
                        <Tab.Content className="w-100">
                            <Tab.Pane
                                eventKey="tab-pane-1"
                                className={`fade ${
                                    activeTab === "tab-pane-1"
                                        ? "show active"
                                        : ""
                                }`}
                            >
                                <Row className="g-4">
                                    <Col md={6} style={{ minHeight: "350px" }}>
                                        <div className="position-relative h-100">
                                            <img
                                                className="position-absolute img-fluid w-100 h-100"
                                                src="img/service-1.jpg"
                                                style={{ objectFit: "cover" }}
                                                alt=""
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h3 className="mb-3">
                                            Diagnostic Test
                                        </h3>
                                        <p className="mb-4">
                                            We provide comprehensive diagnostic
                                            tests with 30 years of experience,
                                            ensuring accurate and reliable
                                            vehicle assessments.
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Quality Servicing
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Expert Workers
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Modern Equipment
                                        </p>
                                        <Button
                                            href="/services"
                                            variant="primary"
                                            className="py-3 px-5 mt-3"
                                        >
                                            Read More
                                            <i className="fa fa-arrow-right ms-3"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane
                                eventKey="tab-pane-2"
                                className={`fade ${
                                    activeTab === "tab-pane-2"
                                        ? "show active"
                                        : ""
                                }`}
                            >
                                <Row className="g-4">
                                    <Col md={6} style={{ minHeight: "350px" }}>
                                        <div className="position-relative h-100">
                                            <img
                                                className="position-absolute img-fluid w-100 h-100"
                                                src="img/service-2.jpg"
                                                style={{ objectFit: "cover" }}
                                                alt=""
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h3 className="mb-3">
                                            Engine Servicing
                                        </h3>
                                        <p className="mb-4">
                                            Our engine servicing combines 30
                                            years of experience with
                                            state-of-the-art techniques to keep
                                            your engine in optimal condition.
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Quality Servicing
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Expert Workers
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Modern Equipment
                                        </p>
                                        <Button
                                            href="/services"
                                            variant="primary"
                                            className="py-3 px-5 mt-3"
                                        >
                                            Read More
                                            <i className="fa fa-arrow-right ms-3"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane
                                eventKey="tab-pane-3"
                                className={`fade ${
                                    activeTab === "tab-pane-3"
                                        ? "show active"
                                        : ""
                                }`}
                            >
                                <Row className="g-4">
                                    <Col md={6} style={{ minHeight: "350px" }}>
                                        <div className="position-relative h-100">
                                            <img
                                                className="position-absolute img-fluid w-100 h-100"
                                                src="img/service-3.jpg"
                                                style={{ objectFit: "cover" }}
                                                alt=""
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h3 className="mb-3">
                                            Tires Replacement
                                        </h3>
                                        <p className="mb-4">
                                            With 30 years of experience, we
                                            offer precise tire replacement
                                            services to enhance your
                                            vehicle&apos;s performance and
                                            safety.
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Quality Servicing
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Expert Workers
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Modern Equipment
                                        </p>
                                        <Button
                                            href="/services"
                                            variant="primary"
                                            className="py-3 px-5 mt-3"
                                        >
                                            Read More
                                            <i className="fa fa-arrow-right ms-3"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane
                                eventKey="tab-pane-4"
                                className={`fade ${
                                    activeTab === "tab-pane-4"
                                        ? "show active"
                                        : ""
                                }`}
                            >
                                <Row className="g-4">
                                    <Col md={6} style={{ minHeight: "350px" }}>
                                        <div className="position-relative h-100">
                                            <img
                                                className="position-absolute img-fluid w-100 h-100"
                                                src="img/service-4.jpg"
                                                style={{ objectFit: "cover" }}
                                                alt=""
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h3 className="mb-3">Oil Changing</h3>
                                        <p className="mb-4">
                                            Our oil changing service, backed by
                                            30 years of experience, ensures your
                                            vehicle&apos;s engine operates
                                            smoothly and efficiently.
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Quality Servicing
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Expert Workers
                                        </p>
                                        <p>
                                            <i className="fa fa-check text-success me-3"></i>
                                            Modern Equipment
                                        </p>
                                        <Button
                                            href="/services"
                                            variant="primary"
                                            className="py-3 px-5 mt-3"
                                        >
                                            Read More
                                            <i className="fa fa-arrow-right ms-3"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Service;
