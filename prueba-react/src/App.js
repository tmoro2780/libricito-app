import React from 'react';
import './App.css';
import { Navegador } from './components/navbar';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navegador />
      {/* Aquí puedes renderizar el resto del contenido de tu página */}
      <div style={{ marginTop: '80px' }} className="container">
        <h1>Bienvenido a Libricito</h1>
        <p>Explora libros y locales cerca de ti.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
