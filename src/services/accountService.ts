import { db } from "../config/db/db";

export class AccountService {
    async getAllAccounts() {
        try {
            const accounts = await db.cuenta.findMany();

            return accounts;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener cuentas. Mira los logs para más información.")
        }
    }

    async getAccountById(accountId: string) {
        try {
            const account = await db.cuenta.findUniqueOrThrow({
                where: {
                    id_cuenta: parseInt(accountId)
                }
            })

            return account;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener cuenta con id ${accountId}. Mira los logs para más información.`)
        }
    }
}
