"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!/^[0-9]{11}$/.test(formData.phone))
            newErrors.phone = "Please enter a valid 11-digit phone number.";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage("");

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setResponseMessage("Thank you! We will contact you soon.");
                setShowForm(false);
            } else {
                setResponseMessage(result.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage("An error occurred. Please try again later.");
        }
    };

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
                                    <h5 className="text-uppercase">General</h5>
                                    <p className="m-0">
                                        {" "}
                                        <FaPhoneAlt className="m-1" />
                                        +8801998084908
                                    </p>
                                    <p>
                                        {" "}
                                        <FaEnvelope className="me-1" />
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
                                        <FaEnvelope className="m-1" />
                                        autotreatment.auto@gmail.com{" "}
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase">
                                        For English Speakers
                                    </h5>
                                    <p className="m-0">
                                        <FaPhoneAlt className="m-1" />{" "}
                                        +8801828050237
                                    </p>
                                    <p>
                                        {" "}
                                        <FaEnvelope className="m-1" />
                                        autotreatment.auto@gmail.com{" "}
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
                            {showForm ? (
                                <>
                                    <h3 className="mb-4 text-center">
                                        Contact Us
                                    </h3>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <Form.Group className="form-floating">
                                                    <Form.Control
                                                        type="text"
                                                        id="name"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        isInvalid={
                                                            !!errors.name
                                                        }
                                                    />
                                                    <Form.Label htmlFor="name">
                                                        Your Name
                                                    </Form.Label>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="form-floating">
                                                    <Form.Control
                                                        type="email"
                                                        id="email"
                                                        placeholder="Your Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        isInvalid={
                                                            !!errors.email
                                                        }
                                                    />
                                                    <Form.Label htmlFor="email">
                                                        Your Email
                                                    </Form.Label>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="form-floating">
                                                    <Form.Control
                                                        type="text"
                                                        id="phone"
                                                        placeholder="Phone Number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        isInvalid={
                                                            !!errors.phone
                                                        }
                                                    />
                                                    <Form.Label htmlFor="phone">
                                                        Phone Number
                                                    </Form.Label>
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        style={{ color: "red" }}
                                                    >
                                                        {errors.phone}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="form-floating">
                                                    <Form.Control
                                                        type="text"
                                                        id="subject"
                                                        placeholder="Subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        isInvalid={
                                                            !!errors.subject
                                                        }
                                                    />
                                                    <Form.Label htmlFor="subject">
                                                        Subject
                                                    </Form.Label>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.subject}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="form-floating">
                                                    <Form.Control
                                                        as="textarea"
                                                        id="message"
                                                        placeholder="Leave a message here"
                                                        style={{
                                                            height: "100px",
                                                        }}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        isInvalid={
                                                            !!errors.message
                                                        }
                                                    />
                                                    <Form.Label htmlFor="message">
                                                        Message
                                                    </Form.Label>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.message}
                                                    </Form.Control.Feedback>
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
                                </>
                            ) : (
                                <div className="mt-3 text-center">
                                    <Alert variant="success">
                                        Thank you! We will contact you soon.
                                    </Alert>
                                </div>
                            )}
                            {responseMessage && showForm && (
                                <div className="mt-3 text-center">
                                    <Alert
                                        variant={
                                            responseMessage.includes("error")
                                                ? "danger"
                                                : "success"
                                        }
                                    >
                                        {responseMessage}
                                    </Alert>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ContactSection;
