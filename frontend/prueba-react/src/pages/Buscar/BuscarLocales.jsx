// src/pages/Buscar/BuscarLocales.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Collapse, Button } from 'react-bootstrap';
import { Navegador2 } from '../../components/Navbar2.jsx';
import { Footer } from '../../components/Footer.jsx';
import { CardLocal } from './components-buscar/Cardlocal.jsx';
import localImg from '../../public-img/local.jpg';

export const BuscarLocales = () => {
  const [showRegiones, setShowRegiones] = useState(false);
  const [showLocalidades, setShowLocalidades] = useState(false);
  const [showBarrios, setShowBarrios] = useState(false);

  const handleToggle = (setter) => () => setter(prev => !prev);

  return (
    <>
      <Navegador2 />
      <Container className="py-5">
        <Row className="py-5">
          <Col md={2} className="bg-white px-4 rounded-3 shadow-sm me-3">
            {/* Región */}
            <div className="pt-3">
              <h5 className="text-dark fw-light fs-6">Región</h5>
              {['Buenos Aires', 'CABA', 'Cordoba', 'Santa Fe', 'Mendoza'].map((r, idx) => (
                <Form.Check key={idx} type="checkbox" label={r} className="mb-2" />
              ))}
              <Collapse in={showRegiones}>
                <div>
                  {['Misiones', 'Tucuman', 'Entre Rios', 'Corrientes', 'Salta'].map((r, idx) => (
                    <Form.Check key={idx} type="checkbox" label={r} className="mb-2" />
                  ))}
                </div>
              </Collapse>
              <Button variant="link" className="p-0 small text-secondary" onClick={handleToggle(setShowRegiones)}>
                {showRegiones ? 'Ver menos' : 'Ver más'}
              </Button>
              <div className="w-100 mt-3 border-bottom"></div>
            </div>

            {/* Localidad */}
            <div className="pt-3">
              <h5 className="text-dark fw-light fs-6">Localidad</h5>
              {['La Plata', 'Mar del Plata', 'Quilmes', 'Villa Celina', 'Nordelta'].map((l, idx) => (
                <Form.Check key={idx} type="checkbox" label={l} className="mb-2" />
              ))}
              <Collapse in={showLocalidades}>
                <div>
                  {['Avellaneda', 'Ciudad de Cordoba', 'Rosario', 'San Miguel de Tucuman', 'Santa Fe'].map((l, idx) => (
                    <Form.Check key={idx} type="checkbox" label={l} className="mb-2" />
                  ))}
                </div>
              </Collapse>
              <Button variant="link" className="p-0 small text-secondary" onClick={handleToggle(setShowLocalidades)}>
                {showLocalidades ? 'Ver menos' : 'Ver más'}
              </Button>
              <div className="w-100 mt-3 border-bottom"></div>
            </div>

            {/* Abierto/Cerrado */}
            <div className="pt-3">
              <h5 className="text-dark fw-light fs-6">Abierto/Cerrado</h5>
              {['Abierto Ahora', 'Cerrado Ahora'].map((s, idx) => (
                <Form.Check key={idx} type="checkbox" label={s} className="mb-2" />
              ))}
              <div className="w-100 mt-3 border-bottom"></div>
            </div>

            {/* Barrio */}
            <div className="pt-3">
              <h5 className="text-dark fw-light fs-6">Barrio</h5>
              {['Palermo', 'Puerto Madero', 'Barracas', 'Retiro', 'San Telmo'].map((b, idx) => (
                <Form.Check key={idx} type="checkbox" label={b} className="mb-2" />
              ))}
              <Collapse in={showBarrios}>
                <div>
                  {['Recoleta', 'La Boca', 'Boedo', 'Almagro', 'San Cristobal'].map((b, idx) => (
                    <Form.Check key={idx} type="checkbox" label={b} className="mb-2" />
                  ))}
                </div>
              </Collapse>
              <Button variant="link" className="p-0 small text-secondary" onClick={handleToggle(setShowBarrios)}>
                {showBarrios ? 'Ver menos' : 'Ver más'}
              </Button>
              <div className="w-100 mt-3 border-bottom"></div>
            </div>
          </Col>

          {/* Resultados */}
          <Col md={9}>
            <Row>
              <Col md={4} className="mb-4">
                <CardLocal
                  titulo="Moro's Shop"
                  autor="German Garmendia"
                  precio="45000"
                  genero="Sigma"
                  imagen={localImg}
                />
              </Col>
              <Col md={4} className="mb-4">
                <CardLocal
                  titulo="Moro's Shop"
                  autor="German Garmendia"
                  precio="45000"
                  genero="Sigma"
                  imagen={localImg}
                />
              </Col>
              <Col md={4} className="mb-4">
                <CardLocal
                  titulo="Moro's Shop"
                  autor="German Garmendia"
                  precio="45000"
                  genero="Sigma"
                  imagen={localImg}
                />
              </Col>
              <Col md={4} className="mb-4">
                <CardLocal
                  titulo="Nahuel's Shop"
                  autor="German Garmendia"
                  precio="45000"
                  genero="Sigma"
                  imagen={localImg}
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
