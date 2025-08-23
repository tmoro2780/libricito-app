import { Router } from "express"

import { ProductService } from "../services/productService"

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

productRouter.post('/id/:id/stock', async (req, res) => {
    // Modificar el stock de un producto en la base de datos
    try {
        const productIdToGet = parseInt(req.params.id);
        const newStock = parseInt(req.body.nuevo_stock);
        const idAccionador = req.session.user?.id as number;
        const product = await productService.setProductStock(productIdToGet,newStock,idAccionador);

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
