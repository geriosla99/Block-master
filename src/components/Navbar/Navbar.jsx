import React from 'react'
import { Link } from 'react-router-dom'
import Search from "../Search/Search";
import All from "../All/All";
import MoreValued from "../MoreValue/MoreValue";
import LessValued from "../LessValued/LessValued";
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarBM = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
                src="https://i.imgur.com/RJQjzuf.png"
                width="106,81"
                height="64"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link to="/"><All/></Nav.Link>
            <Nav.Link to="/"><MoreValued/></Nav.Link>
            <Nav.Link to="/"><LessValued/></Nav.Link>
            <Nav.Link to="/"><Search/></Nav.Link>
            <Nav.Link><Link to='/login'>
                        Iniciar sesion
                    </Link></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarBM;
