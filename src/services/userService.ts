import { db } from "../config/db/db";

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
}
