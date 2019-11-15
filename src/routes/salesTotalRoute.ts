import Router from "koa-router";

const router = new Router();

router.get("/total-sales", async (ctx) => {
    ctx.body = "TOTAL SALES PAGE";
    return ctx.status = 200;
});

export default router.routes();
