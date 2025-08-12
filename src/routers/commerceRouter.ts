import { Router } from "express"

import { SessionCheck } from "../middleware/sessionCheck";
import { CommerceService } from "../services/commerceService"
import { ProductService } from "../services/productService";

const sessionCheck = new SessionCheck();
const commerceService = new CommerceService();
const productService = new ProductService();

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

commerceRouter.post('/id/:id/sumar-usuario', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Añadir un usuario a un comercio de la base de datos
    try {
        const idCommercio = parseInt(req.params.id);
        const id_usuario = req.body.usuario;
        const id_accionador = req.session.user?.id as number;

        const commerce = await commerceService.addUserToCommerce(id_usuario, idCommercio, id_accionador)
        res.status(200).json({ ok: true, data: commerce })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
});

commerceRouter.post('/id/:id/borrar-usuario', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Eliminar un usuario de un comercio de la base de datos
    try {
        const idCommercio = parseInt(req.params.id);
        const id_usuario = req.body.usuario;
        const id_accionador = req.session.user?.id as number;

        const commerce = await commerceService.deleteUserFromCommerce(id_usuario, idCommercio, id_accionador)
        res.status(200).json({ ok: true, data: commerce })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
});

commerceRouter.post('/id/:id/sumar-producto', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Añadir un producto a un comercio de la base de datos
    try {
        const idCommercio = parseInt(req.params.id);
        const nombreProd = req.body.nombre;
        const descripcionProd = req.body.descripcion;
        const autorProd = req.body.autor;
        const editorialProd = req.body.editorial;
        const precioListaProd = parseFloat(req.body.precio_de_lista);
        const stockProd = parseInt(req.body.stock);
        const id_accionador = req.session.user?.id as number;

        const producto = await productService.createProduct({
            nombre: nombreProd,
            descripcion: descripcionProd,
            autor: autorProd,
            editorial: editorialProd,
            precio_de_lista: precioListaProd,
            stock: stockProd,
            id_propietario: idCommercio
        }, id_accionador)
        res.status(200).json({ ok: true, data: producto })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
});

commerceRouter.post('/id/:id/borrar-producto', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Añadir un producto a un comercio de la base de datos
    try {
        const id_producto = parseInt(req.body.id_producto);
        const id_accionador = req.session.user?.id as number;

        const producto = await productService.eliminarProducto(id_producto, id_accionador);
        res.status(200).json({ ok: true, data: producto })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
});

commerceRouter.post('/id/:id/eliminar', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Eliminar un comercio de la base de datos, atribuido a la cuenta de usuario con sesión iniciada
    try {
        const idCommercio = parseInt(req.params.id);
        const idPropietario = req.session.user?.id as number;
        const verifNombreComercio = req.body.verif_nombre_comercio;
        const verifIdComercio = parseInt(req.body.verif_id_comercio);

        const deleted = await commerceService.deleteCommerce(idCommercio, idPropietario, verifNombreComercio, verifIdComercio);
        res.status(200).json({ ok: true, data: deleted })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
});