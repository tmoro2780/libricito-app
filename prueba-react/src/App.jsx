import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Local } from './pages/Locales/Local.jsx'
import { Locales } from './pages/Locales/Locales.jsx'
import { Libro } from './pages/Libros/Libro.jsx'
import { Libros } from './pages/Libros/Libros.jsx'
import { BuscarLocales } from './pages/Buscar/BuscarLocales.jsx'
import { BuscarLibros } from './pages/Buscar/BuscarLibros.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Login } from './pages/Auth/Login.jsx'
import { Signup } from './pages/Auth/Sigup.jsx'
import { Dashboard } from './pages/Dashboard/Dashboard.jsx'
import { Configuracion } from './pages/Dashboard/Configuracion.jsx'
import { LocalPerfil } from './pages/Dashboard/Local/LocalPerfil.jsx'
import { CatalogoLocal } from './pages/Dashboard/Local/CatalogoLocal.jsx'
import { AgregarLibro } from './pages/Dashboard/Local/AgregarLibro.jsx'
import { EditarLibro } from './pages/Dashboard/Local/EditarLibro.jsx'
import { PerfilUsuario } from './pages/Dashboard/PerfilUsuario.jsx'
import { HistorialBusqueda } from './pages/Dashboard/HistorialBusqueda.jsx'
import { Favoritos } from './pages/Dashboard/Favoritos.jsx'


function App() {
  return (
      <Routes>
        {/* Rutas de Inicio y Búsqueda */}
        <Route path="/" element={<Home />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/locales/:id" element={<Local />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/libros/:id" element={<Libro />} />
        <Route path="/buscar/locales" element={<BuscarLocales />} />
        <Route path="/buscar/libros" element={<BuscarLibros />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Rutas de Autenticación */}
        <Route path="/registro" element={<Signup />} />
        <Route path="/inicio-sesion" element={<Login />} />

        {/* Rutas de Dashboard / Panel de Usuario */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/configuracion" element={<Configuracion />} />

        {/* Dashboard - Local */}
        <Route path="/dashboard/local" element={<LocalPerfil />} />
        <Route path="/dashboard/local/catalogo" element={<CatalogoLocal />} />
        <Route path="/dashboard/local/catalogo/agregar" element={<AgregarLibro />} />
        <Route path="/dashboard/local/catalogo/:libroId/editar" element={<EditarLibro />} />

        {/* Dashboard - Usuario */}
        <Route path="/dashboard/perfil" element={<PerfilUsuario />} />
        <Route path="/dashboard/historial-busqueda" element={<HistorialBusqueda />} />
        <Route path="/dashboard/productos-favoritos" element={<Favoritos />} />
      </Routes>
  );
}

export default App;
