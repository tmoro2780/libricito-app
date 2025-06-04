import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';

export const Navegador = () => {
    return (
    <Navbar
        bg="white"
        expand="md"
        fixed="top"
        style={{ backgroundColor: 'rgb(255, 231, 228)' }}
        className="shadow-sm"
    >
        <Container>
        <Navbar.Brand href="index.html" className="text-dark fw-bold">Libricito</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="fw-semibold">
            <Nav.Link href="busqueda-libros.html" className="text-dark rounded-pill me-2">
                Libros
            </Nav.Link>
            <Nav.Link href="busqueda-local.html" className="text-dark rounded-pill me-2">
                Locales
            </Nav.Link>
            <Nav.Link href="about.html" className="text-dark rounded-pill">
                About
            </Nav.Link>
            </Nav>

            <Nav className="fw-semibold">
            <Nav.Link href="login.html" className="me-2 p-0">
                <Button
                variant="light"
                className="rounded-pill fw-semibold"
                style={{ backgroundColor: 'bisque' }}
                >
                Iniciar Sesión
                </Button>
            </Nav.Link>
            <Nav.Link href="signup.html" className="p-0">
                <Button
                variant="light"
                className="rounded-pill fw-semibold"
                style={{ backgroundColor: 'rgb(255, 179, 179)' }}
                >
                Registrarse
                </Button>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};
