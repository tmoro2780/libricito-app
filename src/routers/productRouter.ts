import { Router } from "express"

import { ProductService } from "../services/productService"

const productService = new ProductService();

export const productRouter = Router()

productRouter.get('/', async (_, res) => {
    try {
        const users = await productService.getAllProducts();
        res.status(200).json({ ok: true, data: users })
    } catch (error) {
        res.status(500).json({ ok: false, error: (error as any).message })
    }
})

productRouter.get('/u/:id', async (req, res) => {
    try {
        const productIdToGet = req.params.id;
        const product = await productService.getProductById(productIdToGet);
        res.status(200).json({ ok: true, data: product })
    } catch (error) {
        res.status(404).json({ ok: false, error: (error as any).message })
    }
})
