"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phoneRegex = /^[0-9]{11}$/; // Simple regex for an 11-digit phone number

        if (!formData.name || !formData.phone || !formData.message) {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            alert("Please enter a valid 11-digit phone number.");
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
                const data = await response.json(); // Parse JSON response
                alert("Booking successful!");
                setFormData({ name: "", phone: "", message: "" });
            } else {
                // Handle non-successful response
                const data = await response.json(); // Parse JSON response
                console.error("Booking failed:", data);
                alert(`Booking failed: ${data.error}`);
            }
        } catch (error) {
            console.error("Booking failed:", error);
            alert("Booking failed!");
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
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            placeholder="Your Phone"
                                            style={{ height: "55px" }}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            placeholder="Tell us about your car issues and preferred appointment time."
                                            rows={3}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default BookingForm;
