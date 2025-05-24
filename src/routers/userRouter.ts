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
        const userIdToGet = parseInt(req.params.id);
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
        if (req.session.user) {
            res.status(401).json({ ok: false, error: "Ya inició sesión" });
            return;
        }

        const email = req.body.email;
        const clave = req.body.clave;
        const match = await userService.loginUser(email, clave);

        if (match) {
            req.session.user = {
                id: match.id,
                email: match.email
            }
            res.status(200).json({ ok: true, data: match })
        } else {
            res.status(401).json({ ok: false, error: "Credenciales incorrectas" })
        }
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

userRouter.post('/logout', async (req, res) => {
    try {
        if (!req.session.user) {
            res.status(401).json({ ok: false, error: "No inició sesión" });
            return;
        }

        req.session.destroy((_) => { res.status(200).json({ ok: true }); });
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})
