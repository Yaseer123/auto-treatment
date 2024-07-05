"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};
        const phoneRegex = /^[0-9]{11}$/;

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.phone) {
            newErrors.phone = "Phone is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 11-digit phone number";
        }
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
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage("Booking successful!");
                setShowForm(false);
                setFormData({ name: "", phone: "", message: "" });
            } else {
                const data = await response.json();
                setResponseMessage(`Booking failed: ${data.error}`);
            }
        } catch (error) {
            console.error("Booking failed:", error);
            setResponseMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <Container fluid className="bg-secondary booking my-5">
            <Container>
                <Row className="gx-5">
                    <Col lg={6} className="py-5">
                        <div className="py-5">
                            <h1 className="text-white mb-4">
                                Certified and Award Winning Car Repair Service
                                Provider
                            </h1>
                            <p className="text-white mb-0">
                                We specialize in providing certified and
                                award-winning car repair services.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5">
                            <h1 className="text-white mb-4">
                                Book an Appointment
                            </h1>
                            {showForm ? (
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col xs={12} sm={6}>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                style={{ height: "55px" }}
                                                value={formData.name}
                                                onChange={handleChange}
                                                isInvalid={!!errors.name}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                placeholder="Your Phone"
                                                style={{ height: "55px" }}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                isInvalid={!!errors.phone}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.phone ===
                                                "Please enter a valid 11-digit phone number" ? (
                                                    <span
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
                                                        {errors.phone}
                                                    </span>
                                                ) : (
                                                    errors.phone
                                                )}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                placeholder="Tell us about your car issues and preferred appointment time."
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                isInvalid={!!errors.message}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.message}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col xs={12}>
                                            <Button
                                                variant="secondary"
                                                className="w-100 py-3"
                                                type="submit"
                                            >
                                                Book Now
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            ) : (
                                <div className="mt-3 text-center">
                                    <Alert variant="danger">
                                        {responseMessage}
                                    </Alert>
                                </div>
                            )}
                            {responseMessage && showForm && (
                                <div className="mt-3 text-center">
                                    <Alert
                                        variant={
                                            responseMessage.includes("failed")
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

export default BookingForm;
