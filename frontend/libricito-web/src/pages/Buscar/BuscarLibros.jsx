import libro from "../../assets/Libros/German_Garmendia.jpg";
export default function BuscarLibros() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex">
                <div className="w-1/3">
                    <img src={libro} alt="" width={300} />
                </div>
                <div className="w-2/3">
                    <h1 className="text-5xl font-semibold py-10">Nombre Libro</h1>
                    <div className="flex gap-12 flex-col">
                        <div>
                            <h2 className="w-32 font-light border-b-3 border-solid">Descripcion</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti in at voluptatum, voluptates doloribus odio tempore, ut repudiandae velit eum libero impedit atque ex illo laboriosam fuga nam aliquam et!</p>
                        </div>
                        <div className="flex justify-between gap-12">
                            <div>
                                <h2 className="w-26 font-light border-b-3 border-solid">Autor</h2>
                                <p>Nombre Autor</p>
                            </div>
                            <div>
                                <h2 className="w-26 font-light border-b-3 border-solid">Genero</h2>
                                <p>Genero</p>
                            </div>
                            <div>
                                <h2 className="w-26 font-light border-b-3 border-solid">Precio</h2>
                                <p>Precio Articulo</p>
                            </div>
                            <div>
                                <h2 className="w-26 font-light border-b-3 border-solid">Stock</h2>
                                <p>Cantid Unidades</p>
                            </div>
                            <div>
                                <h2 className="w-26 font-light border-b-3 border-solid">Editorial</h2>
                                <p>Nombre Editorial</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 text-center">
                        <button className="border border-indigo-600">Consultar Disponibilidad</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
