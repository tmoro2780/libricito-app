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
}
