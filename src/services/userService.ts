import dotenv from 'dotenv';
import { compare, genSaltSync, hashSync } from "bcrypt-ts";
import jwt from "jsonwebtoken";


import { db } from "../config/db/db";

dotenv.config();

export class UserService {
    // Servicio de gestion de usuarios en la base de datos

    async getAllUsers() {
        // Obtener todos los usuarios de la base de datos
        try {
            const users = await db.usuario.findMany();

            return users;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener usuarios. Mira los logs para más información.")
        }
    }

    async getUserById(userId: number) {
        // Obtener un usuario de la base de datos por su id
        try {
            const user = await db.usuario.findUnique({
                where: {
                    id_usuario: userId
                }
            });

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener usuario con id ${userId}. Mira los logs para más información.`)
        }
    }

    async getUserByEmail(email: string) {
        // Obtener un usuario de la base de datos por su e-mail
        try {
            const user = await db.usuario.findFirst({
                where: {
                    email: email
                }
            })

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener usuario con e-mail ${email}}. Mira los logs para más información.`)
        }
    }

    async createUser(email: string, nombres: string, apellidos: string, clave: string) {
        // Crear un usuario en la base de datos
        const salt = genSaltSync(10);
        const clave_hash = hashSync(clave, salt);

        try {
            const user = await db.usuario.create({
                data: {
                    email: email,
                    nombres: nombres,
                    apellidos: apellidos,
                    clave: clave_hash,
                    id_region: 1
                }
            })

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al crear usuario. Mira los logs para más información.`)
        }
    }

    async loginUser(email: string, clave: string) {
        // Verificar si un usuario existe y si su clave es correcta
        try {
            const user = await db.usuario.findFirstOrThrow({
                where: {
                    email: email
                }
            });

            const clave_hash: string = user.clave;
            const user_id: number = user.id_usuario

            const passwordsMatch = await compare(clave, clave_hash);
            if (passwordsMatch) {
                return { id: user_id, email: email }
            }
        } catch (error) {
            console.error(error);
            throw new Error(`Error al validar credenciales. Mira los logs para más información.`)
        }
    }
}
