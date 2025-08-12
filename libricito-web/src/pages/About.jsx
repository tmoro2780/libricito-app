// src/pages/About.jsx
import { Link } from "react-router-dom";
import img from "../assets/imagen_perfil/imagen_perfil.jpg"; // Reemplazar con la imagen del equipo si la tienes


const team = [
    {
        name: "Tomas Valentín Muruchi",
        role: "Desarrollador Frontend",
        img: img, // 👉 reemplazar por ruta real: "/assets/team/tomas.jpg"
    },
    {
        name: "Joaquín Berzunces",
        role: "Ayudante Frontend & Scrum Master",
        img: img, // "/assets/team/joaquin.jpg"
    },
    {
        name: "Nahuel Gonzales Aran",
        role: "Ayudante Backend",
        img: img, // "/assets/team/nahuel.jpg"
    },
    {
        name: "Sebastián Daniel Marcos",
        role: "Desarrollador Backend",
        img: img, // "/assets/team/sebastian.jpg"
    },
];

export default function About() {
    return (
    <main className="w-full">
        {/* Hero */}
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Sobre <span className="text-rose-600">Libricito</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                Libricito es una plataforma que conecta lectores con librerías
                cercanas. Podés descubrir títulos, comparar stock y precios, y
                contactar a los locales para resolver tus dudas antes de salir de casa.
                </p>
            </div>

            {/* Highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                {
                    title: "Pensado para lectores",
                    desc: "Búsquedas rápidas por título, autor, editorial o ISBN. Guardá favoritos y revisá tu historial.",
                },
                {
                    title: "Impulsa librerías locales",
                    desc: "Ayudamos a visibilizar negocios cercanos y a que puedan mostrar su catálogo en minutos.",
                },
                {
                    title: "Simple y transparente",
                    desc: "Información clara de disponibilidad y precio provista por las librerías registradas.",
                },
                ].map((f, i) => (
                <div
                    key={i}
                    className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                    <h3 className="text-lg font-semibold text-gray-900">
                    {f.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{f.desc}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Misión & Valores */}
        <section className="bg-rose-50/50">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                <h2 className="text-3xl text-gray-900">Nuestra misión</h2>
                <p className="mt-4 text-gray-700">
                    Hacer más fácil encontrar el libro correcto en el lugar correcto.
                    Creemos en el valor de las librerías de barrio, la atención
                    personalizada y la comunidad lectora. Libricito reúne todo en un
                    solo lugar para que leer sea más accesible y cercano.
                </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { k: "Librerías activas", v: "100+" },
                    { k: "Libros indexados", v: "180k+" },
                    { k: "Usuarios", v: "12k+" },
                ].map((s, i) => (
                    <div
                    key={i}
                    className="rounded-xl bg-white border p-5 text-center shadow-sm"
                    >
                    <div className="text-2xl font-bold text-gray-900">{s.v}</div>
                    <div className="text-sm text-gray-600">{s.k}</div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
                ¿Cómo funciona?
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                {
                    n: "1",
                    t: "Buscá libros o librerías",
                    d: "Filtrá por título, autor, editorial o ubicación. Sin necesidad de iniciar sesión.",
                },
                {
                    n: "2",
                    t: "Compará stock y precios",
                    d: "Mirá disponibilidad en tiempo real provista por los locales cercanos.",
                },
                {
                    n: "3",
                    t: "Contactá o visitá",
                    d: "Consultá al comercio desde la plataforma o guardá el local en favoritos.",
                },
                ].map((s) => (
                <div
                    key={s.n}
                    className="rounded-2xl border bg-white p-6 shadow-sm"
                >
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-semibold">
                    {s.n}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {s.t}
                    </h3>
                    <p className="mt-2 text-gray-600">{s.d}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Equipo */}
        <section className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                El equipo detrás de Libricito
                </h2>
                <p className="text-gray-600 text-center mt-2">
                Un grupo pequeño y enfocado: diseño, frontend y backend trabajando juntos.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((m) => (
                    <article
                    key={m.name}
                    className="bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition"
                    >

                    {/* Foto grande y cuadrada */}
                        <div className="w-full aspect-square">
                            <img
                            src={m.img || "data:image/gif;base64,R0lGODlhAQABAAAAACw="}
                            alt={m.name}
                            className="w-full h-full object-cover"
                            />
                        </div>

                    {/* Texto arriba */}
                    <header className="p-5 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {m.name}
                        </h3>
                        <p className="text-sm text-gray-600">{m.role}</p>
                    </header>


                    </article>
                ))}
                </div>
            </div>
        </section>



        {/* CTA final */}
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    ¿Sos librería? Sumate a la plataforma
                </h3>
                <p className="mt-3 text-gray-600">
                    Registrá tu negocio y publicá tu catálogo en minutos. Te ayudamos a llegar a más lectores.
                </p>
                <div className="mt-6">
                    <Link
                    to="/vender-en-Libricito"
                    className="inline-flex px-5 py-3 rounded-lg bg-rose-500 !text-white font-medium hover:bg-rose-600 transition"
                    >
                    Crear mi tienda
                    </Link>
                </div>
            </div>
        </section>
    </main>
    );
}
