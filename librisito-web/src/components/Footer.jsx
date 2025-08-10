// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
    <footer className="bg-pink-100 text-gray-700 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Logo y descripción */}
            <div>
            <h2 className="text-2xl font-bold text-pink-600">Librisito</h2>
            <p className="mt-3 text-sm">
                Tu plataforma favorita para encontrar y conectar con librerías locales.
            </p>
            </div>

            {/* Enlaces rápidos */}
            <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-pink-600">Inicio</Link></li>
                <li><Link to="/buscar/libros" className="hover:text-pink-600">Buscar Libros</Link></li>
                <li><Link to="/buscar/locales" className="hover:text-pink-600">Buscar Locales</Link></li>
                <li><Link to="/contacto" className="hover:text-pink-600">Contacto</Link></li>
            </ul>
            </div>

            {/* Recursos */}
            <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-3">Recursos</h3>
            <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-pink-600">Sobre Nosotros</Link></li>
                <li><Link to="/preguntas-frecuentes" className="hover:text-pink-600">Preguntas Frecuentes</Link></li>
                <li><a href="#" className="hover:text-pink-600">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-pink-600">Términos y Condiciones</a></li>
            </ul>
            </div>

            {/* Redes sociales */}
            <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-3">Síguenos</h3>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-pink-600">
                <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-pink-600">
                <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="hover:text-pink-600">
                <i className="fab fa-twitter text-xl"></i>
                </a>
            </div>
            </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-pink-200 mt-6">
            <p className="text-center text-sm py-4">
            &copy; {new Date().getFullYear()} Librisito. Todos los derechos reservados.
            </p>
        </div>
    </footer>
    );
};
