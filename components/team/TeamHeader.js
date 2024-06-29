import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TechniciansHeader = () => {
    return (
        <div
            className="container-fluid page-header mb-5 p-0"
            style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }}
        >
            <div className="container-fluid page-header-inner py-5">
                <Container className="text-center">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        Technicians
                    </h1>
                </Container>
            </div>
        </div>
    );
};

export default TechniciansHeader;
