export default function Login() {
    return (
        <section className="w-150 max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-md">
            <form action="">
            <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
            <p className="text-gray-600 mt-2">Por favor, ingresa
            tus credenciales para acceder a tu cuenta.</p>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <button type="submit" className="">Iniciar Sesión</button>
            <p className="text-sm text-gray-600 mt-4">¿No tienes una cuenta? <a href="/register" className="text-blue-600 hover:underline">Regístrate aquí</a></p>
            </form>
        </section>
    );
}