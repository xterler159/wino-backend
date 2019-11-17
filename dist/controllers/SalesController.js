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
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = require("xlsx");
const Sales_1 = require("../models/Sales");
exports.generateExcelFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Sales_1.getSales();
    const excelColumns = Object.keys(data[0]); // to get dynamically existing columns
    const wb = xlsx_1.utils.book_new();
    const wsData = [excelColumns];
    // creating the "workbook"
    wb.SheetNames.push("Sales");
    const ws = xlsx_1.utils.aoa_to_sheet(wsData);
    xlsx_1.utils.sheet_add_json(ws, data);
    wb.Sheets.Sales = ws;
    xlsx_1.writeFile(wb, "dist/static/report.xlsx");
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
    return data;
});
//# sourceMappingURL=SalesController.js.map