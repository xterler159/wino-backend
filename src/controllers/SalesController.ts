import fs from "fs";
import {utils, write, writeFile} from "xlsx";

import {getSales} from "../models/Sales";

export const generateExcelFile = () => {
    const wb = utils.book_new();
    const wsData = [["Hello", "World"]];

    // creating the "workbook"
    wb.SheetNames.push("Sales");
    const ws = utils.aoa_to_sheet(wsData);
    wb.Sheets.Sales = ws;

    writeFile(wb, "dist/static/report.xlsx");
};

export const getTotal = async () => {
    const sales = await getSales();
    const count = sales.length; // total of sel
    let total = 0;

    generateExcelFile();

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
