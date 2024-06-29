import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers = [
    {
        name: "Full Name",
        designation: "Designation",
        image: "img/team-1.jpg",
        delay: "0.1s",
        social: [
            { icon: "fab fa-facebook-f", link: "" },
            { icon: "fab fa-twitter", link: "" },
            { icon: "fab fa-instagram", link: "" },
        ],
    },
    {
        name: "Full Name",
        designation: "Designation",
        image: "img/team-2.jpg",
        delay: "0.3s",
        social: [
            { icon: "fab fa-facebook-f", link: "" },
            { icon: "fab fa-twitter", link: "" },
            { icon: "fab fa-instagram", link: "" },
        ],
    },
    {
        name: "Full Name",
        designation: "Designation",
        image: "img/team-3.jpg",
        delay: "0.5s",
        social: [
            { icon: "fab fa-facebook-f", link: "" },
            { icon: "fab fa-twitter", link: "" },
            { icon: "fab fa-instagram", link: "" },
        ],
    },
    {
        name: "Full Name",
        designation: "Designation",
        image: "img/team-4.jpg",
        delay: "0.7s",
        social: [
            { icon: "fab fa-facebook-f", link: "" },
            { icon: "fab fa-twitter", link: "" },
            { icon: "fab fa-instagram", link: "" },
        ],
    },
];

const OurTechnicians = () => {
    return (
        <div className="container-xxl py-5">
            <Container>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase">
                        Our Technicians
                    </h6>
                    <h1 className="mb-5">Our Expert Technicians</h1>
                </div>
                <Row className="g-4">
                    {teamMembers.map((member, index) => (
                        <Col
                            key={index}
                            lg={3}
                            md={6}
                            className="wow fadeInUp"
                            data-wow-delay={member.delay}
                        >
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <Image
                                        className="img-fluid"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                        {member.social.map((social, i) => (
                                            <Button
                                                key={i}
                                                className="btn btn-square mx-1"
                                                href={social.link}
                                            >
                                                <i className={social.icon}></i>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">
                                        {member.name}
                                    </h5>
                                    <small>{member.designation}</small>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default OurTechnicians;
