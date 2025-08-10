import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/foto-login.jpg";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [remember, setRemember] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // TODO: acá llamás a tu API de login
        // if (ok) navigate("/dashboard");
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-5xl mt-16 md:mt-24 px-4">
            {/* Card */}
            <div className="relative rounded-2xl border border-gray-300 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 lg:p-10">
                {/* Imagen */}
                <div className="order-2 md:order-1">
                <img
                    src={img}
                    alt="Login"
                    className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl border"
                />
                </div>

                {/* Formulario */}
                <div className="order-1 md:order-2 flex flex-col">
                {/* Volver */}
                <div className="flex justify-end">
                    <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                        Volver a la página</button>
                </div>

                <h1 className="mt-6 md:mt-10 text-center text-2xl md:text-3xl font-semibold text-gray-900">
                    Iniciar Sesión
                </h1>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Gmail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tuemail@ejemplo.com"
                        className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                    />
                    </div>

                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Contraseña</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className="w-full h-11 rounded-lg border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-rose-200"
                        placeholder="********"
                    />
                    </div>

                    <div className="flex items-center justify-between">
                    <Link
                        to="/olvide-contrasena"
                        className="text-xs text-rose-600 hover:underline"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>

                    {/* Switch recordar sesión */}
                    <label className="flex items-center gap-2 text-xs text-gray-600 select-none">
                        Recordar detalles de inicio de sesión
                        <button
                        type="button"
                        onClick={() => setRemember((v) => !v)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                            remember ? "bg-rose-400" : "bg-gray-300"
                        }`}
                        >
                        <span
                            className={`inline-block h-4 w-4 rounded-full bg-white transform transition ${
                            remember ? "translate-x-4" : "translate-x-1"
                            }`}
                        />
                        </button>
                    </label>
                    </div>

                    <button type="submit" className="w-full h-11 rounded-lg bg-red-500 text-white font-medium transition-colors">
                        Iniciar sesión
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/registro" className="text-rose-600 hover:underline">
                    Créate una cuenta
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
