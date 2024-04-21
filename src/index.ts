import { Elysia } from "elysia";
import { routesV1 } from "./routes";
import { middlawares } from "./middlewares";

const app = new Elysia().use(middlawares).use(routesV1).listen(3000)

export type App = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
