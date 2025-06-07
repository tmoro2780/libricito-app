import React from 'react';
import styles from './Home.module.css'; // Importa los estilos CSS Modules
import { Link } from  'react-router-dom'
import {Navegador1} from '../components/Navbar1.jsx'; 
import {Footer} from '../components/Footer.jsx';

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
                  src="/img/imagen-libreria.jpg" // Asegurate de que esté en la carpeta public/img/
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
        <p>Este es el contenido principal de tu aplicación.</p>
        {/* Aquí podrías incluir otros componentes como sliders, secciones de productos, etc. */}
      </main>
      <Footer />
    </>
  );
}