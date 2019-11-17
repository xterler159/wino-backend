import PgAsync from "pg-async";

const pgAsync = new PgAsync({
    user: "YOUR_USER_NAME",
    password: "YOUR_PASSWORD",
    host: "localhost",
    port: 5432,
    database: "wino_api"
});

export const getSales = async () => {
    const data = await pgAsync.rows(`SELECT * FROM sales`);
    return data;
};
