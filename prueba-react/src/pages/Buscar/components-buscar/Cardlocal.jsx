// src/components/CardLocal.jsx
import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultImg from "../../../public-img/imagen_local/local.jpg";

export const CardLocal = ({
  id,
  nombre,         // string - nombre del local
  ubicacion,      // string - dirección/barrio/ciudad
  horario,        // string - ej: "Lun a Vie 9–18"
  estado,         // "abierto" | "cerrado" | "temporal"
  imagen,         // url o import
  distanciaKm,    // number opcional
  rating          // number opcional 0–5
}) => {
  const imgSrc = imagen || defaultImg;

  const normalized = (estado || "").toLowerCase();
  const badge = {
    text:
      normalized === "abierto"
        ? "Abierto"
        : normalized === "cerrado"
        ? "Cerrado"
        : "Temporal",
    bg:
      normalized === "abierto"
        ? "success"
        : normalized === "cerrado"
        ? "danger"
        : "secondary",
  };

  return (
    <Card className="h-100 shadow-sm border-1 border-dark">
      <div className="text-center pt-3 px-3">
        <Card.Img
          variant="top"
          src={imgSrc}
          alt={`Foto de ${nombre || "local"}`}
          style={{ objectFit: "cover", height: "250px", width: "160px" }}
          className="rounded mx-auto d-block"
        />
      </div>

      <Card.Body className="d-flex flex-column text-center">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <Card.Title className="text-truncate fw-bold mb-0">
            {nombre || "Local"}
          </Card.Title>
          <Badge bg={badge.bg}>{badge.text}</Badge>
        </div>

        {ubicacion && (
          <Card.Text className="text-muted small mb-1">
            📍 {ubicacion}
          </Card.Text>
        )}

        {typeof distanciaKm === "number" && (
          <Card.Text className="text-muted small mb-1">
            🚶 {distanciaKm.toFixed(1)} km
          </Card.Text>
        )}

        {horario && (
          <Card.Text className="text-muted small mb-3">🕒 {horario}</Card.Text>
        )}

        {typeof rating === "number" && (
          <div className="mb-2">
            <small className="text-muted d-block">Valoración</small>
            <strong>{rating.toFixed(1)} / 5</strong>
          </div>
        )}

        <div className="mt-auto">
          <Button
            as={Link}
            to={`/locales/${id ?? 1}`}
            variant="primary"
            size="sm"
            className="mt-3 w-100 fw-semibold"
          >
            Ver detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
