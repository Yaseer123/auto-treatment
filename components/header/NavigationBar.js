"use client";
import React from "react";
import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link
                href="/"
                className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
                <h2 className="m-0 text-primary">
                    <FaCar className="me-2" />
                    Auto Treatment
                </h2>
            </Link>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="/" className="nav-item nav-link active">
                        Home
                    </Link>
                    <Link href="/about" className="nav-item nav-link">
                        About
                    </Link>
                    <Link href="/services" className="nav-item nav-link">
                        Services
                    </Link>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                            <IoIosArrowDown />
                        </a>
                        <div className="dropdown-menu fade-up m-0">
                            <Link href="/booking" className="dropdown-item">
                                Booking
                            </Link>
                            <Link href="/team" className="dropdown-item">
                                Technicians
                            </Link>
                            <Link href="/testimonial" className="dropdown-item">
                                Testimonial
                            </Link>
                            <Link href="/404" className="dropdown-item">
                                404 Page
                            </Link>
                        </div>
                    </div>
                    <Link href="/contact" className="nav-item nav-link">
                        Contact
                    </Link>
                </div>
                <Link
                    href="/quote"
                    className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                >
                    Get A Quote<i className="fa fa-arrow-right ms-3"></i>
                </Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
