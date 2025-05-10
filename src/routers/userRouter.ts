import { Router } from "express"

import { UserService } from "../services/userService"

const userService = new UserService();

export const userRouter = Router()

userRouter.get('/', async (_, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({ ok: true, data: users })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

userRouter.get('/u/:id', async (req, res) => {
    try {
        const userIdToGet = req.params.id;
        const user = await userService.getUserById(userIdToGet);
        res.status(200).json({ ok: true, data: user })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
    }
})
