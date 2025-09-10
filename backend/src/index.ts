/* 

Bienvenidos a Libricito, de INTELIGENCIA MURUCHi

Estas viendo 'index.ts'. Este es el punto de ejecución del servicio.

Se instancia la app de express.js, se conecta con los respectivos
routers y se corre el proyecto.

*/

import express, { Request, Response } from 'express';
import session from "express-session";
import { userRouter } from './routers/userRouter';
import { commerceRouter } from './routers/commerceRouter';
import { productRouter } from './routers/productRouter';


// Estructura de sesión
interface User {
    id: number;
    email: string;
};

declare module 'express-session' {
    interface SessionData {
        user: User;
    }
};


// App
const app = express();
const port = 8000;


// Routers
app.use(session({
    secret: 'librisecret', // Replace with a strong, random secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));
app.use(express.json());
app.use('/usuarios', userRouter);
app.use('/comercios', commerceRouter);
app.use('/productos', productRouter);

/*

ESTRUCTURA DE REQUESTS

Un request puede tener estos campos, cada uno con su respectivo tipo
de dato. Aquellos listados con un + al principio son obligatorios.

+    ok         booleano            Indica si un request se realizó con éxito o no.
-    msg        string              Indica un mensaje del request, si corresponde.
-    error      string              Indica un mensaje del request si ocurrió un error, si corresponde.
-    data       diccionario         Indica los datos a devolver, si corresponde.

*/


// Request: página principal
app.get('/', (_: Request, res: Response) => {
    res.status(200).json({
        "ok": true,
        "msg": "Te damos la bienvenida a Libricito"
    });
});

// Request: página no encontrada
app.all('*not_found', function(_, res: Response){
    res.status(404).json({
        "ok": false,
        "msg": "¡No se encontró la página!"
    });
});


// Host
app.listen(port, () => {
    console.log(`Libricito ejecutandose y escuchando en http://localhost:${port}`)
});
