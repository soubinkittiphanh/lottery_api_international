const mysql = require("mysql2/promise");
const db = mysql.createPool({
  host: "mariadb-35079-0.cloudclusters.net",
   user: "root",
    password: "admin2020",
    database: "int_lottery_dev",
    port:35079,
});
module.exports = {
  db,
};
