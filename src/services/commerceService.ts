import { db } from "../config/db/db";

export class CommerceService {
    // Servicio de gestión de comercios en la base de datos
    async getAllCommerces() {
        // Obtener todos los comercios de la base de datos
        try {
            const comercios = await db.comercio.findMany({
                where: {
                    de_baja: false
                }
            }
            );

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
                    id_comercio: commerceId,
                    de_baja: false
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

    async addUserToCommerce(idUsuario: number, idComercio: number, idAccionador: number) {
        // Añadir un usuario a un comercio por sus IDs.
        try {
            // chequear existencia del comercio
            const comercio = await db.comercio.findUniqueOrThrow({
                where: {
                    id_comercio: idComercio,
                    de_baja: false
                }
            });

            // chequear que el accionador sea propietario del comercio
            if (idAccionador !== comercio.id_propietario) {
                throw new Error(`El propietario del comercio debe realizar esta acción.`)
            }

            // chequear existencia del usuario
            const usuario = await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: idUsuario
                }
            });

            // si el usuario no está verificado, lanzar excepción
            if (!usuario.verificado) {
                throw new Error('El usuario no está verificado.')
            }

            // chequear existencia del usuario en el comercio
            const existing_user_in_commerce = await db.usuariosComercio.findFirst({
                where: {
                    id_comercio: idComercio,
                    id_usuario: idUsuario
                }
            })

            // si el usuario ya está en el comercio, lanzar excepción
            if (existing_user_in_commerce) {
                throw new Error('El usuario ya forma parte del comercio.')
            }

            // añadir usuario al comercio
            const user_in_commerce = await db.usuariosComercio.create({
                data: {
                    id_comercio: idComercio,
                    id_usuario: idUsuario
                }
            });

            // devolver registro de usuario en el comercio
            return user_in_commerce;

        } catch (error) {
            console.error(error);
            throw new Error(`Error al añadir usuario al comercio. Mira los logs para más información.`)
        }
    }

    async deleteUserFromCommerce(idUsuario: number, idComercio: number, idAccionador: number) { //WIP
        // Eliminar un usuario de un comercio por su ID
        try {
            // chequear existencia del comercio
            const comercio = await db.comercio.findUniqueOrThrow({
                where: {
                    id_comercio: idComercio,
                    de_baja: false
                }
            });

            // chequear que el accionador sea propietario del comercio
            if (idAccionador != comercio.id_propietario) {
                throw new Error(`El propietario del comercio debe realizar esta acción.`)
            }

            // chequear existencia del usuario
            await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: idUsuario
                }
            });

            // chequear existencia del usuario en el comercio
            const user_in_commerce = await db.usuariosComercio.findFirstOrThrow({
                where: {
                    id_comercio: idComercio,
                    id_usuario: idUsuario
                }
            })
            const id_user_in_commerce = user_in_commerce.id_usuario_comercio;

            // eliminar usuario del comercio
            await db.usuariosComercio.delete({
                where: {
                    id_usuario_comercio: id_user_in_commerce
                }
            });

            // devolver registro de usuario en el comercio
            return user_in_commerce;

        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar usuario del comercio. Mira los logs para más información.`)
        }
    }

    async deleteCommerce(idCommercio: number, idAccionador: number, verifNombreComercio: string, verifIdComercio: number) {
        // Eliminar un comercio de la base de datos, atribuido a la cuenta de usuario con sesión iniciada
        try {
            // chequear la existencia del comercio
            const comercio = await db.comercio.findUniqueOrThrow({
                where: {
                    id_comercio: idCommercio,
                    de_baja: false
                }
            })

            // chequear que el accionador sea propietario del comercio
            if (idAccionador != comercio.id_propietario) {
                throw new Error(`El propietario del comercio debe realizar esta acción.`)
            }

            // chequear campos de verificación extra para la eliminación y denegar la operación si no coinciden
            if (comercio.nombre != verifNombreComercio || comercio.id_comercio != verifIdComercio) {
                throw new Error(`El nombre e ID del comercio no coinciden. Por seguridad, no se eliminará el comercio.`)
            }

            // eliminar el comercio
            await db.comercio.update({
                where: {
                    id_comercio: idCommercio
                },
                data: {
                    de_baja: true
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
