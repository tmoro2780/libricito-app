import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const CardLibro = ({ titulo, autor, precio, genero, imagen }) => {
  return (
    <Card className="h-100 shadow-sm border-1 border-dark">
      <div className="text-center pt-3 px-3">
        <Card.Img
          variant="top"
          src={imagen}
          style={{ objectFit: 'cover', height: '250px', width: '160px' }}
          className="rounded mx-auto d-block"
        />
      </div>
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="text-truncate fw-bold mb-2">{titulo}</Card.Title>
        <Card.Text className="text-muted small mb-3">Autor: {autor}</Card.Text>
        <hr className="my-2" />
        <div className="mt-auto">
          <div className="d-flex justify-content-around mb-2">
            <div>
              <small className="text-muted d-block">Precio</small>
              <h6 className="text-success fw-bold mb-0">{precio}</h6>
            </div>
            <div>
              <small className="text-muted d-block">Género</small>
              <p className="mb-0">{genero}</p>
            </div>
          </div>
          <Button variant="primary" size="sm" className="mt-3 w-100">
            Ver Detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};