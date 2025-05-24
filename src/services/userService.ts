import dotenv from 'dotenv';
import { compare, genSaltSync, hashSync } from "bcrypt-ts";
import jwt from "jsonwebtoken";


import { db } from "../config/db/db";

dotenv.config();

export class UserService {
    async getAllUsers() {
        try {
            const users = await db.usuario.findMany();

            return users;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener usuarios. Mira los logs para más información.")
        }
    }

    async getUserById(userId: number) {
        try {
            const user = await db.usuario.findUniqueOrThrow({
                where: {
                    id_usuario: userId
                }
            })

            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener usuario con id ${userId}. Mira los logs para más información.`)
        }
    }

    async getUserByEmail(email: string) {
        try {
            const user = await db.usuario.findFirstOrThrow({
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
        const user = await this.getUserByEmail(email);
        const clave_hash: string = user.clave;
        const user_id: number = user.id_usuario

        const passwordsMatch = await compare(clave, clave_hash);
        if (passwordsMatch) {
            return { id: user_id, email: email }
        }
    }
}
