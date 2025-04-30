import express, { Request, Response } from 'express';
const app = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        "ok": true,
        "Libricito": "¡En construcción!"
    });
});

app.listen(port, () => {
    console.log(`Libricito ejecutandose y escuchando http://localhost:${port}`)
});
