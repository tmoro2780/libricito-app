import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bookIcon from '../public-img/iconos/book.ico'; // Asegurate de que exista

export const Navegador1 = () => {
    return (
    <Navbar
    bg="white"
    expand="md"
    fixed="top"
    style={{ backgroundColor: 'rgb(255, 231, 228)' }}
    className="shadow-sm"
    >
        <Container>
            {/* Marca / Logo */}
            <Navbar.Brand as={Link} to="/" className="text-dark fw-bold d-flex align-items-center">
            <img
                src={bookIcon}
                alt="Logo Libricito"
                width="30"
                height="30"
                className="d-inline-block align-text-top me-2"
                style={{ objectFit: 'contain' }}
            />
            Libricito
            </Navbar.Brand>

            {/* Botón hamburguesa */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Menú colapsable */}
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            
            {/* Navegación principal */}
            <Nav className="fw-semibold">
                <Nav.Link as={Link} to="/buscar/libros" className="text-dark rounded-pill me-2">
                Libros
                </Nav.Link>
                <Nav.Link as={Link} to="/locales" className="text-dark rounded-pill me-2">
                Locales
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-dark rounded-pill">
                About
                </Nav.Link>
            </Nav>

            {/* Botones sesión */}
            <Nav className="fw-semibold">
                <Nav.Link as={Link} to="/inicio-sesion" className="me-2 p-0">
                <Button
                    variant="light"
                    className="rounded-pill fw-semibold"
                    style={{ backgroundColor: 'bisque' }}
                >
                    Iniciar Sesión
                </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/registro" className="p-0">
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
