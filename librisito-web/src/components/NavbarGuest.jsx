import { Link, NavLink } from "react-router-dom";
import bookIcon from "./../assets/iconos/book.ico";

const linkCls = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
    isActive
        ? "text-blue-700"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md px-2 py-1"
    }`;

export default function NavbarGuest() {
    return (
        <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto max-w-6xl h-16 px-6 flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div>
                        <Link to="/" className="flex items-center gap-2 font-bold text-gray-900">
                            <img src={bookIcon} alt="Librisito" className="h-6 w-6 object-contain" />
                            <span>Librisito</span>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                        <NavLink to="/buscar/libros" className={linkCls}>
                            Libros
                        </NavLink>
                        <NavLink to="/buscar/locales" className={linkCls}>
                            Locales
                        </NavLink>
                        <NavLink to="/about" className={linkCls}>
                            About
                        </NavLink>
                    </div>
                </div>
                {/* Acciones (col 3) */}
                <div className="flex items-center justify-end gap-3">
                <Link
                    to="/inicio-sesion"
                    className="px-3 py-1.5 text-sm rounded-full bg-amber-100 text-gray-900 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                    Iniciar sesión
                </Link>
                <Link
                    to="/registro"
                    className="px-3 py-1.5 text-sm rounded-full bg-rose-300 text-white hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
                >
                    Registrarse
                </Link>
                </div>
            </nav>
        </header>
    );
}
