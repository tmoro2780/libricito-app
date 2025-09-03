import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Páginas
import Home from "./pages/Home";
import Local from "./pages/Locales/Local";
import Libro from "./pages/Libros/Libro";
import BuscarLocales from "./pages/Buscar/BuscarLocales";
import BuscarLibros from "./pages/Buscar/BuscarLibros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Configuracion from "./pages/Dashboard/Configuracion";
import LocalPerfil from "./pages/Dashboard/Local/LocalPerfil";
import CatalogoLocal from "./pages/Dashboard/Local/CatalogoLocal";
import AgregarLibro from "./pages/Dashboard/Local/AgregarLibro";
import EditarLibro from "./pages/Dashboard/Local/EditarLibro";
import PerfilUsuario from "./pages/Dashboard/PerfilUsuario";
import HistorialBusqueda from "./pages/Dashboard/HistorialBusqueda";
import Favoritos from "./pages/Dashboard/Favoritos";
import FAQ from "./pages/FAQ";
import Novedades from "./pages/Novedades";
import About from "./pages/About";
// (Opcional) ProtectedRoute si luego querés proteger dashboard
// import ProtectedRoute from "./auth/ProtectedRoute";

export default function AppRoutes() {
    return (
    <Routes>
        <Route element={<MainLayout />}>
            {/* Inicio y Búsqueda */}
            <Route path="/" element={<Home />} />
            <Route path="/locales/:id" element={<Local />} />
            <Route path="/libros/:id" element={<Libro />} />
            <Route path="/buscar/locales" element={<BuscarLocales />} />
            <Route path="/buscar/libros" element={<BuscarLibros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/about" element={<About />} />
            {/* Autenticación (mismos paths en español que usabas) */}
            <Route path="/registro" element={<Signup />} />
            <Route path="/inicio-sesion" element={<Login />} />

            {/* Dashboard / Panel de usuario */}
            {/* Si querés proteger estas rutas, envolvelas con <ProtectedRoute> */}
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

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    </Routes>
    );
}
