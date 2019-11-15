"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const rootRoute_1 = __importDefault(require("./routes/rootRoute"));
const salesRoute_1 = __importDefault(require("./routes/salesRoute"));
const app = new koa_1.default();
const router = new koa_router_1.default();
app.use(router.routes()).use(router.allowedMethods());
// routes
app.use(rootRoute_1.default);
app.use(salesRoute_1.default);
app.listen(3000);
//# sourceMappingURL=index.js.map