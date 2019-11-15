import Router from "koa-router";
import {getSales} from "../models/Sales";

const router = new Router();

router.get("/sales", async (ctx) => {
    const data = await getSales();

    ctx.body = data;
    return ctx.status = 200;
});

export default router.routes();
