// src/components/NavbarGuest.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import bookIcon from "./../assets/iconos/book.ico"; // ajusta extensión/ruta

export default function NavbarGuest() {
    const [open, setOpen] = useState(false);

    return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <nav className="h-16 px-4 md:px-6 flex items-center justify-between">
            {/* Marca */}
            <Link to="/" className="flex items-center gap-2 font-bold text-gray-900">
            <img src={bookIcon} alt="Librisito" className="h-6 w-6 object-contain" />
            <span>Librisito</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
            <NavLink to="/buscar/libros" className="text-sm text-gray-700 hover:text-blue-600">
                Libros
            </NavLink>
            <NavLink to="/buscar/locales" className="text-sm text-gray-700 hover:text-blue-600">
                Locales
            </NavLink>
            <NavLink to="/about" className="text-sm text-gray-700 hover:text-blue-600">
                About
            </NavLink>
            </div>

            {/* Acciones */}
            <div className="hidden sm:flex items-center gap-2">
            <Link to="/inicio-sesion" className="px-3 py-1.5 text-sm rounded-xl bg-amber-100 text-gray-900">
                Iniciar sesión
            </Link>
            <Link to="/registro" className="px-3 py-1.5 text-sm rounded-xl bg-rose-300 text-white">
                Registrarse
            </Link>
            </div>

            {/* Mobile button */}
            <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border"
            aria-label="Abrir menú"
            >
            ☰
            </button>
        </nav>

        {/* Mobile menu */}
        {open && (
            <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-b">
            <NavLink to="/buscar/libros" className="block py-2 text-gray-700">Libros</NavLink>
            <NavLink to="/buscar/locales" className="block py-2 text-gray-700">Locales</NavLink>
            <NavLink to="/about" className="block py-2 text-gray-700">About</NavLink>
            <div className="pt-2 flex gap-2">
                <Link to="/inicio-sesion" className="flex-1 text-center px-3 py-2 rounded-xl bg-amber-100">
                Iniciar sesión
                </Link>
                <Link to="/registro" className="flex-1 text-center px-3 py-2 rounded-xl bg-rose-300 text-white">
                Registrarse
                </Link>
            </div>
            </div>
        )}
    </header>
    );
}
