const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "mariadb-35079-0.cloudclusters.net",
    password: "admin2020",
    database: "int_lottery_dev",
    port:35079
  });
  

module.exports={
    db,
}