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
exports.generateExcelFile = () => {
    const wb = xlsx_1.utils.book_new();
    const wsData = [["Hello", "World"]];
    // creating the "workbook"
    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017, 12, 19)
    };
    wb.SheetNames.push("Test Sheet");
    const ws = xlsx_1.utils.aoa_to_sheet(wsData);
    wb.Sheets["Test Sheet"] = ws;
    xlsx_1.writeFile(wb, "dist/static/test.xlsx");
};
exports.getTotal = () => __awaiter(void 0, void 0, void 0, function* () {
    const sales = yield Sales_1.getSales();
    const count = sales.length; // total of sel
    let total = 0;
    exports.generateExcelFile();
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