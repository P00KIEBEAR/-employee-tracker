const fs = require('fs');
const mysql = require("mysql2/promise");

const connect = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "company_db",

  });
  console.log("connected as id" + ' ' + connection.threadId);
  return connection;

};
/*const showEmployees = () => {
  connect.query('SELECT * FROM employee', function (error, results) {
    if (error) throw error;
    console.table(results);
  })
}*/
module.exports = connect;
//module.exports = showEmployees;