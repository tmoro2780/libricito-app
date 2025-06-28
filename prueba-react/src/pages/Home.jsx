import React from 'react';
import styles from './Home.module.css'; // Importa los estilos CSS Modules
import { Link } from  'react-router-dom'
import {Navegador1} from '../components/Navbar1.jsx'; 
import {Footer} from '../components/Footer.jsx';

import imagenlibreria from '../public-img/imagen-libreria.jpg'
import location from '../public-img/location.png';
import book from '../public-img/book.png';
import star from '../public-img/star.png';
import chat from '../public-img/chat.png';
import store from '../public-img/store.png';
import lupa from '../public-img/lupa.png';
import imagenLibreria from '../public-img/imagen-libreria.jpg';

export const Home = () => {
  return (
    <>
      <Navegador1 />
      {/* Puedes añadir más contenido de la página aquí, entre el Navegador y el Footer */}
      <main className={styles.homeContent}>
        <h1>Bienvenido a la Página de Inicio</h1>
        <div className="bg-white">
          <div className="container py-5">
            <div className="row py-5 justify-content-center">
              <div className="col-md-6 py-2">
                <div className="d-flex pt-2 pb-5">
                  <div className="px-2">
                    <button className="btn rounded-pill fw-semibold" style={{ backgroundColor: 'rgb(255, 224, 221)' }}>
                      <Link to="/novedades" className="text-decoration-none text-dark fw-semilight">
                        Novedades
                      </Link>
                    </button>
                  </div>
                  <div className="px-2">
                    <button className="btn rounded-pill fw-semibold" style={{ backgroundColor: 'rgb(255, 244, 243)' }}>
                      <Link to="/nosotros" className="text-decoration-none text-dark fw-semilight">
                        Aprenda sobre nosotros
                      </Link>
                    </button>
                  </div>
                </div>

                <h1 className="fw-normal" style={{ fontSize: '4.5rem' }}>
                  Bienvenido a Libricito
                </h1>
                <h2 className="fw-normal pb-5" style={{ fontSize: '1.5rem' }}>
                  Tu página web favorita para buscar tus libros
                </h2>
                <p>
                  Libricito es la plataforma ideal para los amantes de la lectura. Busca y descubrí si tus libros favoritos se encuentran en stock en librerías cercanas a ti. Conéctate con comercios locales, consulta disponibilidad antes de visitar y encuentra nuevas lecturas recomendadas.
                </p>

                <div className="d-flex justify-content-center gap-3">
                  <Link to="/inicio-sesion" className="btn rounded-3 fw-semibold px-5 text-white" style={{ backgroundColor: 'rgb(255, 224, 221)' }}>
                    Iniciar Sesión
                  </Link>
                  <Link to="/registro" className="btn rounded-3 fw-semibold px-5 text-dark" style={{ backgroundColor: 'rgb(255, 155, 146)' }}>
                    Crear Cuenta
                  </Link>
                </div>
              </div>

              <div className="col-md-6 text-end py-2">
                <img
                  src={imagenlibreria}
                  alt="Libro"
                  height="600px"
                  width="600px"
                  className="border rounded-4 align-items-end ps-5 pt-5"
                  style={{ backgroundColor: 'rgb(255, 135, 122)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="container py-5">
        <div className="row py-5">
          {[ 
            { src: location, title: "Encuentra librerías cercanas", desc: "Busca librerías que se encuentren cerca de ti" },
            { src: book, title: "Encuentra nuevos libros", desc: "Descubre recomendaciones personalizadas" },
            { src: star, title: "Lee reseñas y opiniones", desc: "Consulta la experiencia de otros lectores" },
            { src: chat, title: "Chatea con libreros", desc: "Habla con librerías locales en tiempo real" },
            { src: store, title: "Soporte a comercios", desc: "Apoya librerías independientes de tu zona" },
            { src: lupa, title: "Busca por categorías", desc: "Filtra por género, autor o editorial" }
          ].map((item, i) => (
            <div key={i} className={`col-md-3 col-12 text-center ${i >= 4 ? 'col-md-6' : ''}`}>
              <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mx-auto my-2" style={{ width: "100px", height: "100px" }}>
                <img src={item.src} alt={item.title} style={{ maxWidth: "50%", maxHeight: "50%" }} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <div className="row py-5">
            
            {/* Sección izquierda: Título y descripción */}
            <div className="col-md-6 col-12">
              <h5 style={{ color: 'rgb(255, 152, 152)' }}>Preguntas Frecuentes</h5>
              <h2 style={{ fontSize: '3.5rem' }}>¿Tienes dudas sobre Libricito?</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, excepturi mollitia veritatis
                labore laudantium delectus quis tempore. Sit totam expedita quidem aperiam repudiandae! Dolorem earum
                omnis dignissimos saepe voluptates cum?
              </p>
            </div>

            {/* Sección derecha: Tarjetas con preguntas */}
            <div className="col-md-6 col-12">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="card bg-white rounded-4 shadow-sm mb-3">
                  <div className="card-body">
                    <h3 className="card-title">¿Cómo recupero mi contraseña?</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur magnam voluptate mollitia
                      exercitationem temporibus officia ipsum dignissimos, praesentium nulla libero asperiores error soluta
                      dolores consequuntur! Incidunt delectus eaque provident?
                    </p>
                  </div>
                </div>
              ))}

              <a href="#" className="btn" style={{ color: 'rgb(255, 152, 152)', textDecoration: 'underline' }}>
                Ver más preguntas
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Columna izquierda - texto y lista */}
          <div className="col-md-6 col-12 pb-md-0 pb-4">
            <h2 className="display-5 fw-bold mb-4 pt-md-0 pt-3">
              Crea tu cuenta ya en Libricito hoy mismo
            </h2>

            <h4 className="fs-6 fw-normal text-muted mb-4">
              Disfruta de una buena experiencia personalizada en la búsqueda de tu libro preferido. Crea tu cuenta para buscar en los locales más cercanos a tu zona.
            </h4>

            <ul className="list-unstyled fw-semibold mb-4">
              {[
                'Consulta el stock de tus libros favoritos',
                'Descubre librerías cercanas a ti',
                'Utiliza la herramienta de búsqueda para encontrar tus libros favoritos',
                'Deja una reseña sobre tu experiencia en el local'
              ].map((texto, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  <span>{texto}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/registro"
              className="btn btn-lg rounded-pill fw-semibold text-white px-4 py-2"
              style={{ backgroundColor: 'rgb(255, 137, 137)' }}
            >
              Prueba gratis
            </Link>
          </div>

          {/* Columna derecha - imagen */}
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center py-2">
            <img
              src={imagenLibreria}
              alt="Libro"
              className="img-fluid border rounded-4 shadow-lg"
              style={{ maxWidth: '500px', maxHeight: '500px', height: '500px', width: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white mb-5">
        <div className="container py-5">
          <div className="row py-5 justify-content-center align-items-center">

            {/* Imagen izquierda grande */}
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center py-2">
              <img
                src={imagenLibreria}
                alt="Libro"
                className="img-fluid border rounded-4"
                style={{ width: '500px', height: '500px', objectFit: 'cover' }}
              />
            </div>

            {/* Sección derecha con círculos e información */}
            <div className="col-md-6 col-12 text-center py-2">
              <div className="pb-5 d-flex justify-content-center align-items-center">

                {/* Imagen izquierda pequeña */}
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle my-auto border border-5 border-white shadow-sm position-relative z-1"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    width: '110px',
                    height: '110px',
                    marginRight: '-25px'
                  }}
                >
                  <img
                    src={imagenLibreria}
                    alt="Libro"
                    className="rounded-circle"
                    height="100"
                    width="100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Imagen central grande */}
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle my-auto border border-5 border-white shadow position-relative z-2"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    width: '160px',
                    height: '160px'
                  }}
                >
                  <img
                    src={imagenLibreria}
                    alt="Libro"
                    className="rounded-circle"
                    height="150"
                    width="150"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Imagen derecha pequeña */}
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle my-auto border border-5 border-white shadow-sm position-relative z-1"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    width: '110px',
                    height: '110px',
                    marginLeft: '-25px'
                  }}
                >
                  <img
                    src={imagenLibreria}
                    alt="Libro"
                    className="rounded-circle"
                    height="100"
                    width="100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Título y párrafo */}
              <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
                Registra tu negocio con nosotros
              </h2>
              <p>
                Estamos aquí para ayudarte. Escríbenos con tus preguntas para resolver tus dudas. Estamos aquí para ayudarte. Escríbenos con tus preguntas para resolver tus dudas. Estamos aquí para ayudarte. Escríbenos con tus preguntas para resolver tus dudas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}