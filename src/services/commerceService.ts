import { db } from "../config/db/db";
import { UserService } from "./userService";

export class CommerceService {
    // Servicio de gestión de comercios en la base de datos
    async getAllCommerces() {
        // Obtener todos los comercios de la base de datos
        try {
            const comercios = await db.comercio.findMany();

            return comercios;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener comercios. Mira los logs para más información.")
        }
    }

    async getCommerceById(commerceId: number) {
        // Obtener un comercio de la base de datos por su id
        try {
            const comercio = await db.comercio.findUnique({
                where: {
                    id_comercio: commerceId
                }
            })

            return comercio;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener comercio con id ${commerceId}. Mira los logs para más información.`)
        }
    }

    async createCommerce(nombre: string, idPropietario: number) {
        // Crear un comercio en la base de datos
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

    async addUserToCommerce(idUsuario: number, idComercio: number) {
        // Añadir un usuario a un comercio por sus IDs.
        try {
            await db.comercio.findUniqueOrThrow({
                where: {
                    id_comercio: idComercio
                }
            });
            const usuario = await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: idUsuario
                }
            });

            if (!usuario.verificado) {
                throw new Error('El usuario no está verificado.')
            }

            const user_in_commerce = await db.usuariosComercio.create({
                data: {
                    id_comercio: idComercio,
                    id_usuario: idUsuario
                }
            });

            return user_in_commerce;

        } catch (error) {
            console.error(error);
            throw new Error(`Error al añadir usuario al comercio. Mira los logs para más información.`)
        }
    }

    async deleteUserFromCommerce(idUsuario: number, idComercio: number) { //WIP
        // Eliminar un usuario de un comercio por su ID
        try {
            await db.comercio.findUniqueOrThrow({
                where: {
                    id_comercio: idComercio
                }
            });
            await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: idUsuario
                }
            });

            const user_in_commerce = await db.usuariosComercio.findFirstOrThrow({
                where: {
                    id_comercio: idComercio,
                    id_usuario: idUsuario
                }
            })
            const id_user_in_commerce = user_in_commerce.id_usuario_comercio;

            await db.usuariosComercio.delete({
                where: {
                    id_usuario_comercio: id_user_in_commerce
                }
            });

            return user_in_commerce;

        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar usuario del comercio. Mira los logs para más información.`)
        }
    }
    //HAY QUE CHEQUEARLO XQ NO ME CONVENCE
    async deleteCommerce(idCommercio: number, idUsuario: number, verifNombreComercio: string, verifIdComercio: number) {
        // Eliminar un comercio de la base de datos, atribuido a la cuenta de usuario con sesión iniciada
        try {
            // chequear la existencia del comercio
            const comercio = await db.comercio.findUnique({
                where: {
                    id_comercio: idCommercio
                }
            })

            // chequear que el usuario sea propietario del comercio
            if (!idUsuario === comercio.id_propietario) {
                throw new Error(`El usuario no es propietario del comercio.`)
            }

            // chequear campos de verificación extra para la eliminación y denegar la operación si no coinciden
            if (comercio.nombre !== verifNombreComercio || comercio.id_comercio !== verifIdComercio) {
                throw new Error(`El nombre e ID del comercio no coinciden. Por seguridad, no se eliminará el comercio.`)
            }

            // eliminar el comercio
            await db.comercio.delete({
                where: {
                    id_comercio: idCommercio
                }
            });

            // devolver datos del comercio eliminado
            return comercio;
        }
        catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar comercio. Mira los logs para más información.`)
        }
    }
}