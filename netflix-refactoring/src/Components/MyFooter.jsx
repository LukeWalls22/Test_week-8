import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyFooter () {
    return (
        <Container fluid className="px-4">

            <Row className="text-center mt-5">
                <Col className="col-6 offset-3">
                    <Row>
                        <Col>
                            <i class="fab fa-facebook-f brand"></i>
                            <i class="fab fa-instagram brand"></i>
                            <i class="fa fa-twitter footer-icon"></i>
                            <i class="fa fa-youtube footer-icon"></i>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default MyFooter