import { db } from "../config/db/db";
import { UserService } from "./userService";

const userService = new UserService();

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

    async createCommerce(nombre: string, idPropietario: number) {
        try {
            const existing = await db.comercio.findFirst({
                where: {
                    id_propietario: idPropietario,
                    nombre: nombre
                }
            })

            if (existing) {
                throw new Error(`El usuario ya tiene un comercio con el mismo nombre.`)
            }

            const commerce = await db.comercio.create({
                data: {
                    nombre: nombre,
                    id_propietario: idPropietario,
                }
            })
            await db.usuariosComercio.create({
                data: {
                    id_usuario: idPropietario,
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