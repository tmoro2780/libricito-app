import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [q, setQ] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!q.trim()) return;
        navigate(`/buscar/libros?q=${encodeURIComponent(q)}`);
    };

    return (
        <section className="w-full px-8 py-20">
        {/* Hero */}
        <div className="w-full">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Encontrá libros y{" "}
            <span className="text-blue-600">librerías cercanas</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
            Buscá por título, autor o editorial. No hace falta iniciar sesión.
            </p>
        </div>

        {/* Buscador */}
        <form
            onSubmit={onSubmit}
            className="mt-8 flex items-center gap-3 w-full"
        >
            <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ej: El principito"
            className="flex-1 h-12 rounded-xl border border-gray-300 px-4 text-base outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
            className="h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            type="submit"
            >
            Buscar
            </button>
        </form>

        {/* Bloques destacados */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="h-40 rounded-2xl border border-gray-200 grid place-items-center text-gray-700">
            Populares cerca tuyo
            </div>
            <div className="h-40 rounded-2xl border border-gray-200 grid place-items-center text-gray-700">
            Ofertas
            </div>
            <div className="h-40 rounded-2xl border border-gray-200 grid place-items-center text-gray-700">
            Novedades
            </div>
        </div>

        {/* Sección resultados rápidos (placeholder) */}
        <div className="mt-12 w-full">
            <h2 className="text-2xl font-bold">Descubrí</h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
            <div className="aspect-[3/4] rounded-2xl border border-gray-200" />
            <div className="aspect-[3/4] rounded-2xl border border-gray-200" />
            <div className="aspect-[3/4] rounded-2xl border border-gray-200" />
            <div className="aspect-[3/4] rounded-2xl border border-gray-200" />
            <div className="aspect-[3/4] rounded-2xl border border-gray-200" />
            <div className="aspect-[3/4] rounded-2xl border border-gray-200" />
            </div>
        </div>
        </section>
    );
}
