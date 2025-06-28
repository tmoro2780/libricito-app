import React from 'react';
import { Link } from 'react-router-dom';
import imagenLibreria from '../public-img/imagen-libreria.jpg';

export const Footer = () => {
  return (
    <footer className="bg-white py-5 border-top">
      <div className="container-fluid">
        <div className="row py-4 justify-content-center text-center text-md-start g-4">

          {/* Logo y descripción */}
          <div className="col-12 col-md-3">
            <Link to="/" className="d-inline-block mb-3 text-decoration-none">
              <img
                src={imagenLibreria}
                alt="Logo Libricito"
                style={{ height: '60px', width: '60px', objectFit: 'cover' }}
                className="rounded-circle mb-2"
              />
              <span className="fw-bold fs-4 text-dark d-block">Libricito</span>
            </Link>
            <p className="text-muted small mb-3">
              Tu página web favorita para buscar tus libros y conectar con librerías cercanas.
            </p>
            <h5 className="fw-normal text-muted small mb-0">&copy; 2025 Libricito. Todos los derechos reservados.</h5>
            <h5 className="fw-normal text-muted small">Desarrollado por Inteligencia Muruchi.</h5>
          </div>

          {/* Contacto */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="mailto:info@libricito.com"
                  className="text-decoration-none text-dark d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <i className="bi bi-envelope me-2"></i> info@libricito.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel:+541123456789"
                  className="text-decoration-none text-dark d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <i className="bi bi-phone me-2"></i> +54 11 2345 6789
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <i className="bi bi-geo-alt me-2"></i> Villa Celina, Buenos Aires, Argentina
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces útiles */}
          <div className="col-12 col-md-2">
            <h5 className="fw-bold mb-3">Explorar</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link to="/nosotros" className="text-decoration-none text-dark">Sobre nosotros</Link></li>
              <li className="mb-2"><Link to="/contacto" className="text-decoration-none text-dark">Contáctanos</Link></li>
              <li className="mb-2"><Link to="/ayuda" className="text-decoration-none text-dark">Ayuda</Link></li>
              <li className="mb-2"><Link to="/servicios" className="text-decoration-none text-dark">Servicios</Link></li>
              <li className="mb-2"><Link to="/faq" className="text-decoration-none text-dark">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-12 col-md-2">
            <h5 className="fw-bold mb-3">Síguenos</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 mb-0">
              {[ 'Facebook', 'Instagram', 'Twitter', 'LinkedIn' ].map((red, index) => (
                <li key={index}>
                  <a href="#" className="d-block">
                    <img
                      src={imagenLibreria}
                      alt={red}
                      className="rounded-circle img-fluid"
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};
