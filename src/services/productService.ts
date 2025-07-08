import { db } from "../config/db/db";

export class ProductService {
    // Servicio de gestión de productos en la base de datos
    async getAllProducts() {
        // Obtener todos los productos de la base de datos
        try {
            const productos = await db.producto.findMany();

            return productos;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener productos. Mira los logs para más información.")
        }
    }

    async getProductById(productId: string) {
        // Obtener un producto de la base de datos por su id
        try {
            const product = await db.producto.findUnique({
                where: {
                    id_producto: parseInt(productId)
                }
            })

            return product;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener producto con id ${productId}. Mira los logs para más información.`)
        }
    }

    async createProduct(data: {
        nombre: string;
        id_tipo: number;
        id_autor: number;
        precio_de_lista: number;
        descripcion?: string;
    }) {
        // Crear un nuevo producto en la base de datos
        try {
            const nuevoProducto = await db.producto.create({
                data: {
                    nombre: data.nombre,
                    id_tipo: data.id_tipo,
                    id_autor: data.id_autor,
                    precio_de_lista: data.precio_de_lista,
                    descripcion: data.descripcion,
                }
            });
            return nuevoProducto;
        } catch (error) {
            console.error(error);
            throw new Error("Error al crear producto. Mira los logs para más información.");
        }
    }
}
