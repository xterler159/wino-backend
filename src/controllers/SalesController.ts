import {getSales} from "../models/Sales";

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
