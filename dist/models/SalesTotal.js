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
const Sales_1 = require("./Sales");
const pgAsync = new pg_async_1.default({
    user: "kevin",
    password: "153mlk.J",
    host: "localhost",
    port: 5432,
    database: "wino_api"
});
exports.getTotal = () => __awaiter(void 0, void 0, void 0, function* () {
    const sales = yield Sales_1.getSales();
    const count = sales.length; // total of sel
    let total = 0;
    sales.map((sale) => {
        total += parseFloat(sale.amount);
    });
    const data = {
        getSalesTotal: {
            amount: total,
            count
        }
    };
    console.log(data);
    return data;
});
//# sourceMappingURL=SalesTotal.js.map