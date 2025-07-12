import { db } from "./src/config/db/db";
import { faker } from '@faker-js/faker';

const randomBook = {
    nombre: faker.book.title(),
    autor: faker.book.author(),
}
