import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topbar() {
    return (
        <div>
            <Navbar expand="lg" className=" navbar bg-[#4CAF50]" id="navbar">
                <Container>
                    <Navbar.Brand className='text-white' as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Topbar;
