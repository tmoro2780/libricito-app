import express, { Request, Response } from 'express';
const app = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Libricito, ¡en construcción!');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});
