import { Router } from "express"

import { ProductService } from "../services/productService"

const productService = new ProductService();

export const productRouter = Router()

productRouter.get('/', async (_, res) => {
    // Obtener todos los productos de la base de datos
    try {
        const users = await productService.getAllProducts();
        res.status(200).json({ ok: true, data: users })
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
