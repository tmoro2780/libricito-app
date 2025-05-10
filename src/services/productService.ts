import { db } from "../config/db/db";

export class ProductService {
    async getAllProducts() {
        try {
            const productos = await db.producto.findMany();

            return productos;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener productos. Mira los logs para más información.")
        }
    }

    async getProductById(productId: string) {
        try {
            const product = await db.producto.findUniqueOrThrow({
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
