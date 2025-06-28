import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Form } from 'react-bootstrap';
import { Navegador2 } from '../../components/Navbar2.jsx';
import { Footer } from '../../components/Footer.jsx';
import { CardLibro } from './components-buscar/Cardlibro.jsx';
import libroImg from '../../public-img/Libros/German_Garmendia.jpg';

export const BuscarLibros = () => {
    const [showGenres, setShowGenres] = useState(false);
    const [showAutores, setShowAutores] = useState(false);
    const [showLocales, setShowLocales] = useState(false);

    const handleToggle = (setter) => () => setter(prev => !prev);

    return (
        <>
        <Navegador2 />
        <Container className="py-5">
            <Row className="py-5">
            {/* Filtros */}
            <Col md={2} className="bg-white px-4 rounded-3 shadow-sm me-3">
                {/* Género */}
                <div className="pt-3">
                    <h5 className="text-dark fw-light fs-6">Género</h5>
                    {['Horror', 'Novela', 'Misterio', 'Ciencia Ficción', 'Fantasía'].map((g, i) => (
                        <Form.Check key={i} type="checkbox" label={g} className="mb-2" />
                    ))}
                    <Collapse in={showGenres}>
                        <div>
                            {['Romance', 'Aventura', 'Drama', 'Biografía', 'Historia'].map((g, i) => (
                                <Form.Check key={i} type="checkbox" label={g} className="mb-2" />
                            ))}
                        </div>
                    </Collapse>
                    <button onClick={handleToggle(setShowGenres)} className="btn btn-link p-0 small text-secondary">
                        {showGenres ? 'Ver menos' : 'Ver más'}
                    </button>
                    <div className="w-100 mt-3 border-bottom"></div>
                </div>

                {/* Autores */}
                <div className="pt-3">
                    <h5 className="text-dark fw-light fs-6">Autores</h5>
                    {['Stephen King', 'J.K. Rowling', 'Isaac Asimov', 'George Orwell', 'J.R.R. Tolkien'].map((a, i) => (
                        <Form.Check key={i} type="checkbox" label={a} className="mb-2" />
                    ))}
                    <Collapse in={showAutores}>
                        <div>
                            {['Haruki Murakami', 'Jane Austen', 'Gabriel García Márquez', 'Charles Dickens', 'Edgar Allan Poe'].map((a, i) => (
                                <Form.Check key={i} type="checkbox" label={a} className="mb-2" />
                            ))}
                        </div>
                    </Collapse>
                    <button onClick={handleToggle(setShowAutores)} className="btn btn-link p-0 small text-secondary">
                        {showAutores ? 'Ver menos' : 'Ver más'}
                    </button>
                    <div className="w-100 mt-3 border-bottom"></div>
                </div>

                {/* Locales */}
                <div className="pt-3">
                    <h5 className="text-dark fw-light fs-6">Locales</h5>
                    {['Librería El Sol', 'Café Lectura', 'Biblioteca Central', 'Punto de Libro', 'Historias Vivas'].map((l, i) => (
                        <Form.Check key={i} type="checkbox" label={l} className="mb-2" />
                    ))}
                    <Collapse in={showLocales}>
                        <div>
                            {['Lectura Libre', 'Rincón del Lector', 'Cultura Cafetal', 'Luz de Libro', 'La Página'].map((l, i) => (
                                <Form.Check key={i} type="checkbox" label={l} className="mb-2" />
                            ))}
                        </div>
                    </Collapse>
                    <button onClick={handleToggle(setShowLocales)} className="btn btn-link p-0 small text-secondary">
                        {showLocales ? 'Ver menos' : 'Ver más'}
                    </button>
                    <div className="w-100 mt-3 border-bottom"></div>
                </div>
            </Col>

            {/* Resultados */}
            <Col md={9}>
                <Row>
                    <Col md={4} className="mb-4">
                        <CardLibro
                            titulo="CHUPAELPERRO"
                            autor="German Garmendia"
                            precio="$45.000"
                            genero="Sigma"
                            imagen={libroImg}
                        />
                    </Col>
                                        <Col md={4} className="mb-4">
                        <CardLibro
                            titulo="CHUPAELPERRO"
                            autor="German Garmendia"
                            precio="$45.000"
                            genero="Sigma"
                            imagen={libroImg}
                        />
                    </Col>
                                        <Col md={4} className="mb-4">
                        <CardLibro
                            titulo="CHUPAELPERRO"
                            autor="German Garmendia"
                            precio="$45.000"
                            genero="Sigma"
                            imagen={libroImg}
                        />
                    </Col>
                                        <Col md={4} className="mb-4">
                        <CardLibro
                            titulo="CHUPAELPERRO"
                            autor="German Garmendia"
                            precio="$45.000"
                            genero="Sigma"
                            imagen={libroImg}
                        />
                    </Col>
                </Row>
            </Col>
            
            </Row>
        </Container>
        <Footer />
        </>
    );
};
