export default function Contacto() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center">
            <div className="mx-auto max-w-5xl mt-16 md:mt-24">
            {/* Card */}
                <div className="relative rounded-2xl border border-gray-300 bg-white shadow-sm min-w-[60rem]">
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

                            <form action="">
                                <label htmlFor="">Email</label>
                                <input type="text" name="" id="" />
                                <label htmlFor="">Asunto</label>
                                <input type="text" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}