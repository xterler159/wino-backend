import Koa from "koa";
import Router from "koa-router";

import rootRoute from "./routes/rootRoute";
import salesRoute from "./routes/salesRoute";
import salesTotalRoute from "./routes/salesTotalRoute";

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

// routes
app.use(rootRoute); // "/"
app.use(salesRoute); // "/sales"
app.use(salesTotalRoute); // "/total-sales"

app.listen(3000);
