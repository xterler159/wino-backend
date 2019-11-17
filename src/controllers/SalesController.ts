import fs from "fs";
import {utils, write, writeFile} from "xlsx";

import {getSales} from "../models/Sales";

export const generateExcelFile = () => {
    const wb = utils.book_new();
    const wsData = [["Hello", "World"]];

    // creating the "workbook"
    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017, 12, 19)
    };
    wb.SheetNames.push("Test Sheet");
    const ws = utils.aoa_to_sheet(wsData);
    wb.Sheets["Test Sheet"] = ws;

    writeFile(wb, "files/test.xlsx");
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
