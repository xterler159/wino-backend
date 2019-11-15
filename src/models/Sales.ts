import PgAsync from "pg-async";

const pgAsync = new PgAsync({
    user: "kevin",
    password: "153mlk.J",
    host: "localhost",
    port: 5432,
    database: "wino_api"
});

export const getSales = async () => {
    const data = await pgAsync.rows(`SELECT * FROM sales`);
    return data;
};
