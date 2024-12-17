"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CustomCarousel = () => {
    return (
        <Carousel
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/carousel-bg-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                            <div className="col-10 col-lg-7 text-center text-lg-start">
                                <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                                    {/* Car Servicing */}
                                </h6>
                                <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                                    Qualified Car Repair Service Center in
                                    Bangladesh
                                </h1>
                                <Link href="" legacyBehavior>
                                    <a className="btn btn-primary py-3 px-5 animated slideInDown">
                                        Learn More
                                        <FaArrowRight className="ms-3" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img
                                    className="img-fluid"
                                    src="/img/carousel-1.png"
                                    alt="First slide image"
                                />
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/carousel-bg-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                            <div className="col-10 col-lg-7 text-center text-lg-start">
                                <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                                    {/* Car Servicing */}
                                </h6>
                                <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                                    Qualified Car Wash Service Center in
                                    Bangladesh
                                </h1>
                                <Link href="" legacyBehavior>
                                    <a className="btn btn-primary py-3 px-5 animated slideInDown">
                                        Learn More
                                        <FaArrowRight className="ms-3" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img
                                    className="img-fluid"
                                    src="/img/carousel-2.png"
                                    alt="Second slide image"
                                />
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomCarousel;
