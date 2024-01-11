import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MyFooter () {
    return (
        <Container fluid className="px-4">

            <Row className="text-center mt-5">
                <Col className="col-6 offset-3">
                    <Row>
                        <Col>
                            <i class="fab fa-facebook-f brand"></i>
                            <i class="fab fa-instagram brand"></i>
                            <i class="fab fa-twitter brand"></i>
                            <i class="fab fa-youtube brand"></i>
                        </Col>
                    </Row>

                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                        <Col>
                            <Row>
                                <Col className="col-12 footer-links">
                                <p>
                                    <a href="#" alt="footer link">Audio and Subtitles</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Media Center</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Privacy</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Contact us</a>
                                </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                               <Col className="col-12 footer-links">
                                <p>
                                    <a href="#" alt="footer link">Audio Description</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Investor Relations</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Legal Notices</a>
                                </p>
                               </Col> 
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                               <Col className="col-12 footer-links">
                                <p>
                                    <a href="#" alt="footer link">Help Center</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Jobs</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Cookie Preferences</a>
                                </p>
                               </Col> 
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                               <Col className="col-12 footer-links">
                                <p>
                                    <a href="#" alt="footer link">Gift Cards</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Terms of Use</a>
                                </p>
                                <p>
                                    <a href="#" alt="footer link">Corporate Information</a>
                                </p>
                               </Col> 
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-12 text-start mb-2">
                            <Button variant="outline-light" className="btn-sm footer-button rounded-0 mt-3">Service Code</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-12 text-left mb-2 mt-2 copyright text-start">
                            © 1997-2022 Netflix, Inc.
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>
    )
}

export default MyFooter