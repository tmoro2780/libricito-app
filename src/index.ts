import express, { Request, Response } from 'express';
import session from "express-session";
import { userRouter } from './routers/userRouter';
import { commerceRouter } from './routers/commerceRouter';
import { productRouter } from './routers/productRouter';

interface User {
    id: number;
    email: string;
};

declare module 'express-session' {
    interface SessionData {
        user: User;
    }
};

const app = express();
const port = 8000;

app.use(session({
    secret: 'librisecret', // Replace with a strong, random secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));
app.use(express.json());
app.use('/users', userRouter);
app.use('/commerces', commerceRouter);
app.use('/products', productRouter);

app.get('/', (_: Request, res: Response) => {
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

app.listen(port, () => {
    console.log(`Libricito ejecutandose y escuchando http://localhost:${port}`)
});
