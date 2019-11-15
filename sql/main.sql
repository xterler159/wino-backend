-- /!\ DONT COPY PASTE ALL THIS QUERIES /!\
-- Do it one by one please.

create TABLE sales (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    amount DECIMAL
);

insert into sales (name, amount)
    values('Jean', 10.56), ('Louise', 1500);
