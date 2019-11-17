import fs from "fs";
import {utils, writeFile} from "xlsx";

import {getSales} from "../models/Sales";

export const generateExcelFile = async () => {
    const data = await getSales();

    const excelColumns = Object.keys(data[0]); // to get dynamically existing columns

    const wb = utils.book_new();
    const wsData = [excelColumns];

    // creating the "workbook"
    wb.SheetNames.push("Sales");
    const ws = utils.aoa_to_sheet(wsData);
    utils.sheet_add_json(ws, data);

    wb.Sheets.Sales = ws;

    writeFile(wb, "dist/static/report.xlsx");
};

export const getTotal = async () => {
    const sales = await getSales();
    const count = sales.length; // total of sel
    let total = 0;

    sales.map((sale: any) => {
        total += parseFloat(sale.amount);
    });

    const data = {
        getSalesTotal: {
            amount: total,
            count
        }
    };

    return data;
};
