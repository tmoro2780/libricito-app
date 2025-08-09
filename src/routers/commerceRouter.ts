import { Router } from "express"

import { SessionCheck } from "../middleware/sessionCheck";
import { CommerceService } from "../services/commerceService"

const sessionCheck = new SessionCheck();
const commerceService = new CommerceService();

export const commerceRouter = Router();

commerceRouter.get('/', async (_, res) => {
    // Obtener todos los comercios de la base de datos
    try {
        const commerces = await commerceService.getAllCommerces();
        res.status(200).json({ ok: true, data: commerces });
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message });
    }
})

commerceRouter.get('/id/:id', async (req, res) => {
    // Obtener un comercio de la base de datos por su ID
    try {
        const commerceIdToGet = parseInt(req.params.id);
        const commerce = await commerceService.getCommerceById(commerceIdToGet);

        if (!commerce) {
            res.status(404).json({ ok: false, error: 'No se encontró el comercio' });
            return;
        }

        res.status(200).json({ ok: true, data: commerce })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

commerceRouter.post('/crear', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Crear un comercio en la base de datos, atribuido a la cuenta de usuario con sesión iniciada
    try {
        const nombre = req.body.nombre;
        const id_propietario = req.session.user?.id as number;

        const commerce = await commerceService.createCommerce(nombre, id_propietario);
        res.status(200).json({ ok: true, data: commerce })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

commerceRouter.post('/id/:id/eliminar', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Eliminar un comercio de la base de datos, atribuido a la cuenta de usuario con sesión iniciada
    try {
        const idCommercio = parseInt(req.params.id);
        const idPropietario = req.session.user?.id as number;
        const verifNombreComercio = req.body.nombre_comercio;
        const verifIdComercio = parseInt(req.body.id_comercio);

        const deleted = await commerceService.deleteCommerce(idCommercio, idPropietario, verifNombreComercio, verifIdComercio);
        res.status(200).json({ ok: true, data: deleted })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})