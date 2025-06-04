import React from 'react';
import styles from './HomePage.module.css'; // Importa los estilos CSS Modules

import {Navegador} from '../components/Navbar.jsx'; 
import {Footer} from '../components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Navegador />
      {/* Puedes añadir más contenido de la página aquí, entre el Navegador y el Footer */}
      <main className={styles.homeContent}>
        <h1>Bienvenido a la Página de Inicio</h1>
        <p>Este es el contenido principal de tu aplicación.</p>
        {/* Aquí podrías incluir otros componentes como sliders, secciones de productos, etc. */}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;