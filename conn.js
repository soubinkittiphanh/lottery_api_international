const mysql = require("mysql2/promise");
const db = mysql.createPool({
  host: "mariadb-35079-0.cloudclusters.net",
   user: "root",
    password: "admin2020",
    database: "lottery_savan",
    port:35079,
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "lottery_pakse",
  // port: 8080,
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
});
module.exports = {
  db,
};
