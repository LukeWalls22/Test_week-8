import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Dropdown, Row } from "react-bootstrap";

function MyMain () {
    return (
        <Container fluid className="px-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="mb-4">TV Shows</h2>
                    <div className="dropdown ml-4 mt-1">
                        <Dropdown>
                            <Dropdown.Toggle 
                            variant="dark" 
                            id="dropdown-basic" 
                            className="GlobalBG btnBorder rounded-0">
                                Genres {" "}
                            </Dropdown.Toggle>

                            <Dropdown.Menu data-bs-theme="dark">
                                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#">Drama</Dropdown.Item>
                                <Dropdown.Item href="#">Thriller</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div>
                    <i class="fa fa-th-large icons"></i>
                    <i class="fa fa-th icons"></i>
                </div>
            </div>

            <h4 className="text-start">Trending Now</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <div className="col mb-2 px-1">
                <img className="img-fluid" src="assets/1.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/2.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/3.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/4.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/5.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/6.png" alt="movie picture" />
                </div>
            </Row>

            <h4 className="text-start">Watch it Again</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <div className="col mb-2 px-1">
                <img className="img-fluid" src="assets/7.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/8.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/9.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/10.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/11.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/12.png" alt="movie picture" />
                </div>
            </Row>

            <h4 className="text-start">New Releases</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                <div className="col mb-2 px-1">
                <img className="img-fluid" src="assets/13.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/14.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/15.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/16.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/17.png" alt="movie picture" />
                </div>
                <div className="col mb-2 px-1">
                    <img className="img-fluid" src="assets/18.png" alt="movie picture" />
                </div>
            </Row>
            
        </Container>
    )
}

export default MyMain