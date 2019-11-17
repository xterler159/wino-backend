import Koa from "koa";
import KoaLogger from "koa-logger";
import Router from "koa-router";
import serve from "koa-static";

// importing routes
import excelRoute from "./routes/excelRoute";
import rootRoute from "./routes/rootRoute";
import salesRoute from "./routes/salesRoute";
import salesTotalRoute from "./routes/salesTotalRoute";

const app = new Koa();
const router = new Router();

console.log(__dirname + "/static");

// general middlewares
app.use(KoaLogger());
app.use(router.routes()).use(router.allowedMethods());
app.use(serve(__dirname + "/static"));

// routes middlewares
app.use(rootRoute); // "/"
app.use(salesRoute); // "/sales"
app.use(salesTotalRoute); // "/total-sales"
app.use(excelRoute); // /"/export-sales"

app.listen(3000);
