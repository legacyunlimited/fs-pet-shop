//node pg docs: https://node-postgres.com/
//pg express docs: https://expressjs.com/en/guide/database-integration.html#postgresql
//express docs: https://devdocs.io/express/
//pg docs: https://www.postgresql.org/docs/

//import es6 way, use "type": "module" within package.json
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.CONNECTION_STRING });
// const pool = new Pool({
//   host: process.env.HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DATABASE_NAME,
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
// });

pool.connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/pets", cors(), (req, res) => {
  pool
    .query("SELECT * FROM pets")
    .then((result) => {
      console.log(result.rows[0]);
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.use((req, res) => {
  res.status(404).sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Our app running on ${PORT}`);
});
