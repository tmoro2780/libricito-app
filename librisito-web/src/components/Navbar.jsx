import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
        <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-blue-600">Librisito</Link>
            <div className="hidden md:flex items-center gap-6">
                <NavLink to="/buscar/libros" className="text-sm text-gray-600 hover:text-blue-600">Buscar Libros</NavLink>
                <NavLink to="/buscar/locales" className="text-sm text-gray-600 hover:text-blue-600">Locales</NavLink>
                <NavLink to="/libros" className="text-sm text-gray-600 hover:text-blue-600">Catálogo</NavLink>
                <NavLink to="/contacto" className="text-sm text-gray-600 hover:text-blue-600">Contacto</NavLink>
            </div>
            <div className="flex items-center gap-2">
                <Link to="/login" className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600">
                    Iniciar sesión
                </Link>
                <Link to="/signup" className="inline-flex items-center rounded-xl bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">
                    Crear cuenta
                </Link>
            </div>
        </nav>
    </header>
    );
}
