"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar, FaArrowCircleRight } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    const pathname = usePathname();

    return (
        <Navbar
            bg="white"
            variant="light"
            expand="lg"
            className="shadow sticky-top p-0"
        >
            <Container fluid>
                <Link
                    href="/"
                    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
                >
                    <h2 className="m-0 text-primary">
                        <FaCar className="me-2 mb-1" />
                        Auto Treatment
                    </h2>
                </Link>
                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse">
                    <Nav className="ms-auto p-4 p-lg-0">
                        <Link
                            href="/"
                            className={`nav-link ${
                                pathname === "/" ? "active" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`nav-link ${
                                pathname === "/about" ? "active" : ""
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className={`nav-link ${
                                pathname === "/services" ? "active" : ""
                            }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className={`nav-link ${
                                pathname === "/contact" ? "active" : ""
                            }`}
                        >
                            Contact
                        </Link>
                    </Nav>
                    <Link
                        href="/contact"
                        className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                    >
                        Get A Quote <FaArrowCircleRight className="mb-1" />
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
