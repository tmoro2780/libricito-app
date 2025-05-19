import { db } from "../config/db/db";

export class CommerceService {
    async getAllCommerces() {
        try {
            const comercios = await db.comercio.findMany();

            return comercios;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener comercios. Mira los logs para más información.")
        }
    }

    async getCommerceById(commerceId: string) {
        try {
            const comercio = await db.comercio.findUniqueOrThrow({
                where: {
                    id_comercio: parseInt(commerceId)
                }
            })

            return comercio;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener comercio con id ${commerceId}. Mira los logs para más información.`)
        }
    }

    async createCommerce(nombre: string, idPropietario: string) {
        try {
            const commerce = await db.comercio.create({
                data: {
                    nombre: nombre,
                    id_propietario: parseInt(idPropietario),
                }
            })
            await db.usuariosComercio.create({
                data: {
                    id_usuario: parseInt(idPropietario),
                    id_comercio: commerce.id_comercio,
                }
            })

            return commerce;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al crear comercio. Mira los logs para más información.`)
        }
    }
}