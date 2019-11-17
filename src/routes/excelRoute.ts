import Router from "koa-router";

import {generateExcelFile} from "../controllers/SalesController";

const router = new Router();

router.get("/export-sales", async (ctx) => {
    const filePath = await generateExcelFile();

    ctx.body = filePath;
    return ctx.status = 200;
});

export default router.routes();
