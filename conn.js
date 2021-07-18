const mysql = require("mysql2/promise");
const con = require("./package.json");
const db = mysql.createPool({
  host: con.dbConf.host,
  user: con.dbConf.user,
  password: con.dbConf.password,
  database: con.dbConf.database,
  port: con.dbConf.port,
});
module.exports = {
  db,
};
