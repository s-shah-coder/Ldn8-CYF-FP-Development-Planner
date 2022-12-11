const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "dev_plan_login"
});

// const createTblQuery = `CREATE TABLE users (
//     user_id serial PRIMARY KEY,
//     username VARCHAR ( 50 ) UNIQUE NOT NULL,
//     password VARCHAR ( 50 ) UNIQUE NOT NULL
// );`

// pool
//   .query(createTblQuery)
//   .then((Response) => {
//     console.log("Table Created");
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = pool;
