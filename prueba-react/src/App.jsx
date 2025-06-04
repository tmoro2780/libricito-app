import React from 'react';
import './App.css';
import { Navegador } from './components/Navbar';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes> {/* Agrupa todas tus rutas aquí */}
      <Route path="/" element={<HomePage />} />

    </Routes>
  );
}

export default App;
