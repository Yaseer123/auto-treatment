"use client";
import React, { useState } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
    {
        name: "Client Name",
        profession: "Profession",
        text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        image: "img/testimonial-1.jpg",
    },
    {
        name: "Client Name",
        profession: "Profession",
        text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        image: "img/testimonial-2.jpg",
    },
    {
        name: "Client Name",
        profession: "Profession",
        text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        image: "img/testimonial-3.jpg",
    },
    {
        name: "Client Name",
        profession: "Profession",
        text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        image: "img/testimonial-4.jpg",
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
