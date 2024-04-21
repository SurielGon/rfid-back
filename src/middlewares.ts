import { cors } from '@elysiajs/cors'
import { Elysia } from "elysia";

const middlawares = new Elysia().use(cors());

export type Middlawares = typeof middlawares 

export {
    middlawares
}