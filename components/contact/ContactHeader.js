import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const ContactHeader = () => {
    return (
        <div
            className="container-fluid page-header mb-5 p-0"
            style={{ backgroundImage: "url('/img/carousel-bg-1.jpg')" }}
        >
            <div className="container-fluid page-header-inner py-5">
                <Container className="text-center">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        Contact
                    </h1>
                </Container>
            </div>
        </div>
    );
};

export default ContactHeader;
