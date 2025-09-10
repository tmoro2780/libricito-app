import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient()

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et massa a risus cursus malesuada a sit amet neque. Duis eros nunc, efficitur in molestie et, porta posuere tortor. Aenean et massa sit amet nisi auctor placerat. Integer sit amet elit quis ligula fringilla porttitor vitae quis quam."

for (let i = 0; i < 10; i++) {
    const randomBook = {
        nombre: faker.book.title(),
        autor: faker.book.author(),
        editorial: faker.book.publisher(),
        descripcion: lorem,
        precio_de_lista: faker.number.float({
            min: 10.0,
            max: 40.0
        }),
        id_propietario: 1,
        stock: faker.number.int({
            min: 15,
            max: 30
        })
    }

    const book = await db.producto.create({
        data: randomBook
    })

    for (let i = 0; i < 2; i++) {
        const randomGenre = faker.book.genre()

        await db.tagGeneroProducto.create({
            data: {
                id_producto: book.id_producto,
                genero: randomGenre
            }
        })
    }
}
