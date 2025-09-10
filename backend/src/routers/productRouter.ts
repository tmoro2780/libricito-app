import { Router } from "express"

import { ProductService } from "../services/productService"
import { SessionCheck } from "../middleware/sessionCheck";

const sessionCheck = new SessionCheck();
const productService = new ProductService();

export const productRouter = Router()

productRouter.get('/', async (_, res) => {
    // Obtener todos los productos de la base de datos
    try {
        const productos = await productService.getAllProducts();
        res.status(200).json({ ok: true, data: productos })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

productRouter.get('/id/:id', async (req, res) => {
    // Obtener un producto de la base de datos por su id
    try {
        const productIdToGet = parseInt(req.params.id);
        const product = await productService.getProductById(productIdToGet);

        if (!product) {
            res.status(404).json({ ok: false, error: 'No se encontró el producto' });
            return;
        }

        res.status(200).json({ ok: true, data: product })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
}
)

productRouter.post('/id/:id/stock', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Modificar el stock de un producto en la base de datos
    try {
        const productIdToGet = parseInt(req.params.id);
        const newStock = parseInt(req.body.nuevo_stock);
        const idAccionador = req.session.user?.id as number;
        const product = await productService.setProductStock(productIdToGet,newStock,idAccionador);

        res.status(200).json({ ok: true, data: product })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
}
)

productRouter.post('/id/:id/tags-genero', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Asignar un tag de género literario a un producto
    try {
        const productIdToGet = parseInt(req.params.id);
        const genero = req.body.nuevo_genero;
        const idAccionador = req.session.user?.id as number;
        const product = await productService.setTagGeneroProducto(productIdToGet, genero, idAccionador);

        res.status(200).json({ ok: true, data: product })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
}
)

productRouter.post('/id/:id/borrar', sessionCheck.allowIfUserIsLogged, async (req, res) => {
    // Eliminar un producto de un comercio de la base de datos
    try {
        const idProducto = parseInt(req.params.id);
        const id_accionador = req.session.user?.id as number;

        const producto = await productService.eliminarProducto(idProducto, id_accionador)
        res.status(200).json({ ok: true, data: producto })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
});
