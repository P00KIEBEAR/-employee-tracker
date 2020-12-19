const mysql = require("mysql2/promises");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db"
});

connection.connect((err) => {
  if (err) throw err;
  afterConnection();
});

afterConnection = () => {


  connection.end();
};
module.exports = connection;