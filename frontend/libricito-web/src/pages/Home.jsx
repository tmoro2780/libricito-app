import { Link } from "react-router-dom";

import imagenLibreria from "../assets/imagen-libreria.jpg";
import location from "../assets/location.png";
import book from "../assets/book.png";
import star from "../assets/star.png";
import chat from "../assets/chat.png";
import store from "../assets/store.png";
import lupa from "../assets/lupa.png";

export default function Home() {
    const features = [
    { src: location, title: "Encuentra librerías cercanas", desc: "Busca librerías que se encuentren cerca de ti" },
    { src: book,     title: "Encuentra nuevos libros",      desc: "Descubre recomendaciones personalizadas" },
    { src: star,     title: "Lee reseñas y opiniones",      desc: "Consulta la experiencia de otros lectores" },
    { src: chat,     title: "Chatea con libreros",          desc: "Habla con librerías locales en tiempo real" },
    { src: store,    title: "Soporte a comercios",          desc: "Apoya librerías independientes de tu zona" },
    { src: lupa,     title: "Busca por categorías",         desc: "Filtra por género, autor o editorial" },
    ];

    return (
    <main className="w-full">

      {/* HERO */}
        <section className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-6 space-y-20 py-8">
                <div className="w-full px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Columna izquierda */}
                    <div>
                    <div className="flex flex-wrap gap-3 pt-2 pb-6">
                        <Link
                        to="/novedades"
                        className="rounded-full px-4 py-2 text-sm font-semibold !text-gray-900"
                        style={{ backgroundColor: "rgb(255, 224, 221)" }}
                        >
                        Novedades
                        </Link>
                        <Link
                        to="/about"
                        className="rounded-full px-4 py-2 text-sm font-semibold !text-gray-900"
                        style={{ backgroundColor: "rgb(255, 244, 243)" }}
                        >
                        Aprenda sobre nosotros
                        </Link>
                    </div>

                    <h1 className="font-normal text-[40px] sm:text-[56px] leading-tight text-gray-900">
                        Bienvenido a Libricito
                    </h1>
                    <h2 className="font-normal text-xl text-gray-700 mt-3">
                        Tu página web favorita para buscar tus libros
                    </h2>

                    <p className="mt-6 text-gray-600">
                        Libricito es la plataforma ideal para los amantes de la lectura. Busca y descubrí si tus libros favoritos
                        se encuentran en stock en librerías cercanas a ti. Conéctate con comercios locales, consulta disponibilidad
                        antes de visitar y encuentra nuevas lecturas recomendadas.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                        to="/inicio-sesion"
                        className="rounded-lg px-6 py-3 font-semibold text-white"
                        style={{ backgroundColor: "rgb(255, 224, 221)" }}
                        >
                        Iniciar Sesión
                        </Link>
                        <Link
                        to="/registro"
                        className="rounded-lg px-6 py-3 font-semibold text-gray-900"
                        style={{ backgroundColor: "rgb(255, 155, 146)" }}
                        >
                        Crear Cuenta
                        </Link>
                    </div>
                    </div>

                    {/* Columna derecha: Imagen */}
                    <div className="w-full">
                    <img
                        src={imagenLibreria}
                        alt="Librería"
                        className="w-full max-w-[600px] h-[600px] object-cover rounded-2xl border mx-auto"
                    />
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* FEATURES */}
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6 space-y-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12">
                {features.map((item, i) => (
                    <div key={i} className="text-center">
                    <div className="bg-white rounded-full w-[100px] h-[100px] mx-auto grid place-items-center shadow-sm">
                        <img src={item.src} alt={item.title} className="max-w-[50%] max-h-[50%]" />
                    </div>
                    <h4 className="mt-3 font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* FAQ + CARDS */}
        <section className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-6 space-y-20 py-16">
                <div className="px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Izquierda */}
                <div>
                    <h5 className="text-sm font-semibold" style={{ color: "rgb(255, 152, 152)" }}>
                    Preguntas Frecuentes
                    </h5>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-900">
                    ¿Tienes dudas sobre Libricito?
                    </h2>
                    <p className="mt-4 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, excepturi mollitia veritatis
                    labore laudantium delectus quis tempore. Sit totam expedita quidem aperiam repudiandae!
                    </p>
                </div>

                {/* Derecha */}
                <div>
                    {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
                        <h3 className="text-xl font-semibold">¿Cómo recupero mi contraseña?</h3>
                        <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur magnam voluptate mollitia
                        exercitationem temporibus officia ipsum dignissimos, praesentium nulla libero asperiores error soluta
                        dolores consequuntur! Incidunt delectus eaque provident?
                        </p>
                    </div>
                    ))}

                    <Link
                    to="/faq"
                    className="inline-block mt-2 text-sm font-semibold underline"
                    style={{ color: "rgb(255, 152, 152)" }}
                    >
                    Ver más preguntas
                    </Link>
                </div>
                </div>
            </div>
        </section>

        {/* CTA REGISTRO */}
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6 space-y-20 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Texto y lista */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Crea tu cuenta ya en Libricito hoy mismo
                        </h2>

                        <h4 className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                            Disfruta de una buena experiencia personalizada en la búsqueda de tu libro preferido.
                            Crea tu cuenta para buscar en los locales más cercanos a tu zona.
                        </h4>

                        <ul className="space-y-2 font-semibold text-gray-800">
                            {[
                            "Consulta el stock de tus libros favoritos",
                            "Descubre librerías cercanas a ti",
                            "Usa la herramienta de búsqueda para encontrar tus libros favoritos",
                            "Deja una reseña sobre tu experiencia en el local",
                            ].map((texto, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-emerald-600">●</span>
                                <span>{texto}</span>
                            </li>
                            ))}
                        </ul>

                        <Link
                            to="/registro"
                            className="inline-block rounded-lg px-6 py-3 mt-4 text-white text-sm sm:text-base font-medium bg-red-400 hover:bg-red-500 transition"
                        >
                            Prueba ahora
                        </Link>
                    </div>
                

                    {/* Imagen */}
                    <div className="w-full grid place-items-center">
                        <img
                        src={imagenLibreria}
                        alt="Registro"
                        className="w-[500px] h-[500px] object-cover rounded-2xl shadow-lg border"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* COLLAGE REDONDO + TEXTO */}
        <section className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-6 space-y-20 py-10">
                <div className="px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Imagen grande izquierda */}
                <div className="w-full grid place-items-center">
                    <img
                    src={imagenLibreria}
                    alt="Librería"
                    className="w-[500px] h-[500px] object-cover rounded-2xl border"
                    />
                </div>

                {/* Círculos e info */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 pb-8">
                    {/* Izquierda pequeña */}
                    <div
                        className="relative z-[1] rounded-full border-4 border-white shadow-sm grid place-items-center"
                        style={{ width: 110, height: 110, backgroundColor: "rgba(0,0,0,0.25)" }}
                    >
                        <img src={imagenLibreria} alt="Mini 1" className="rounded-full w-[100px] h-[100px] object-cover" />
                    </div>

                    {/* Central grande */}
                    <div
                        className="relative z-[2] rounded-full border-4 border-white shadow grid place-items-center"
                        style={{ width: 160, height: 160, backgroundColor: "rgba(0,0,0,0.25)" }}
                    >
                        <img src={imagenLibreria} alt="Mini 2" className="rounded-full w-[150px] h-[150px] object-cover" />
                    </div>

                    {/* Derecha pequeña */}
                    <div
                        className="relative z-[1] rounded-full border-4 border-white shadow-sm grid place-items-center"
                        style={{ width: 110, height: 110, backgroundColor: "rgba(0,0,0,0.25)" }}
                    >
                        <img src={imagenLibreria} alt="Mini 3" className="rounded-full w-[100px] h-[100px] object-cover" />
                    </div>
                    </div>

                    <h2 className="text-3xl font-bold">Registra tu negocio con nosotros</h2>
                    <p className="mt-3 text-gray-600">
                    Estamos aquí para ayudarte. Escríbenos con tus preguntas para resolver tus dudas. Estamos aquí para ayudarte. 
                    Escríbenos con tus preguntas para resolver tus dudas.
                    </p>
                </div>
                </div>
            </div>
        </section>
    </main>
    );
}