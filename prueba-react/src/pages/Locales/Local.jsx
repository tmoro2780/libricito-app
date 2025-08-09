// src/pages/Locales/Local.jsx
import React from "react";
import { Col, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navegador1 } from "../../components/Navbar1.jsx";
import { Footer } from "../../components/Footer.jsx";

// imagen de ejemplo (podés cambiarla por la del local real)
import localImg from "../../public-img/imagen_local/local.jpg";

export const Local = () => {
  // TODO: cuando conectes al backend, obtené estos datos por id (useParams)
  const data = {
    id: 1,
    nombre: "Librería Central",
    descripcion:
      "Somos una librería de barrio con amplio catálogo en textos escolares, novelas y cómics. Atención personalizada y reservas por WhatsApp.",
    direccion: "La Rioja 429",
    ubicacion: "Buenos Aires, Argentina",
    horario: "Lun a Vie 9–18 • Sáb 10–14",
    telefono: "+54 9 11 2386-5935",
    email: "contacto@libreriacentral.com",
    estado: "abierto", // abierto | cerrado | temporal
    img: localImg,
  };

  const estadoLower = (data.estado || "").toLowerCase();
  const estadoBadge =
    estadoLower === "abierto"
      ? { text: "Abierto", bg: "success" }
      : estadoLower === "cerrado"
      ? { text: "Cerrado", bg: "danger" }
      : { text: "Temporal", bg: "secondary" };

  return (
    <>
      <Navegador1 />

      <main className="container py-5">
        <Col md={12}>
          <Row>
            {/* Columna izquierda: imagen/es */}
            <Col md={6}>
              <Row>
                <div>
                  <img
                    src={data.img}
                    alt={`Foto de ${data.nombre}`}
                    className="h-100 w-100 rounded border"
                    style={{ objectFit: "cover", maxHeight: 520 }}
                  />
                  <div>
                    {/* TODO: galería de imágenes del local (miniaturas) */}
                  </div>
                </div>
              </Row>
            </Col>

            {/* Columna derecha: info del local */}
            <Col md={6}>

                <Row>
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <h1 className="mb-0">{data.nombre}</h1>
                        <Badge bg={estadoBadge.bg}>{estadoBadge.text}</Badge>
                    </div>
                </Row>

              <Row>
                <div className="d-flex justify-content-around gap-2 flex-wrap">
                  <div className="text-center">
                    <h2 className="h5">Dirección</h2>
                    <p className="mb-2">{data.direccion}</p>
                  </div>
                  <div className="text-center">
                    <h2 className="h5">Ubicación</h2>
                    <p className="mb-2">{data.ubicacion}</p>
                  </div>
                </div>
              </Row>
              <Row>

                <h2 className="h4 mt-3">Descripción</h2>
                <p className="mb-3">{data.descripcion}</p>
              </Row>

              <Row>

                <div className="d-flex justify-content-around gap-2 flex-wrap mt-2">
                  <div className="text-center">
                    <h2 className="h5">Horario</h2>
                    <p className="mb-2">{data.horario}</p>
                  </div>
                  <div className="text-center">
                    <h2 className="h5">Teléfono</h2>
                    <p className="mb-2">{data.telefono}</p>
                  </div>
                  <div className="text-center">
                    <h2 className="h5">Email</h2>
                    <p className="mb-2">{data.email}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-3 mt-4">
                  {/* Linkea al formulario de contacto del local (ajustar ruta real) */}
                  <Link className="btn btn-primary" to={`/contacto?local=${data.id}`}>
                    Consultar local
                  </Link>
                  <button className="btn btn-primary">
                    Agregar a favoritos
                  </button>
                </div>
              </Row>
            </Col>
          </Row>

          {/* Sugerencias: locales relacionados o libros destacados del local */}
          <Row className="mt-5">
            {/* TODO: componente mini-card para “Otros locales cercanos” o “Libros destacados” */}
          </Row>
        </Col>
      </main>

      <Footer />
    </>
  );
};
