import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Dropdown, Row } from "react-bootstrap";
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

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

            <Gallery1 />

            <Gallery2 />

            <Gallery3 />

        </Container>
    )
}

export default MyMain