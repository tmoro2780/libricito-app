import { Router } from "express"

import { CommerceService } from "../services/commerceService"

const commerceService = new CommerceService();

export const commerceRouter = Router()

commerceRouter.get('/', async (_, res) => {
    try {
        const commerces = await commerceService.getAllCommerces();
        res.status(200).json({ ok: true, data: commerces })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
    }
})

commerceRouter.get('/u/:id', async (req, res) => {
    try {
        const commerceIdToGet = req.params.id;
        const commerce = await commerceService.getCommerceById(commerceIdToGet);
        res.status(200).json({ ok: true, data: commerce })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
    }
})

commerceRouter.post('/create', async (req, res) => {
    try {
        if (!req.session.user) {
            res.status(401).json({ ok: false, error: "No inició sesión" })
            return;
        }

        const nombre = req.body.nombre;;
        const id_propietario = req.session.user.id;

        const commerce = await commerceService.createCommerce(nombre, id_propietario);
        res.status(200).json({ ok: true, data: commerce })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})