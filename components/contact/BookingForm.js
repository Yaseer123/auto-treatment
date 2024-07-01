"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

        if (!formData.name || !formData.phone || !formData.message) {
            alert("Please fill in all the required fields.");
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
                alert("Booking successful!");
                setFormData({ name: "", phone: "", message: "" });
            } else {
                const data = await response.json();
                alert(`Booking failed: ${data.error}`);
            }
        } catch (error) {
            console.error(error);
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
                                award-winning car repair services. Our team has
                                over 30 years of experience in delivering
                                top-notch car repair solutions, ensuring your
                                vehicle receives the best care possible.
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
