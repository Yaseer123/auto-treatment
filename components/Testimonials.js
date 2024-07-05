"use client";
import React, { useState } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

const testimonials = [
    {
        name: "Naveed Mahbub",
        profession: "Software Engineer",
        text: "Outstanding service! They fixed my car quickly and professionally.",
        image: "img/1.png",
    },
    {
        name: "Mahfuzur Rahman",
        profession: "Marketing Manager",
        text: "Impressive expertise! The team handled my car maintenance with great care.",
        image: "img/2.png",
    },
    {
        name: "Jabari Ekon",
        profession: "Professor",
        text: "Highly recommend! Excellent service from start to finish.",
        image: "img/3.png",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <Container>
                <div className="text-center">
                    <h6 className="text-primary text-uppercase">Testimonial</h6>
                    <h1 className="mb-5">Our Clients Say!</h1>
                </div>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    indicators={false}
                    controls={false}
                    interval={null}
                >
                    {testimonials.map((testimonial, i) => (
                        <Carousel.Item key={i}>
                            <Row className="justify-content-center">
                                <Col md={6} className="text-center">
                                    <div className="testimonial-item">
                                        <Image
                                            className="bg-light rounded-circle p-2 mx-auto mb-3"
                                            src={testimonial.image}
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                            }}
                                            alt={testimonial.name}
                                        />
                                        <h5 className="mb-0">
                                            {testimonial.name}
                                        </h5>
                                        <p>{testimonial.profession}</p>
                                        <div
                                            className={`testimonial-text text-center p-4 ${
                                                i === index
                                                    ? "bg-danger text-white"
                                                    : "bg-light"
                                            }`}
                                        >
                                            <p className="mb-0">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="text-center mt-4">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={`indicator mx-1 ${
                                i === index
                                    ? "bg-danger border border-2 border-danger"
                                    : "bg-light"
                            }`}
                            style={{
                                display: "inline-block",
                                width: "15px",
                                height: "15px",

                                cursor: "pointer",
                                border: "2px solid red",
                            }}
                        ></span>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;
