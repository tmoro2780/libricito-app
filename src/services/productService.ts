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

    async getProductById(productId: number) {
        // Obtener un producto de la base de datos por su id
        try {
            const product = await db.producto.findUnique({
                where: {
                    id_producto: productId
                }
            })

            return product;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener producto con id ${productId}. Mira los logs para más información.`)
        }
    }

    async getProductsByCommerce(commerceId: number) {
        // Obtener un producto de la base de datos por su id
        try {
            const products = await db.producto.findMany({
                where: {
                    id_propietario: commerceId
                }
            })

            return products;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener producto con id ${commerceId}. Mira los logs para más información.`)
        }
    }

    async createProduct(data: {
        nombre: string;
        autor: string;
        editorial: string;
        id_propietario: number;
        precio_de_lista: number;
        stock: number;
        descripcion?: string;
    }) {
        // Crear un nuevo producto en la base de datos
        try {
            const nuevoProducto = await db.producto.create({
                data: {
                    nombre: data.nombre,
                    autor: data.autor,
                    editorial: data.editorial,
                    descripcion: data.descripcion,
                    id_propietario: data.id_propietario,
                    precio_de_lista: data.precio_de_lista,
                    stock: data.stock
                }
            });

            return nuevoProducto;
        } catch (error) {
            console.error(error);
            throw new Error("Error al crear producto. Mira los logs para más información.");
        }
    }

    async setProductStock(id_producto: number, stock_nuevo: number) {
        // Modificar el stock de un producto en la base de datos
        try {
            const producto = await db.producto.update({
                where: {
                    id_producto: id_producto
                },
                data: {
                    stock: stock_nuevo
                }
            });

            return producto;
        } catch (error) {
            console.error(error);
            throw new Error("Error al modificar stock del producto. Mira los logs para más información.");
        }
    }

    async setTagGeneroProducto(id_producto: number, genero: string) {
        // Añadir un género a un producto en la base de datos
        try {
            const producto = await db.producto.findUnique({
                where: {
                    id_producto: id_producto
                }
            });

            const tag_existente = await db.tagGeneroProducto.findFirst({
                where: {
                    id_producto: id_producto,
                    genero: genero
                }
            })

            if (tag_existente) {
                throw new Error("El género otorgado ya está asignado al producto.");
            }

            await db.tagGeneroProducto.create({
                data: {
                    id_producto: id_producto,
                    genero: genero
                }
            })

            return producto;
        } catch (error) {
            console.error(error);
            throw new Error("Error al agregar género al producto. Mira los logs para más información.");
        }
    }
    async eliminarProducto(id_producto: number) {
        // Eliminar un producto de la base de datos
        try {
            const producto = await db.producto.delete({
                where: {
                    id_producto: id_producto
                }
            });

            return producto;
        } catch (error) {
            console.error(error);
            throw new Error("Error al eliminar producto. Mira los logs para más información.");
        }
    }
}
