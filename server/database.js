const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "dev_plan_login",
});

module.exports = pool;
