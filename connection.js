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

module.exports = connect;
//module.exports = showEmployees;