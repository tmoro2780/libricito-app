// src/pages/Auth/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/foto-login.jpg";

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        pass: "",
        pass2: "",
    });

    const onChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();
        // TODO: validar (pass === pass2) y llamar a tu API de registro
        // if (ok) navigate("/inicio-sesion");
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-5xl mt-16 md:mt-24">
            {/* Card */}
            <div className="h-full relative rounded-2xl border border-gray-300 bg-white shadow-sm min-w-[60rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 lg:p-10">
                    {/* Imagen */}
                    <div className="order-2 md:order-1">
                    <img
                        src={img}
                        alt="Registro"
                        className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl border"
                    />
                    </div>

                    {/* Formulario */}
                    <div className="order-1 md:order-2 flex flex-col">
                    {/* Volver */}
                    <div className="flex justify-end">
                        <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm text-gray-700 hover:bg-gray-50"
                        >
                        Volver a la página
                        </button>
                    </div>

                    <h1 className="mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-900">
                        Crear Usuario
                    </h1>

                    <form onSubmit={onSubmit} className="mt-6 space-y-4 flex flex-col items-center w-full">
                        {/* Nombre / Apellido */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">
                            Nombre
                            </label>
                            <input
                            name="nombre"
                            value={form.nombre}
                            onChange={onChange}
                            className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                            placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">
                            Apellido
                            </label>
                            <input
                            name="apellido"
                            value={form.apellido}
                            onChange={onChange}
                            className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                            placeholder="Tu apellido"
                            />
                        </div>
                        </div>

                        {/* Email */}
                        <div className="w-full">
                        <label className="block text-sm text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            placeholder="tuemail@ejemplo.com"
                            className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                        />
                        </div>

                        {/* Passwords */}
                        <div className="w-full">
                        <label className="block text-sm text-gray-700 mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="pass"
                            value={form.pass}
                            onChange={onChange}
                            placeholder="********"
                            className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                        />
                        </div>
                        <div className="w-full">
                        <label className="block text-sm text-gray-700 mb-1">
                            Repetir contraseña
                        </label>
                        <input
                            type="password"
                            name="pass2"
                            value={form.pass2}
                            onChange={onChange}
                            placeholder="********"
                            className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                        />
                        </div>

                        {/* Botón principal */}
                        <button
                        type="submit"
                        className="w-48 h-11 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                        >
                        Crear cuenta
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        Ya tienes una cuenta?{" "}
                        <Link to="/inicio-sesion" className="text-rose-600 hover:underline">
                        Inicia sesión
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            {/* fin card */}
        </div>
    </section>
    );
}
