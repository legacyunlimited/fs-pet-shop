DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
    id serial PRIMARY KEY,
    name VARCHAR(20),
    age integer,
    kind varchar(20)
);