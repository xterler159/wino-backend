"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
// importing routes
const excelRoute_1 = __importDefault(require("./routes/excelRoute"));
const rootRoute_1 = __importDefault(require("./routes/rootRoute"));
const salesRoute_1 = __importDefault(require("./routes/salesRoute"));
const salesTotalRoute_1 = __importDefault(require("./routes/salesTotalRoute"));
const app = new koa_1.default();
const router = new koa_router_1.default();
console.log(__dirname + "/static");
// general middlewares
app.use(koa_logger_1.default());
app.use(router.routes()).use(router.allowedMethods());
app.use(koa_static_1.default(__dirname + "/static"));
// routes middlewares
app.use(rootRoute_1.default); // "/"
app.use(salesRoute_1.default); // "/sales"
app.use(salesTotalRoute_1.default); // "/total-sales"
app.use(excelRoute_1.default); // /"/export-sales"
app.listen(3000);
//# sourceMappingURL=index.js.map