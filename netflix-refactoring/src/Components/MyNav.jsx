import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav () {
    return (

      <Navbar expand="lg" className="bg-body-tertiary GlobalBG fw-bold" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand href="#">
                <img
                src="/assets/logo.png"
                width="100"
                height="55"
                className="d-inline-block align-top"
                alt="Netflix logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="text-start">
            <Nav
                className="me-auto my-2 my-lg-0"
            >
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link className="active" href="#">TV Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Recently Added</Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav.Link href="#"><i class="fa fa-search icons"></i></Nav.Link>
            <Nav.Link href="#" id="kids">KIDS</Nav.Link>
            <Nav.Link href="#"><i class="fa fa-bell icons"></i></Nav.Link>
            <Nav.Link href="#"><i class="fa fa-user icons"></i></Nav.Link>

            </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

export default MyNav