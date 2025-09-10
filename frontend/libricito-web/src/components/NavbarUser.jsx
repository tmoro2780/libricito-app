// src/components/NavbarUser.jsx
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./../pages/Auth/AuthContext";
import bookIcon from "./../assets/iconos/book.ico";
import perfilImg from "./../assets/imagen_perfil/imagen_perfil.jpg";

export default function NavbarUser() {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const onSearch = (e) => {
        e.preventDefault();
        const q = new FormData(e.currentTarget).get("q");
        if (!q) return;
        navigate(`/buscar/libros?q=${encodeURIComponent(q)}`);
    };

    return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <nav className="h-16 px-4 md:px-6 flex items-center justify-between gap-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2 font-bold text-gray-900">
            <img src={bookIcon} alt="Libricito" className="h-6 w-6 object-contain" />
            <span>Libricito</span>
            </Link>

            {/* Buscador (desktop) */}
            <form onSubmit={onSearch} className="hidden md:flex flex-1 max-w-xl">
            <input
                name="q"
                placeholder="Buscar libros, autores…"
                className="flex-1 h-10 rounded-l-xl border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="h-10 px-4 rounded-r-xl bg-blue-600 text-white">Buscar</button>
            </form>

            {/* Links + Perfil */}
            <div className="hidden md:flex items-center gap-6">
            <NavLink to="/buscar/libros" className="text-sm text-gray-700 hover:text-blue-600">Libros</NavLink>
            <NavLink to="/buscar/locales" className="text-sm text-gray-700 hover:text-blue-600">Locales</NavLink>
            <NavLink to="/about" className="text-sm text-gray-700 hover:text-blue-600">About</NavLink>

            {/* Perfil */}
            <div className="relative">
                <button
                onClick={() => setMenu((m) => !m)}
                className="h-10 w-10 rounded-full ring-1 ring-gray-300 overflow-hidden"
                aria-haspopup="menu"
                aria-expanded={menu}
                title={user?.name || "Cuenta"}
                >
                <img src={perfilImg} alt="Perfil" className="h-full w-full object-cover" />
                </button>

                {menu && (
                <div
                    className="absolute right-0 mt-2 w-56 rounded-xl border bg-white shadow-lg p-2"
                    role="menu"
                >
                    <div className="px-3 py-2 text-sm text-gray-600">¡Hola, {user?.name || "Vendedor"}!</div>
                    <Link to="/dashboard/local" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Mi Local</Link>
                    <Link to="/dashboard/local/catalogo" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Catálogo</Link>
                    <Link to="/dashboard/local/catalogo/agregar" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Agregar Producto</Link>
                    <div className="my-1 border-t" />
                    <button
                    onClick={() => { logout(); navigate("/", { replace: true }); }}
                    className="block w-full text-left px-3 py-2 rounded-lg text-rose-600 hover:bg-rose-50"
                    >
                    Cerrar sesión
                    </button>
                </div>
                )}
            </div>
            </div>

            {/* Mobile toggles */}
            <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border"
            aria-label="Abrir menú"
            >
            ☰
            </button>
        </nav>

        {/* Buscador + links (mobile) */}
        {open && (
            <div className="md:hidden px-4 pb-4 space-y-3 border-b bg-white">
            <form onSubmit={onSearch} className="flex">
                <input
                name="q"
                placeholder="Buscar libros…"
                className="flex-1 h-10 rounded-l-xl border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="h-10 px-4 rounded-r-xl bg-blue-600 text-white">Buscar</button>
            </form>
            <NavLink to="/buscar/libros" className="block py-2 text-gray-700">Libros</NavLink>
            <NavLink to="/buscar/locales" className="block py-2 text-gray-700">Locales</NavLink>
            <NavLink to="/about" className="block py-2 text-gray-700">About</NavLink>
            </div>
        )}
    </header>
    );
}
