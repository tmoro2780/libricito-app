import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bookIcon from '../public-img/iconos/book.ico';
import perfilImg from '../public-img/imagen_perfil/imagen_perfil.jpg';

export const Navegador2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  return (
    <Navbar
      bg="white"
      expand="md"
      fixed="top"
      className="shadow-sm"
      style={{ backgroundColor: 'rgb(255, 231, 228)' }}
    >
      <Container>
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

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className="justify-content-between">
          <Nav className="nav-pills fw-semibold">
            <Nav.Link as={Link} to="/buscar/libros" className="text-dark rounded-pill me-2">
              Libros
            </Nav.Link>
            <Nav.Link as={Link} to="/buscar/locales" className="text-dark rounded-pill me-2">
              Locales
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark rounded-pill">
              About
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            {/* Barra de búsqueda */}
            <Form className="d-flex" role="search">
              <div className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Buscar libros..."
                  className="search-input"
                />
                <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-2 text-muted"></i>
              </div>
            </Form>

            {/* Menú de perfil */}
            <Dropdown show={showDropdown} onToggle={setShowDropdown} align="end">
              <Dropdown.Toggle
                as="button"
                className="btn btn-dark rounded-circle p-0 d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundImage: `url(${perfilImg})`,
                  backgroundSize: 'cover',
                  border: 'none',
                }}
                onClick={toggleDropdown}
              >
                <i className="bi bi-person-fill fs-5 text-white"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="shadow-sm">
                <Dropdown.Header>¡Hola, Vendedor!</Dropdown.Header>
                <Dropdown.Item as={Link} to="/dashboard/local">Mi Local</Dropdown.Item>
                <Dropdown.Item as={Link} to="/dashboard/local/catalogo">Catálogo</Dropdown.Item>
                <Dropdown.Item as={Link} to="/dashboard/local/catalogo/agregar">Agregar Producto</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-danger" onClick={() => alert('Cerrar sesión')}>Cerrar Sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
