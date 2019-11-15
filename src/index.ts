import Koa, {Request, Response} from "koa";
import Router from "koa-router";

import rootRoute from "./routes/rootRoute";
import salesRoute from "./routes/salesRoute";

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

// routes
app.use(rootRoute);
app.use(salesRoute);

app.listen(3000);
