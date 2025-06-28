import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse, Form } from 'react-bootstrap';
import libroImg from '../../public-img/Libros/German_Garmendia.jpg';


export const BuscarLibros = () => {
    const [showGenres, setShowGenres] = useState(false);
    const [showAutores, setShowAutores] = useState(false);
    const [showLocales, setShowLocales] = useState(false);

    const handleToggle = (sectionSetter) => () => {
        sectionSetter(prev => !prev);
    };

    return (
        <Container className="py-5">
        <Row className="py-5">
            {/* Filtros */}
            <Col md={2} className="bg-white px-4 rounded-3 shadow-sm me-3">
            {/* Géneros */}
            <div className="pt-3">
                <h5 className="text-dark fw-light fs-6">Género</h5>
                <Form.Check type="checkbox" id="horror" label="Horror" className="mb-2" />
                <Form.Check type="checkbox" id="novela" label="Novela" className="mb-2" />
                <Form.Check type="checkbox" id="misterio" label="Misterio" className="mb-2" />
                <Form.Check type="checkbox" id="ciencia" label="Ciencia Ficción" className="mb-2" />
                <Form.Check type="checkbox" id="fantasia" label="Fantasía" className="mb-2" />

                <Collapse in={showGenres}>
                <div>
                    <Form.Check type="checkbox" id="romance" label="Romance" className="mb-2" />
                    <Form.Check type="checkbox" id="aventura" label="Aventura" className="mb-2" />
                    <Form.Check type="checkbox" id="drama" label="Drama" className="mb-2" />
                    <Form.Check type="checkbox" id="biografia" label="Biografía" className="mb-2" />
                    <Form.Check type="checkbox" id="historia" label="Historia" className="mb-2" />
                </div>
                </Collapse>
                <Button variant="link" className="p-0 small text-secondary" onClick={handleToggle(setShowGenres)}>
                {showGenres ? 'Ver menos' : 'Ver más'}
                </Button>
                <div className="w-100 mt-3 border-bottom"></div>
            </div>

            {/* Autores */}
            <div className="pt-3">
                <h5 className="text-dark fw-light fs-6">Autores</h5>
                <Form.Check type="checkbox" id="king" label="Stephen King" className="mb-2" />
                <Form.Check type="checkbox" id="rowling" label="J.K. Rowling" className="mb-2" />
                <Form.Check type="checkbox" id="asimov" label="Isaac Asimov" className="mb-2" />
                <Form.Check type="checkbox" id="orwell" label="George Orwell" className="mb-2" />
                <Form.Check type="checkbox" id="tolkien" label="J.R.R. Tolkien" className="mb-2" />

                <Collapse in={showAutores}>
                <div>
                    <Form.Check type="checkbox" id="murakami" label="Haruki Murakami" className="mb-2" />
                    <Form.Check type="checkbox" id="austen" label="Jane Austen" className="mb-2" />
                    <Form.Check type="checkbox" id="gabo" label="Gabriel García Márquez" className="mb-2" />
                    <Form.Check type="checkbox" id="dickens" label="Charles Dickens" className="mb-2" />
                    <Form.Check type="checkbox" id="poe" label="Edgar Allan Poe" className="mb-2" />
                </div>
                </Collapse>
                <Button variant="link" className="p-0 small text-secondary" onClick={handleToggle(setShowAutores)}>
                {showAutores ? 'Ver menos' : 'Ver más'}
                </Button>
                <div className="w-100 mt-3 border-bottom"></div>
            </div>

            {/* Locales */}
            <div className="pt-3">
                <h5 className="text-dark fw-light fs-6">Locales</h5>
                <Form.Check type="checkbox" id="sol" label="Librería El Sol" className="mb-2" />
                <Form.Check type="checkbox" id="cafe" label="Café Lectura" className="mb-2" />
                <Form.Check type="checkbox" id="biblio" label="Biblioteca Central" className="mb-2" />
                <Form.Check type="checkbox" id="punto" label="Punto de Libro" className="mb-2" />
                <Form.Check type="checkbox" id="vivas" label="Historias Vivas" className="mb-2" />

                <Collapse in={showLocales}>
                <div>
                    <Form.Check type="checkbox" id="libre" label="Lectura Libre" className="mb-2" />
                    <Form.Check type="checkbox" id="rincon" label="Rincón del Lector" className="mb-2" />
                    <Form.Check type="checkbox" id="cafetal" label="Cultura Cafetal" className="mb-2" />
                    <Form.Check type="checkbox" id="luz" label="Luz de Libro" className="mb-2" />
                    <Form.Check type="checkbox" id="pagina" label="La Página" className="mb-2" />
                </div>
                </Collapse>
                <Button variant="link" className="p-0 small text-secondary" onClick={handleToggle(setShowLocales)}>
                {showLocales ? 'Ver menos' : 'Ver más'}
                </Button>
                <div className="w-100 mt-3 border-bottom"></div>
            </div>
            </Col>

            {/* Resultados de libros */}
            <Col md={9}>
            <Row>
                <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm border-1 border-dark">
                    <div className="text-center pt-3 px-3">
                    <Card.Img
                        variant="top"
                        src={libroImg}
                        style={{ objectFit: 'cover', height: '250px', width: '160px' }}
                        className="rounded mx-auto d-block"
                    />
                    </div>
                    <Card.Body className="d-flex flex-column text-center">
                    <Card.Title className="text-truncate fw-bold mb-2">CHUPAELPERRO</Card.Title>
                    <Card.Text className="text-muted small mb-3">Autor: German Garmendia</Card.Text>
                    <hr className="my-2" />
                    <div className="mt-auto">
                        <div className="d-flex justify-content-around mb-2">
                        <div>
                            <small className="text-muted d-block">Precio</small>
                            <h6 className="text-success fw-bold mb-0">$45.000</h6>
                        </div>
                        <div>
                            <small className="text-muted d-block">Género</small>
                            <p className="mb-0">Sigma</p>
                        </div>
                        </div>
                        <Button variant="primary" size="sm" className="mt-3 w-100">
                        Ver Detalles
                        </Button>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Col>
        </Row>
        </Container>
  );
};