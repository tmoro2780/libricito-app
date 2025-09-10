import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqsDefault = [
    {
        q: "¿Cómo creo una cuenta en Libricito?",
        a: "Hacé clic en “Crear cuenta”, completá el formulario y confirmá tu email. Después podés iniciar sesión y personalizar tus preferencias.",
    },
    {
        q: "¿Puedo buscar libros sin iniciar sesión?",
        a: "Sí. Podés buscar títulos, autores y ver stock y precios. Para guardar favoritos o dejar reseñas, necesitás iniciar sesión.",
    },
    {
        q: "¿Cómo funcionan los locales cercanos?",
        a: "Usamos tu ubicación (si la autorizás) para mostrarte librerías cercanas con stock disponible y estimación de distancia.",
    },
    {
        q: "¿Cómo contacto a una librería?",
        a: "En la página del local vas a encontrar sus datos de contacto y un botón para enviar consultas directamente desde Libricito.",
    },
];

export default function FAQ({ items = faqsDefault, initiallyOpen = 0 }) {
    const [openIndex, setOpenIndex] = useState(
        typeof initiallyOpen === "number" ? initiallyOpen : -1
    );

    const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

    return (
        <section className="w-full h-full bg-white">
            <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12 my-24">
                <div className="mb-12 text-center">
                <p className="mt-3 text-red-300 font-bold">FAQs</p>
                <h2 className="text-6xl font-semibold  text-gray-900 leading-tight">
                    Preguntas frecuentes
                </h2>
                <p className="mt-3 text-gray-600">
                    Resolvé dudas rápidas sobre cómo usar Libricito.
                </p>
                </div>

                <div className="space-y-8">
                {items.map((item, i) => {
                    const isOpen = i === openIndex;
                    const panelId = `faq-panel-${i}`;
                    const btnId = `faq-button-${i}`;
                    return (
                    <div
                        key={i}
                        className={`rounded-xl border transition-colors w-full px-8 py-6 flex flex-col justify-between  ${
                        isOpen
                            ? "border-rose-300 bg-rose-50/50"
                            : "border-gray-300"
                        }`}
                    >
                        <button
                        id={btnId}
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className={`w-full flex items-center justify-between gap-4 text-left px-6 py-6
                            text-lg leading-7 transition-colors ${
                                isOpen
                                ? "text-rose-700 font-semibold"
                                : "text-gray-900"
                            }`}
                        >
                        <span className="flex-1">{item.q}</span>
                        {isOpen ? (
                            <MinusIcon className="h-6 w-6 shrink-0 text-rose-700" />
                        ) : (
                            <PlusIcon className="h-6 w-6 shrink-0 text-gray-900" />
                        )}
                        </button>

                        <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                        }`}
                        >
                        <div className="px-6 pb-6 pr-8 text-base text-gray-700">
                            {item.a}
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
}