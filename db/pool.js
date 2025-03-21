require("dotenv").config();
const {Pool} = require("pg");

module.exports = new Pool({
  host: process.env.HOST_NAME, 
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT 
});