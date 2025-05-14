import { db } from "../config/db/db";

export class UserService {
    async getAllUsers() {
        try {
            const users = await db.usuario.findMany();

            //const usersSerialized = JSON.stringify(users, (_, value) => {
            //    return typeof value === 'bigint' ? value.toString() : value;
            //});

            return users;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener usuarios. Mira los logs para más información.")
        }
    }

    async getUserById(userId: string) {
        try {
            const user = await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: parseInt(userId)
                }
            })

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener usuario con id ${userId}. Mira los logs para más información.`)
        }
    }

    async createUser(email: string, nombres: string, apellidos: string) {
        try {
            const user = await db.usuario.create({
                data: {
                    email: email,
                    nombres: nombres,
                    apellidos: apellidos,
                }
            })

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al crear usuario. Mira los logs para más información.`)
        }
    }
}
