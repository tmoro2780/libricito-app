import express, { Request, Response } from 'express';
import { userRouter } from './routers/userRouter';

const app = express();
const port = 8000;

app.use('/users', userRouter)
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        "ok": true,
        "Libricito": "¡En construcción!"
    });
});

app.get('*not_found', function(_, res: Response){
    res.status(404).json({
        "ok": false,
        "msg": "¡No se encontró la página!"
    });
});

app.get('*not_found', function(_, res: Response){
    res.status(404).json({
        "ok": false,
        "msg": "¡No se encontró la página!"
    });
});

app.listen(port, () => {
    console.log(`Libricito ejecutandose y escuchando http://localhost:${port}`)
});
