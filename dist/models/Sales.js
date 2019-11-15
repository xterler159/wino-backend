"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_async_1 = __importDefault(require("pg-async"));
const pgAsync = new pg_async_1.default({
    user: "kevin",
    password: "153mlk.J",
    host: "localhost",
    port: 5432,
    database: "wino_api"
});
exports.getSales = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield pgAsync.rows(`SELECT * FROM sales`);
    return data;
});
//# sourceMappingURL=Sales.js.map