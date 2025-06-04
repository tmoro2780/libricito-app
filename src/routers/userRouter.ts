import { Router } from "express"

import { SessionCheck } from "../middleware/sessionCheck";
import { UserService } from "../services/userService"

const sessionCheck = new SessionCheck();
const userService = new UserService();

export const userRouter = Router()

userRouter.get('/', async (_, res) => {
    // Obtener todos los usuarios de la base de datos
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({ ok: true, data: users })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
    }
})

userRouter.get('/u/:id', async (req, res) => {
    // Obtener un usuario de la base de datos por su id
    try {
        const userIdToGet = parseInt(req.params.id);
        const user = await userService.getUserById(userIdToGet);
        res.status(200).json({ ok: true, data: user })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
    }
})

userRouter.post('/signup', async (req, res) => {
    // Crear un usuario en la base de datos
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

userRouter.post('/login', sessionCheck.allowIfUserIsUnlogged, async (req, res) => {
    try {
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

userRouter.post('/logout', sessionCheck.allowIfUserIsLogged,async (req, res) => {
    try {
        req.session.destroy((_) => { res.status(200).json({ ok: true }); });
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})
