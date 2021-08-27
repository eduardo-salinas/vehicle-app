import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiCarWheel } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <GiCarWheel />
                    </Link>
                </Navbar.Brand>
                <Nav.Link>
                    <Link to="/home">
                        Home
                    </Link>
                </Nav.Link>
            </Container>
        </Navbar>
    )
};

export default NavBar;