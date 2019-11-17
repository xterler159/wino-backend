import Router from "koa-router";

import {generateExcelFile} from "../controllers/SalesController";

const router = new Router();

router.get("/export-sales", async (ctx) => {
    await generateExcelFile();

    return ctx.status = 200;
});

export default router.routes();
