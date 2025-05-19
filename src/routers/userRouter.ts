import { Router } from "express"

import { UserService } from "../services/userService"

const userService = new UserService();

export const userRouter = Router()

userRouter.get('/', async (_, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({ ok: true, data: users })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
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

userRouter.post('/signup', async (req, res) => {
    try {
        const email = req.body.email;
        const nombres = req.body.nombres;
        const apellidos = req.body.apellidos;
        const clave = req.body.clave;
        const user = await userService.createUser(email, nombres, apellidos, clave);
        res.status(200).json({ ok: true, data: user })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

userRouter.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const clave = req.body.clave;
        const test_value = await userService.loginUser(email, clave);
        res.status(200).json({ ok: true, data: test_value })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})
