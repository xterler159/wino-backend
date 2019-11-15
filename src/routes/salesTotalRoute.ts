import Router from "koa-router";
import {getTotal} from "../controllers/SalesController";

const router = new Router();

router.get("/total-sales", async (ctx) => {
    const data = await getTotal();

    ctx.body = data;
    return ctx.status = 200;
});

export default router.routes();
